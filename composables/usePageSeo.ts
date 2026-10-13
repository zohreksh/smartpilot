type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  locale?: "fa" | "en";
};

export const usePageSeo = (options: PageSeoOptions) => {
  const config = useRuntimeConfig();
  const requestUrl = useRequestURL();

  const configuredBase = String(config.public.siteUrl || "").trim();
  const requestBase = `${requestUrl.protocol}//${requestUrl.host}`;
  const baseUrl = (configuredBase || requestBase).replace(/\/$/, "");
  const normalizedPath =
    options.path === "/" ? "/" : `/${options.path.replace(/^\/+|\/+$/g, "")}`;
  const canonicalUrl =
    normalizedPath === "/" ? `${baseUrl}/` : `${baseUrl}${normalizedPath}`;
  const locale = options.locale || (normalizedPath.startsWith("/en") ? "en" : "fa");
  const imagePath = options.image || "/images/hero/desktop-hero.webp";
  const imageUrl = new URL(imagePath, `${baseUrl}/`).toString();
  const imageAlt =
    options.imageAlt || (locale === "en"
      ? "SmartPilot | Digital product development"
      : "SmartPilot | طراحی و توسعه محصولات دیجیتال");
  // Only the explicit set of published translation pairs may advertise hreflang.
  const translatedPaths = new Set([
    "/", "/services", "/services/ai-development", "/services/ecommerce-development",
    "/projects", "/projects/shidaneh", "/projects/hevix", "/about", "/contact",
  ]);
  const sourcePath = normalizedPath === "/en"
    ? "/"
    : normalizedPath.startsWith("/en/") ? normalizedPath.slice(3) : normalizedPath;
  const englishPath = sourcePath === "/" ? "/en" : `/en${sourcePath}`;
  const alternates = translatedPaths.has(sourcePath)
    ? [
        { rel: "alternate", hreflang: "fa-IR", href: `${baseUrl}${sourcePath}` },
        { rel: "alternate", hreflang: "en", href: `${baseUrl}${englishPath}` },
        { rel: "alternate", hreflang: "x-default", href: `${baseUrl}${sourcePath}` },
      ]
    : [];

  useSeoMeta({
    title: options.title,
    description: options.description,
    robots: "index, follow, max-image-preview:large",
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: "website",
    ogSiteName: "SmartPilot",
    ogUrl: canonicalUrl,
    ogImage: imageUrl,
    ogImageAlt: imageAlt,
    ogLocale: locale === "en" ? "en_US" : "fa_IR",
    twitterCard: "summary_large_image",
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: imageUrl,
    twitterImageAlt: imageAlt,
  });

  useHead({
    link: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      ...alternates,
    ],
  });

  return {
    baseUrl,
    canonicalUrl,
    imageUrl,
  };
};
