export interface Animal {
  id: number;
  name: string;
  species: string;
  slug: string;
  category: string;
  image: string;
}

export interface AnimalInfo {
  id: number;
  name: string;
  featured: number;
  slug: string;
  species: string;
  category: string;
  tag: string;
  description: string;
  AI_habitat: string;
  AI_weight: number;
  AI_length: number;
  AI_lifespan: number;
  AI_origin: string;
  AI_status: string;
  feeding_habit: string;
  location: string;
  feeding_times: string;
  fun_facts: string;
  CS_efforts: string;
  CS_tent: string;
  CS_image: string;
  image: string;
  section_image: string;
  IUCN: string;
  animal_url: string | null;
  created_at: string | null;
  updated_at: string | null;
}
