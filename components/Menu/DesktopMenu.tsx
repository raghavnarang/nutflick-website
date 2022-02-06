import Link from "next/link";
import cx from "classNames";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import styles from "./desktopMenu.module.css";

interface DesktopMenuProps {
  links: { label: string; link?: string }[];
  showCart?: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ links, showCart = true }) => {
  return links.length > 0 ? (
    <nav className={styles.menu}>
      <ul>
        {links.map(
          (link, i) =>
            link.link && (
              <li
                className={cx(styles.menuItem, { [styles.active]: i === 0 })}
                key={i}
              >
                <Link href={link.link}>{link.label}</Link>
              </li>
            )
        )}
        {showCart && (
          <li className={cx(styles.menuItem, styles.cart)}>
            <Link href={"/#"}>
              <a>
                <ShoppingCartIcon className={styles.cartIcon} />
                Cart<span>0</span>
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  ) : null;
};

export default DesktopMenu;
export type { DesktopMenuProps };
