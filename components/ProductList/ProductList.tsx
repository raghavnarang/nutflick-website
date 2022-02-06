import ProductListItem from "../Product/ProductListItem";
import styles from "./product-list.module.css";

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {Array.from(Array(25).keys()).map((i) => (
        <ProductListItem key={i} />
      ))}
    </div>
  );
};

export default ProductList;
