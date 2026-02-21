import type { MetadataRoute } from "next";

const BASE_URL = "https://digitalgba.org.cn";
const LOCALES = ["zh-CN", "zh-TW", "en"] as const;
const PAGES = [
  "",
  "/about",
  "/culture-system",
  "/research",
  "/industry",
  "/cooperation",
  "/classroom",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" || page === "/news" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page === "/culture-system" || page === "/research" ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [
              l === "zh-CN" ? "zh-Hans" : l === "zh-TW" ? "zh-Hant" : "en",
              `${BASE_URL}/${l}${page}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
