import type { NextPage } from "next";
import Layout from "../../components/Layout/Layout";
import ProductSingle from "../../components/Product/ProductSingle";
import styles from "../styles/Product.module.css";

const ProductPage: NextPage = () => {
  return (
    <Layout title="Nutflick" description="Best Dry Fruits in India">
      <ProductSingle />
    </Layout>
  );
};

export default ProductPage;
