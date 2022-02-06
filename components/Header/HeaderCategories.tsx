import Link from "next/link";
import cx from "classNames";
import Container from "../Container/Container";
import styles from "./headerCategories.module.css";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ViewGridIcon } from "@heroicons/react/outline";

interface HeaderCategoriesProps {
  categories: { link: string; label: string }[];
}

const HeaderCategories: React.FC<HeaderCategoriesProps> = ({ categories }) => {
  return (
    <>
      <div className={styles.headerCategoriesWrapper}>
        <Container className={styles.headerCategories}>
          <nav>
            <span className={styles.categoriesText}>
              <ViewGridIcon width={25} height={25} />
            </span>
            <ul>
              {categories.map(
                (cat, i) =>
                  cat.link && (
                    <li
                      className={cx({
                        [styles.active]: i === 0 || i === 4,
                      })}
                      key={i}
                    >
                      <Link href={cat.link}>{cat.label}</Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
        </Container>
      </div>
      <Container className={styles.swipeCategories}>
        <ArrowNarrowLeftIcon width={18} height={18} />
        <span>Swipe for more categories</span>
        <ArrowNarrowRightIcon width={18} height={18} />
      </Container>
    </>
  );
};

export default HeaderCategories;
export type { HeaderCategoriesProps };
