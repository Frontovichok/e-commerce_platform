import Types from "./Types/Types";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../../Common/ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import Advaces from "./Advices/Advaces";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";

function Content() {
  return (
    <div className={styles.container}>
      <Breadcrumb
        path={[
          { link: "/", text: "Главная" },
          { text: "/" },
          { text: "Кровельные материалы" },
        ]}
      />
      <div className={styles.content}>
        <ProductsNavBar products={products} />
        <div>
          <Types />
          <Advaces />
          {/* <Gallery /> */}
          <div className={styles.contactWithMe}>
            <ContactWithMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

let products = [
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
];
