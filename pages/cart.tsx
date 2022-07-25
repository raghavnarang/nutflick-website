import type { NextPage } from "next";
import CartItem from "../components/Cart/CartItem";
import Layout from "../components/Layout/Layout";

const CartPage: NextPage = () => {
  return (
    <Layout title="Cart | Nutflick" description="Best Dry Fruits in India">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Product</th>
            <th>Weight</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{/* TODO: Implement Cart Items */}</tbody>
      </table>
    </Layout>
  );
};

export default CartPage;
