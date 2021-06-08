import { NavLink } from "react-router-dom";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import PriceTable from "./PriceTable/PriceTable";
import Mobile from "./Mobile/Mobile";
import styles from "./Content.module.css";

const isMobile = window.innerWidth <= 500;

function Content() {
  return (
    <div>
      <section className="section">
        <div className="breadcrumb">
          <NavLink to="/">Главная</NavLink>
          <p>&nbsp; / &nbsp;</p>
          <p>Цены за работу</p>
        </div>
        <div className={styles.content}>
          {isMobile ? (
            <Mobile products={products} />
          ) : (
            <>
              <ProductsNavBar products={products} />
              <PriceTable />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Content;

let products = [
  {
    name: "Композитные материалы",
    products: [
      {
        link: "/krovelnye-materialy/metallocherepitca",
        name: "Металлочерепица",
      },
      {
        link: "/krovelnye-materialy/gibkaya_cherepitca",
        name: "Гибкая черепица",
      },
      {
        link: "/krovelnye-materialy/profnastil",
        name: "Профнастил",
      },
      {
        link: "/krovelnye-materialy/kompositnaya_cherepitca",
        name: "Композитная черепица",
      },
      {
        link: "/krovelnye-materialy/naturalnaya_cherepitca",
        name: "Натуральная черепица",
      },
      {
        link: "/krovelnye-materialy/falcevaya_cherepitca",
        name: "Фальцевая черепица",
      },
      {
        link: "/krovelnye-materialy/gidroizolyazionnye_materialy",
        name: "Рулонные гидроизоляционные материалы",
      },
      {
        link: "/krovelnye-materialy/kopmplectuyshie",
        name: "Комплектующие",
      },
    ],
  },
  {
    name: "Фасадные системы",
    products: [
      {
        link: "/fasadnye-sistemy/1",
        name: "1",
      },
      {
        link: "/fasadnye-sistemy/2",
        name: "2",
      },
      {
        link: "/fasadnye-sistemy/3",
        name: "3",
      },
      {
        link: "/fasadnye-sistemy/4",
        name: "4",
      },
    ],
  },
];
