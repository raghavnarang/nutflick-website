import Image from "next/image";
import styles from "./ProductSingle.module.css";

const ProductSingle: React.FC = () => (
  <div className={styles.product}>
    <div className={styles.productImage}>
      <div
        className={styles.productImageBack}
        style={{ backgroundImage: `url(/product.jpeg)` }}
      />
      <Image
        src="/product.jpeg"
        alt="product"
        layout="fill"
        objectFit="contain"
      />
    </div>
  </div>
);

export default ProductSingle;
