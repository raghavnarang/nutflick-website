import { ArrowLeftIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import Image from "next/image";
import cx from "classNames";
import Layout from "../../components/Layout/Layout";
import AddToCart from "../../components/SingleProduct/AddToCart";
import styles from "../../styles/Product.module.css";
import ProductImage from "../../components/SingleProduct/ProductImage";

const ProductPage: NextPage = () => {
  return (
    <Layout title="Nutflick" description="Best Dry Fruits in India">
      <div className={styles.product}>
        <div className={styles.productInfo}>
          <div className={styles.topBar}>
            <button className={styles.backButton}>
              <ArrowLeftIcon width={15} className={styles.backButtonIcon} />{" "}
              Back
            </button>
            <h1 className={styles.productTitle}>
              Badaam Giri (Almond Kernels)
            </h1>
          </div>
          <ProductImage isMobile={true} />
          <AddToCart />
          <p className={styles.description}>
            A 28 grams, (or small handful) serving of almonds contains: Fiber:
            3.5 grams. Protein: 6 grams. Fat: 14 grams (9 of which are
            monounsaturated). Vitamin E: 37% of the RDA. Manganese: 32% of the
            RDA. Magnesium: 20% of the RDA. They also contain a decent amount of
            copper, vitamin B2 (riboflavin) and phosphorus.
          </p>
        </div>
        <ProductImage />
      </div>
    </Layout>
  );
};

export default ProductPage;
