interface Product {
  name: string;
  imageSrc?: string;
  description?: string;
  weights: { [key: string]: string };
  prices: { [key: string]: number };
}

export default Product;
