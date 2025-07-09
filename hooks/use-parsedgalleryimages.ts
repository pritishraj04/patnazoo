import { useMemo } from "react";
import { GalleryItem, GalleryImage } from "@/types/index";

export interface ParsedImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function useParsedGalleryImages(
  galleryItem: GalleryItem | null | undefined
): ParsedImage[] {
  return useMemo(() => {
    if (!galleryItem?.image_path) return [];

    try {
      const parsed: GalleryImage[] = JSON.parse(galleryItem.image_path);

      return parsed.map((img) => ({
        src: img.url || "/placeholder.svg?height=400&width=600",
        alt: img.title || "Gallery Image",
        title: img.title || "",
        description: img.description || "",
      }));
    } catch (error) {
      console.error("Failed to parse image_path JSON:", error);
      return [];
    }
  }, [galleryItem]);
}
