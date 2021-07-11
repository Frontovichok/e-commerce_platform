import Logo from "./Logo/Logo";
import MenuTop from "./MenuTop/MenuTop";
import styles from "./Header.module.css";
import DrawerMenu from "./Drawer/Drawer";
import SearchProduct from "./SearchProduct/SearchProduct";

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

const menuBottomItems = [
  {
    title: "Кровельные материалы",
    link: "/krovelnye-materialy",
    subMenu: [
      {
        title: "Металлочерепица",
        link: "/krovelnye-materialy/metallocherepitca",
      },
      {
        title: "Гибкая черепица",
        link: "/krovelnye-materialy/gibkaya_cherepitca",
      },
      { title: "Профнастил", link: "/krovelnye-materialy/profnastil" },
      {
        title: "Композитная черепица",
        link: "/krovelnye-materialy/kompositnaya_cherepitca",
      },
      {
        title: "Фасадная черепица",
        link: "/krovelnye-materialy/falcevaya_cherepitca",
      },
      {
        title: "Гидроизоляционные материалы",
        link: "/krovelnye-materialy/gidroizolyazionnye_materialy",
      },
      {
        title: "Комплектующие",
        link: "/krovelnye-materialy/kopmplectuyshie",
      },
    ],
  },
  {
    title: "Фасадные материалы",
    link: "/systems-1",
    subMenu: [
      {
        title: "... системы 1",
        link: "/systems-1/1",
      },
    ],
  },
  {
    title: "Водосточные системы",
    link: "/systems-2",
    subMenu: [
      {
        title: "... системы 1",
        link: "/systems-2/1",
      },
    ],
  },
  {
    title: "Мансардные окна",
    link: "/systems-3",
    subMenu: [
      {
        title: "... системы 1",
        link: "/systems-3/1",
      },
    ],
  },
  {
    title: "Снегозадержание",
    link: "/systems-3",
    subMenu: [
      {
        title: "... системы 1",
        link: "/systems-3/1",
      },
    ],
  },
];
