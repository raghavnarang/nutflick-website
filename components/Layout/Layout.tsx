import Head from "next/head";
import Container from "../Container/Container";
import Header from "../Header/Header";

import styles from "./layout.module.css";

interface LayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className={styles.mainBody}>
        <Container>{children}</Container>
      </main>

      <footer className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} Nutflick. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default Layout;
export type { LayoutProps };
