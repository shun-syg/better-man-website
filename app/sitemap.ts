import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
