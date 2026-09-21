import type { MetadataRoute } from "next";
import { profile } from "./data/cv";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${profile.website.url}/sitemap.xml`,
    };
}
