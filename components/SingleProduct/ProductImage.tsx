import Image from "next/image";
import cx from "classNames";
import styles from "./productImage.module.css";

interface ProductImageProps {
  isMobile?: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({ isMobile = false }) => {
  return (
    <div
      className={cx(styles.productImage, {
        [styles.desktop]: !isMobile,
        [styles.mobile]: isMobile,
      })}
    >
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
  );
};

export default ProductImage;
export type { ProductImageProps };
