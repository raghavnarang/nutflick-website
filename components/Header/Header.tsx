import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import Menu from "../Menu/Menu";
import styles from "./header.module.css";
import HeaderCategories from "./HeaderCategories";
import HeaderTop from "./HeaderTop";

const Header = () => {
  const links = [
    { link: "#", label: "Home" },
    { link: "#", label: "About" },
    { link: "#", label: "Contact" },
    { link: "#", label: "Login/Register" },
  ];

  const categories = [
    { link: "#", label: "All Products" },
    { link: "#", label: "Kaju (Cashew)" },
    { link: "#", label: "Badam (Almonds)" },
    { link: "#", label: "Pista (Pistachio)" },
    { link: "#", label: "Kishmish" },
    { link: "#", label: "Kesar (Saffron)" },
    { link: "#", label: "Kesar (Saffron)" },
    { link: "#", label: "Kesar (Saffron)" },
  ];

  return (
    <>
      <div className={styles.headerWrapper}>
        <HeaderTop />
        <header>
          <Container className={styles.header}>
            <div className={styles.logo}>
              <Image
                src="/logo.png"
                width={256}
                height={60}
                layout="intrinsic"
              />
            </div>
            <div className={styles.menu}>
              <Menu links={links} />
            </div>
          </Container>
        </header>
      </div>
      <HeaderCategories categories={categories} />
    </>
  );
};

export default Header;
