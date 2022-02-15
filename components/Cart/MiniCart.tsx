import { ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import cx from "classNames";
import styles from "./miniCart.module.css";
import { useCart } from "@shopify/hydrogen";

interface MiniCartProps {
  isActive?: boolean;
  mobileIcon?: boolean;
}

const MiniCart: React.FC<MiniCartProps> = ({
  isActive,
  mobileIcon = false,
}) => {
  const { lines } = useCart();
  return (
    <Link href={"/#"}>
      <a
        className={cx(styles.miniCart, {
          [styles.active]: isActive,
          [styles.mobileIcon]: mobileIcon,
        })}
      >
        <ShoppingCartIcon className={styles.cartIcon} />
        {!mobileIcon && "Cart"}
        <span className={styles.cartQty}>{lines.length}</span>
      </a>
    </Link>
  );
};

export default MiniCart;
export type { MiniCartProps };
