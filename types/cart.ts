import Product from "./product";

interface CartItem {
  product: Product;
  weight: string;
  quantity: number;
}

export type { CartItem };
