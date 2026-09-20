import { chromium } from "playwright";
import fs from "node:fs/promises";

const routes = [
  ["home", "/"],
  ["services", "/services/"],
  ["projects", "/projects/"],
  ["about", "/about/"],
  ["contact", "/contact/"],
];

const viewports = [
  ["mobile", { width: 440, height: 956 }],
  ["desktop", { width: 1440, height: 1000 }],
];

const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:4173";

await fs.mkdir("qa-artifacts", { recursive: true });

const browser = await chromium.launch({ headless: true });

try {
  for (const [viewportName, viewport] of viewports) {
    const context = await browser.newContext({
      viewport,
      deviceScaleFactor: 1,
      locale: "fa-IR",
      reducedMotion: "reduce",
    });

    for (const [routeName, route] of routes) {
      const page = await context.newPage();
      const response = await page.goto(`${baseUrl}${route}`, {
        waitUntil: "networkidle",
      });

      if (!response || !response.ok()) {
        throw new Error(`${viewportName}/${routeName}: HTTP ${response?.status()}`);
      }

      await page.evaluate(async () => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const step = Math.max(320, Math.floor(window.innerHeight * 0.75));
        const max = document.documentElement.scrollHeight;

        for (let y = 0; y < max; y += step) {
          window.scrollTo(0, y);
          await sleep(90);
        }

        window.scrollTo(0, 0);
        await sleep(250);
      });

      await page.waitForLoadState("networkidle");

      const layout = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        brokenImages: Array.from(document.images)
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.currentSrc || img.src),
      }));

      if (layout.scrollWidth > layout.clientWidth + 2) {
        throw new Error(
          `${viewportName}/${routeName}: horizontal overflow ${layout.scrollWidth}px > ${layout.clientWidth}px`,
        );
      }

      if (layout.brokenImages.length) {
        throw new Error(
          `${viewportName}/${routeName}: broken images: ${layout.brokenImages.join(", ")}`,
        );
      }

      await page.screenshot({
        path: `qa-artifacts/${viewportName}-${routeName}.png`,
        fullPage: true,
        animations: "disabled",
      });

      await page.close();
    }

    await context.close();
  }
} finally {
  await browser.close();
}
