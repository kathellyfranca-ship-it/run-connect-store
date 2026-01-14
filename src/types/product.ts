export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFormData {
  name: string;
  price: number;
  description: string;
  stock: number;
  imageUrl: string;
}
