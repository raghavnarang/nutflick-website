import Image from "next/image";
import Container from "../Container/Container";
import Menu from "../Menu/Menu";
import styles from "./header.module.css";
import HeaderCategories from "./HeaderCategories";
import HeaderTop from "./HeaderTop";

const Header = () => {
  const links = [
    { link: "#", label: "About" },
    { link: "#", label: "Contact" },
    { link: "#", label: "FAQ" },
    { link: "#", label: "Privacy Policy" },
    { link: "#", label: "Terms & Conditions" },
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
              <Menu links={links} categories={categories} />
            </div>
          </Container>
        </header>
      </div>
      <HeaderCategories categories={categories} />
    </>
  );
};

export default Header;
