import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { profile } from "./data/cv";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = profile.website.url;
    return [
        { url: `${base}/`, priority: 1 },
        { url: `${base}/cv/`, priority: 0.8 },
        ...projects.map((p) => ({ url: `${base}/work/${p.id}/`, priority: 0.7 })),
    ];
}
