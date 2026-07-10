import type { MetadataRoute } from "next";
const DOMAIN = "https://kinglegacy.robloxguides.xyz";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/fruits", "/leveling", "/pvp", "/swords", "/races",
    "/islands", "/bosses", "/about", "/contact",
    "/privacy", "/terms", "/cookie-policy",
  ];
  return paths.map((p) => ({
    url: `${DOMAIN}${p}`,
    lastModified: new Date("2026-07-01"),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p.startsWith("/privacy") || p.startsWith("/terms") ? 0.3 : 0.7,
  }));
}
