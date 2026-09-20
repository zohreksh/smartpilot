import { getRequestURL, setHeader } from "h3";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const requestUrl = getRequestURL(event);
  const configuredBase = String(config.public.siteUrl || "").trim();
  const baseUrl = (configuredBase || requestUrl.origin).replace(/\/$/, "");

  setHeader(event, "content-type", "text/plain; charset=utf-8");

  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    "",
  ].join("\n");
});
