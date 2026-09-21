import { getRequestURL, setHeader } from "h3";

const ROUTES = [
  "/",
  "/services",
  "/services/ai-development",
  "/services/ecommerce-development",
  "/projects",
  "/about",
  "/contact",
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const requestUrl = getRequestURL(event);
  const configuredBase = String(config.public.siteUrl || "").trim();
  const baseUrl = (configuredBase || requestUrl.origin).replace(/\/$/, "");

  const urls = ROUTES.map((path) => {
    const loc = path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`;
    return `  <url><loc>${escapeXml(loc)}</loc></url>`;
  }).join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
});
