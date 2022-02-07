import Link from "next/link";
import cx from "classNames";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import styles from "./desktopMenu.module.css";
import MiniCart from "../Cart/MiniCart";

interface DesktopMenuProps {
  links: { label: string; link?: string }[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ links }) => {
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

        {/* Login Link */}
        <li className={styles.menuItem}>
          <Link href={"#"}>Login/Register</Link>
        </li>

        {/* Cart Link */}
        <li className={styles.menuItem}>
          <MiniCart />
        </li>
      </ul>
    </nav>
  ) : null;
};

export default DesktopMenu;
export type { DesktopMenuProps };
