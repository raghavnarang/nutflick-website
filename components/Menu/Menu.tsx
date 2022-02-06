import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

interface MenuProps {
  links: { label: string; link?: string }[];
  showCart?: boolean;
}

const Menu: React.FC<MenuProps> = (props) => (
  <>
    <DesktopMenu {...props} />
    <MobileMenu {...props} />
  </>
);

export default Menu;
export type { MenuProps };
