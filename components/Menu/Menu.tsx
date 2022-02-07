import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

interface MenuProps {
  links: { label: string; link?: string }[];
  categories?: { link: string; label: string }[];
  showCart?: boolean;
}

const Menu: React.FC<MenuProps> = ({ categories, ...props }) => (
  <>
    <DesktopMenu {...props} />
    <MobileMenu {...props} categories={categories} />
  </>
);

export default Menu;
export type { MenuProps };
