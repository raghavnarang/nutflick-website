import type { NextPage } from "next";
import { useState } from "react";
import CartItemComponent from "../components/Cart/CartItem";
import Layout from "../components/Layout/Layout";
import { CartItem } from "../types/cart";
import styles from "../styles/Cart.module.css";

const CartItems: CartItem[] = [1, 2, 3, 4].map(() => ({
  product: {
    name: "Almonds",
    imageSrc: "https://placehold.jp/20x20.png",
    weights: {
      "100g": "100gm",
      "250g": "250gm",
    },
    prices: {
      "100g": 200,
      "250g": 500,
    },
  },
  weight: "100g",
  quantity: 3,
}));

const CartPage: NextPage = () => {
  const [items, setItems] = useState(CartItems);

  return (
    <Layout title="Cart | Nutflick" description="Best Dry Fruits in India">
      <div className={styles.cartContainer}>
        <table className={styles.cartTable}>
          <thead className={styles.cartHeader}>
            <tr>
              <th className={styles.cartHeaderCell}>Product</th>
              <th className={styles.cartHeaderCell}>Weight</th>
              <th className={styles.cartHeaderCell}>Quantity</th>
              <th className={styles.cartHeaderCell}>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartItemComponent {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default CartPage;
