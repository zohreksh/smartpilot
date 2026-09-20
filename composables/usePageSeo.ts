type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
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
  const imagePath = options.image || "/images/og/SmartPilot-og.webp";
  const imageUrl = new URL(imagePath, `${baseUrl}/`).toString();

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: "website",
    ogUrl: canonicalUrl,
    ogImage: imageUrl,
    ogLocale: "fa_IR",
    twitterCard: "summary_large_image",
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: imageUrl,
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
  };
};
