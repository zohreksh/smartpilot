import { chromium } from "playwright";
import fs from "node:fs/promises";

const routes = [
  ["home", "/"],
  ["demo", "/demo/"],
  ["english-demo", "/en/demo/"],
  ["english-home", "/en/"],
  ["english-services", "/en/services/"],
  ["english-ai", "/en/services/ai-development/"],
  ["english-ecommerce", "/en/services/ecommerce-development/"],
  ["english-projects", "/en/projects/"],
  ["english-shidaneh", "/en/projects/shidaneh/"],
  ["english-hevix", "/en/projects/hevix/"],
  ["english-about", "/en/about/"],
  ["english-contact", "/en/contact/"],
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

    // Keep screenshots deterministic: simulate an Iranian visitor on the Persian root.
    await context.route("https://api.country.is/**", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: '{"country":"IR"}' }),
    );

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

      if (routeName.startsWith("english-")) {
        const locale = await page.evaluate(() => ({
          lang: document.documentElement.lang,
          dir: document.documentElement.dir || document.body.dir,
        }));
        if (locale.lang !== "en" || locale.dir !== "ltr") {
          throw new Error(`${viewportName}/${routeName}: wrong locale ${JSON.stringify(locale)}`);
        }
        if (!(await page.locator('a[hreflang="fa"]').count())) {
          throw new Error(`${viewportName}/${routeName}: missing Persian language link`);
        }
      }

      if (routeName === "demo" || routeName === "english-demo") {
        const expectedTitle = routeName === "english-demo" ? "A more helpful way to shop." : "خریدی با راهنمایی بهتر.";
        if (await page.locator("main.retail-demo h1").innerText() !== expectedTitle) {
          throw new Error(`${viewportName}/${routeName}: demo title or locale is incorrect`);
        }
        if (!(await page.locator(".demo-bottom-note").count())) {
          throw new Error(`${viewportName}/${routeName}: missing demo-only disclosure`);
        }
        await page.screenshot({
          path: `qa-artifacts/${viewportName}-${routeName}-initial.png`,
          fullPage: true,
          animations: "disabled",
        });
        await page.locator(".choice-card").nth(1).click();
        await page.locator(".mode-options button").nth(1).click();
        await page.locator(".prompt-chips button").first().click();
        if (await page.locator(".product-card").count() !== 3) {
          throw new Error(`${viewportName}/${routeName}: expected three sample product recommendations`);
        }
        await page.locator(".product-card button").first().click();
        if (!(await page.locator('[role="dialog"][aria-modal="true"]').count())) {
          throw new Error(`${viewportName}/${routeName}: product details dialog did not open`);
        }
        await page.locator(".modal-close").click();
        await page.locator(".preview-tabs button").nth(1).click();
        if (!(await page.locator(".owner-view").count())) {
          throw new Error(`${viewportName}/${routeName}: seller catalogue view did not open`);
        }
        await page.screenshot({
          path: `qa-artifacts/${viewportName}-${routeName}-interaction.png`,
          fullPage: true,
          animations: "disabled",
        });
        await page.locator(".workspace-footer button").click();
        if (!(await page.locator(".empty-products").count())) {
          throw new Error(`${viewportName}/${routeName}: reset did not restore initial demo state`);
        }
      }

      if (routeName === "english-about") {
        if (!(await page.locator(".en-about-hero").count())) {
          throw new Error(`${viewportName}: English about page is missing its custom hero`);
        }
        if (await page.locator(".en-about-hero h1").count() !== 1) {
          throw new Error(`${viewportName}: English about hero must have one H1`);
        }
        if (await page.locator(".en-about-work-card").count() !== 2) {
          throw new Error(`${viewportName}: English about hero must show both selected projects`);
        }
        if (!(await page.locator('.en-about-hero a[href$="#team"]').count())) {
          throw new Error(`${viewportName}: English about hero is missing the Meet the team action`);
        }
      }

      if (routeName === "english-services") {
        if (!(await page.locator(".en-services-hero").count())) {
          throw new Error(`${viewportName}: English services page is missing its custom warm hero`);
        }
        if (await page.locator(".en-services-hero h1").count() !== 1) {
          throw new Error(`${viewportName}: English services hero must have one H1`);
        }
        if (await page.locator(".en-service-visual-card").count() !== 3) {
          throw new Error(`${viewportName}: English services hero must show all three capability cards`);
        }
        if (!(await page.locator(".en-services-primary").count())) {
          throw new Error(`${viewportName}: English services hero is missing its primary action`);
        }
      }

      if (routeName === "english-contact") {
        if (!(await page.locator(".en-contact-hero-panel").count())) {
          throw new Error(`${viewportName}: English contact page is missing its direct-contact hero panel`);
        }
        if (!(await page.locator('.en-contact-hero a[href="#project-brief"]').count())) {
          throw new Error(`${viewportName}: English contact hero is missing the project-brief action`);
        }
        if (!(await page.locator('.en-contact-hero a[href^="mailto:"]').count())) {
          throw new Error(`${viewportName}: English contact hero is missing direct email`);
        }
        await page.locator('form button[type="submit"]').click();
        if (!(await page.locator('#en-full-name[aria-invalid="true"]').count())) {
          throw new Error(`${viewportName}: invalid English contact form submitted without validation`);
        }
        await page.locator('#en-full-name').fill("Test Customer");
        await page.locator('#en-contact-way').fill("test@example.com");
        await page.locator('#en-project-type').selectOption({ label: "Custom software platform" });
        await page.locator('#en-message').fill("Please help us plan our platform.");
        await page.evaluate(() => {
          window.__contactOpenedUrl = "";
          window.open = (url) => { window.__contactOpenedUrl = String(url); return null; };
        });
        await page.locator('form button[type="submit"]').click();
        const opened = await page.evaluate(() => window.__contactOpenedUrl || "");
        if (!opened.startsWith("https://wa.me/989379407868?text=") ||
            !decodeURIComponent(opened).includes("Test Customer")) {
          throw new Error(`${viewportName}: English contact form did not build the expected WhatsApp URL`);
        }
      }

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

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(150);

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
