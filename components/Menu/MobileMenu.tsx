import cx from "classNames";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styles from "./mobileMenu.module.css";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

interface MobileMenuProps {
  links: { label: string; link?: string }[];
  showCart?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, setOpen] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.toggle}>
        <MenuIcon width={30} height={30} onClick={() => setOpen(true)} />
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
      >
        <div className={styles.sidebar} ref={nodeRef}>
          <div className={styles.close}>
            <XIcon width={30} height={30} onClick={() => setOpen(false)} />
          </div>
          <nav className={styles.menu}>
            <ul>
              {links.map(
                (link, i) =>
                  link.link && (
                    <li
                      className={cx(styles.menuItem, {
                        [styles.active]: i === 0 || i === 3,
                      })}
                      key={i}
                    >
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </div>
  );
};

export default MobileMenu;
