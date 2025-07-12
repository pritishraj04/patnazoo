export interface PriceItem {
  category: string;
  price: number;
  note: string;
}

export interface PricingInfo {
  id: string;
  name: string;
  description: string;
  prices: PriceItem[];
}
