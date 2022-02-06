import Link from "next/link";
import Container from "../Container/Container";
import styles from "./headerTop.module.css";

const HeaderTop: React.FC = () => {
  return (
    <div className={styles.headerTopWrapper}>
      <Container className={styles.headerTop}>
        <p>
          WhatsApp or Call Order:{" "}
          <Link href="tel:+918437661855">8437661855</Link>
        </p>
      </Container>
    </div>
  );
};

export default HeaderTop;
