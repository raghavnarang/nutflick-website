import cx from "classNames";
import styles from "./addToCart.module.css";

const AddToCart: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectorRow}>
        <div className={cx(styles.priceBox, styles.selectorBox)}>
          <span className={styles.boxLabel}>Price</span>
          <span className={styles.price}>
            ₹200<span>per</span>
          </span>
        </div>
        <div className={cx(styles.sizeBox, styles.selectorBox)}>
          <span className={styles.boxLabel}>Weight</span>
          <select className={styles.weight}>
            <option value="1kg">1kg</option>
            <option value="500gm">500gm</option>
            <option value="250gm">250gm</option>
          </select>
        </div>
        <div className={cx(styles.qtyBox, styles.selectorBox)}>
          <span className={styles.boxLabel}>Quantity</span>
          <input type="number" className={styles.qty} defaultValue={1} min={1} />
        </div>
      </div>
      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
