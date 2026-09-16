function normalizeSiteUrl(value: string | undefined) {
  if (!value) return undefined;

  try {
    return new URL(value).origin;
  } catch {
    return undefined;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

