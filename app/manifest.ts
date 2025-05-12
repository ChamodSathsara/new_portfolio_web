import type { MetadataRoute } from "next";
import { Globe } from "lucide-react";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sathsara - Portfolio",
    short_name: "Portfolio",
    description:
      "Professional portfolio of a Full Stack Developer specializing in MERN stack and Java programming",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroRm-HUjVkqTdJX4mbBKwQAv1gFSq7t95is.webp",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroRm-HUjVkqTdJX4mbBKwQAv1gFSq7t95is.webp",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
