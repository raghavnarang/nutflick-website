import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/ProductList/ProductList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Nutflick" description="Best Dry Fruits in India">
      <ProductList />
    </Layout>
  );
};

export default Home;
