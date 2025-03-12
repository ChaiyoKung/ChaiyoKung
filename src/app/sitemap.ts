import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://chaiyokung.com",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
