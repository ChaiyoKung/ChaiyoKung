import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.chaiyokung.com",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
