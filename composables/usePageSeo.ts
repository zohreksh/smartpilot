type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
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
  const imagePath = options.image || "/images/hero/desktop-hero.webp";
  const imageUrl = new URL(imagePath, `${baseUrl}/`).toString();
  const imageAlt =
    options.imageAlt || "SmartPilot | طراحی و توسعه محصولات دیجیتال";

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
    ogLocale: "fa_IR",
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
    ],
  });

  return {
    baseUrl,
    canonicalUrl,
    imageUrl,
  };
};
