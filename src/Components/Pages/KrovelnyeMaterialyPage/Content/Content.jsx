import Types from "./Types/Types";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../../ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import Advaces from "./Advices/Advaces";
// import Gallery from "./Gallery/Gallery";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <p>Кровельные материалы</p>
      </div>
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
];
