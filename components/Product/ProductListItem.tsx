import Image from "next/image";
import styles from "./ProductListItem.module.css";

const ProductListItem = () => {
  return (
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
      <div className={styles.productInfo}>
        <p className={styles.name}>Badam Giri (Almond Kernels)</p>
        <div className={styles.priceBox}>
          <p className={styles.price}>₹200<span>per 1kg</span></p>
        </div>

        <p className={styles.weights}><b>Available:</b> 250g, 500g, 1kg</p>
      </div>
    </div>
  );
};

export default ProductListItem;
