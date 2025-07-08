export interface GalleryItem {
  id: number;
  gallery_type: string;
  section_id: string;
  title: string | null;
  description: string | null;
  image_path: string;
  alt_text: string | null;
  order: number;
  created_at: string;
  updated_at: string;
}
