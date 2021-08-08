import Logo from "./Logo/Logo";
import MenuTop from "./MenuTop/MenuTop";
import styles from "./Header.module.css";
import DrawerMenu from "./Drawer/Drawer";
import SearchProduct from "./SearchProduct/SearchProduct";
import menuBottomItems from "../../productsCategories.json";

function Header() {
  const isMobile = window.innerWidth <= 1500;
  return (
    <div>
      <div className={styles.header}>
        <Logo />
        {isMobile ? (
          <DrawerMenu
            menuTopItems={menuTopItems}
            menuBottomItems={menuBottomItems}
          />
        ) : (
          <MenuTop menuTopItems={menuTopItems} />
        )}
      </div>
      <SearchProduct menuItems={menuBottomItems} />
    </div>
  );
}

export default Header;

const menuTopItems = [
  { title: "О компании", link: "/about", subMenu: [] },
  { title: "Доставка", link: "/delivery", subMenu: [] },
  { title: "Оплата", link: "/pay", subMenu: [] },
  { title: "Цены за работу", link: "/price", subMenu: [] },
  { title: "Контакты", link: "/contacts", subMenu: [] },
];
