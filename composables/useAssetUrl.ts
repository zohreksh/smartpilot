export const useAssetUrl = (path: string) => {
  const config = useRuntimeConfig();
  const base = config.app.baseURL || "/";

  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
};
