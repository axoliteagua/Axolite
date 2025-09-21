export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}