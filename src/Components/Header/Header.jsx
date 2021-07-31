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
        subMenu: [
          {
            title: "Classic",
            link: "/krovelnye-materialy/metallocherepitca/classic",
          },
          {
            title: "Kamea",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Kredo",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Kvinta plus",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Kvinta plus 3D",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Kvinta Uno",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Modern",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Quadro profi",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
        ],
      },
      { title: "Профнастил", link: "/krovelnye-materialy/profnastil" },
      {
        title: "Фальцевая кровля",
        link: "/krovelnye-materialy/faltsevaya-krovlya",
        subMenu: [
          {
            title: "Кликфальц ",
            link: "/krovelnye-materialy/metallocherepitca/classic",
          },
          {
            title: "Кликфальц Pro",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Кликфальц Pro Gofr",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Кликфальц Pro Line",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Кликфальц mini",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Кликфальц Line",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Фальц двойной стоячий",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
          {
            title: "Фальц двойной стоячий Line",
            link: "/krovelnye-materialy/metallocherepitca/kamea",
          },
        ],
      },
      {
        title: "Композитная черепица",
        link: "/krovelnye-materialy/kompositnaya_cherepitca",
        subMenu: [
          {
            title: "Листы",
            link: "/krovelnye-materialy/kompositnaya_cherepitca/classic",
          },
          {
            title: "Доборные элементы",
            link: "/krovelnye-materialy/kompositnaya_cherepitca/classic",
          },
          {
            title: "Комплектующие",
            link: "/krovelnye-materialy/kompositnaya_cherepitca/classic",
          },
        ],
      },
      {
        title: "Гибкая черепица",
        link: "/krovelnye-materialy/gibkaya_cherepitca",
        subMenu: [
          {
            title: "Katepal",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
          {
            title: "Рулонная черепица",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
          {
            title: "Шингас",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
          {
            title: "Икопал",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
          {
            title: "Технониколь",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
          {
            title: "CertainTeed",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
          {
            title: "Tegola",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
          {
            title: "Комплектующие",
            link: "/krovelnye-materialy/gibkaya_cherepitca/classic",
          },
        ],
      },
      {
        title: "ЦПЧ и натуральная черепица",
        link: "/krovelnye-materialy/falcevaya_cherepitca",
        subMenu: [
          {
            title: "Керамическая черепица Braas",
            link: "/krovelnye-materialy/cpch_naturalnaya_cherepitsa/classic",
          },
          {
            title: "ЦПЧ Braas",
            link: "/krovelnye-materialy/cpch_naturalnaya_cherepitsa/classic",
          },
          {
            title: "Комплектующие Braas",
            link: "/krovelnye-materialy/cpch_naturalnaya_cherepitsa/classic",
          },
        ],
      },
      {
        title: "Рулонные кровельные материалы",
        link: "/krovelnye-materialy/rulonnye_kroverlnye_materialy",
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
