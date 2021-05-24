import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from "./Header.module.css";
import DrawerMenu from "./Drawer/Drawer";

function Header() {
  const isMobile = window.innerWidth <= 500;
  return (
    <div className={styles.header}>
      <Logo />
      {isMobile ? (
        <DrawerMenu menuItems={menuItems} />
      ) : (
        <Menu menuItems={menuItems} />
      )}
    </div>
  );
}

export default Header;

const menuItems = [
  { title: "О компании", link: "/about", subMenu: [] },
  { title: "Цены", link: "/price", subMenu: [] },
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
    title: "... системы 1",
    link: "/systems-1",
    subMenu: [
      {
        title: "... системы 1",
        link: "/systems-1/1",
      },
    ],
  },
  {
    title: "... системы 2",
    link: "/systems-2",
    subMenu: [
      {
        title: "... системы 1",
        link: "/systems-2/1",
      },
    ],
  },
  {
    title: "... системы 3",
    link: "/systems-3",
    subMenu: [
      {
        title: "... системы 1",
        link: "/systems-3/1",
      },
    ],
  },
];
