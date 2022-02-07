import cx from "classNames";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styles from "./mobileMenu.module.css";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import MiniCart from "../Cart/MiniCart";

interface MobileMenuProps {
  links?: { label: string; link?: string }[];
  categories?: { link: string; label: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, categories }) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!nodeRef.current?.contains(e.target as Element) && isOpened) {
        console.log("hello");
        setOpen(false);
      }
    };

    document.addEventListener("click", fn);

    return () => document.removeEventListener("click", fn);
  }, [isOpened]);

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuIcons}>
        <MiniCart mobileIcon={true} />
        <div className={styles.toggle}>
          <MenuIcon width={30} height={30} onClick={() => setOpen(true)} />
        </div>
      </div>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={500}
        nodeRef={nodeRef}
        classNames={{
          enter: styles.transitionEnter,
          enterActive: styles.transitionEnterActive,
          enterDone: styles.transitionEnterDone,
          exit: styles.transitionEnter,
          exitActive: styles.transitionExitActive,
          exitDone: styles.transitionExitDone,
        }}
        onEntered={() => setOpened(true)}
        onExited={() => setOpened(false)}
      >
        <div className={styles.sidebar} ref={nodeRef}>
          <div className={styles.close}>
            <XIcon width={30} height={30} onClick={() => setOpen(false)} />
          </div>
          <nav className={styles.menu}>
            {categories && (
              <div className={styles.menuSection}>
                <span className={styles.menuSectionTitle}>Categories</span>
                <ul>
                  {categories &&
                    categories.map(
                      (cat, i) =>
                        cat.link && (
                          <li className={styles.menuItem} key={i}>
                            <Link href={cat.link}>{cat.label}</Link>
                          </li>
                        )
                    )}
                </ul>
              </div>
            )}
            <div className={styles.menuSection}>
              <span className={styles.menuSectionTitle}>Links</span>
              <ul>
                <li className={cx(styles.menuItem, styles.cart)}>
                  <MiniCart />
                </li>
                <li className={cx(styles.menuItem, styles.cart)}>
                  <Link href={"#"}>My Orders</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href={"#"}>Login/Register</Link>
                </li>
                {links &&
                  links.map(
                    (link, i) =>
                      link.link && (
                        <li className={styles.menuItem} key={i}>
                          <Link href={link.link}>{link.label}</Link>
                        </li>
                      )
                  )}
              </ul>
            </div>
          </nav>
        </div>
      </CSSTransition>
    </div>
  );
};

export default MobileMenu;
