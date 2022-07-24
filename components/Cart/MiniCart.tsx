import { ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import cx from "classNames";
import styles from "./miniCart.module.css";

interface MiniCartProps {
  isActive?: boolean;
  mobileIcon?: boolean;
}

const MiniCart: React.FC<MiniCartProps> = ({
  isActive,
  mobileIcon = false,
}) => {
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
        <span className={styles.cartQty}>{0}</span>
      </a>
    </Link>
  );
};

export default MiniCart;
export type { MiniCartProps };
