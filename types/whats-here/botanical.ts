// Interface for the API response structure

export interface Plants {
  id: number;
  boat_name: string;
  name: string;
  species: string;
  images: string;
  category: string;
  slug: string;
  Qf_height: string;
  Qf_bloom: string;
}

export interface PlantInfo {
  id: number;
  tag: string;
  slug: string;
  name: string;
  species: string;
  category: string;
  description: string;
  Qf_height: string;
  Qf_clr: string;
  Qf_bloom: string;
  Qf_temp: string;
  Qf_medicinal: string;
  vi_duration: string;
  vi_loc_info: string;
  hc_nat_hab: string;
  hc_life_span: string;
  hc_temp: string;
  S_MU: string;
  S_CS: string;
  S_Con: string;
  DYK: string;
  images: string;
  section_image: string;
  created_at: string;
  updated_at: string;
}
