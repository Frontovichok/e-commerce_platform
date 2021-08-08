import { NavLink } from "react-router-dom";
import PriceTable from "./PriceTable/PriceTable";
import Mobile from "./Mobile/Mobile";
import styles from "./Content.module.css";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

const isMobile = window.innerWidth <= 500;

function Content() {
  return (
    <div>
      <section className="section">
        <Breadcrumb
          path={[
            { link: "/", text: "Главная" },
            { text: "/" },
            { text: "Цены за работу" },
          ]}
        />
        <div className={styles.content}>
          {isMobile ? (
            <Mobile products={products} />
          ) : (
            <>
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
        link: "/krovlya/metallocherepitsa",
        name: "Металлочерепица",
      },
      {
        link: "/krovlya/gibkaya_cherepitca",
        name: "Гибкая черепица",
      },
      {
        link: "/krovlya/profnastil",
        name: "Профнастил",
      },
      {
        link: "/krovlya/kompositnaya_cherepitca",
        name: "Композитная черепица",
      },
      {
        link: "/krovlya/naturalnaya_cherepitca",
        name: "Натуральная черепица",
      },
      {
        link: "/krovlya/falcevaya_cherepitca",
        name: "Фальцевая черепица",
      },
      {
        link: "/krovlya/gidroizolyazionnye_materialy",
        name: "Рулонные гидроизоляционные материалы",
      },
      {
        link: "/krovlya/kopmplectuyshie",
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
