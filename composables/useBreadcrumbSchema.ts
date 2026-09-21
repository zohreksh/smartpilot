type BreadcrumbItem = {
  name: string;
  path: string;
};

export const useBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  const config = useRuntimeConfig();
  const requestUrl = useRequestURL();

  const configuredBase = String(config.public.siteUrl || "").trim();
  const requestBase = `${requestUrl.protocol}//${requestUrl.host}`;
  const baseUrl = (configuredBase || requestBase).replace(/\/$/, "");

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path === "/" ? "/" : `/${item.path.replace(/^\/+/, "")}`}`,
    })),
  };

  useHead({
    script: [
      {
        key: `breadcrumb-${items.map((item) => item.path).join("-")}`,
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema),
      },
    ],
  });
};
