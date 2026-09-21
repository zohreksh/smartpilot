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
  const imagePath = options.image || "/images/og/nexastudio-og.webp";
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
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SmartPilot",
          url: baseUrl,
          description: options.description,
          areaServed: "Iran",
          serviceType: [
            "Software development",
            "Artificial intelligence solutions",
            "SEO automation",
            "Digital product development",
          ],
          image: imageUrl,
        }),
      },
    ],
  });

  return {
    baseUrl,
    canonicalUrl,
  };
};
