import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: "Arjun C",
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#030406",
    theme_color: "#030406",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
