
export interface Plan {
  id: number;
  name: string;
  speed: string;
  price: string;
  details: string[];
  whatsappMessage: string;
  isFeatured?: boolean;
}
