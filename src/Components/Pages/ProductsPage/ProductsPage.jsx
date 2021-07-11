import { useLocation } from "react-router-dom";
import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import CallMeFixedBlock from "../../Common/CallMeFixedBlock/CallMeFixedBlock";
import ProductsNavBar from "../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../Common/ContactWithMe/ContactWithMe";
import styles from "./ProductsPage.module.css";
import Products from "./Products/Products";
import { NavLink } from "react-router-dom";
import productsData from "../../../products.json";

let products = productsData.krovelnyeMaterialy;

function ProductsPage() {
  const location = useLocation();
  let currentPagePath = location.pathname.split("/")[2];
  let pageData = getPageData(currentPagePath);
  return (
    <>
      
      <GlobalContent>
        <div className={styles.container}>
          <div className="breadcrumb">
            <NavLink to="/">Главная</NavLink>
            <p>&nbsp; / &nbsp;</p>
            <NavLink to="/krovelnye-materialy">Кровельные материалы</NavLink>
            {/* <p>&nbsp; / &nbsp;</p> */}
            {/* <p>{pageData.title}</p> */}
          </div>
          <div className={styles.content}>
            <ProductsNavBar products={productsLinks} />
            <div className={styles.productsContainer}>
              <Products pageData={pageData} />
              <div className={styles.contactWithMe}>
                <ContactWithMe />
              </div>
            </div>
          </div>
        </div>
      </GlobalContent>
      <CallMeFixedBlock />
    </>
  );
}

export default ProductsPage;

function getPageData(pagePath) {
  console.log(products);
  let pageData = { title: "", products: [] };
  switch (pagePath) {
    case "metallocherepitca":
      pageData = { title: "Металлочерепица", products: products };
      break;
    case "gibkaya_cherepitca":
      pageData = {
        title: "Гибкая черепица",
        products: [...products].reverse(),
      };
      break;
    case "gibkaya_cherepitca":
      pageData = {
        title: "Гибкая черепица",
        products: [...products],
      };
      break;
    case "profnastil":
      pageData = {
        title: "Профнастил",
        products: [...products].reverse(),
      };
      break;
    case "kompositnaya_cherepitca":
      pageData = {
        title: "Композитная черепица",
        products: [...products],
      };
      break;
    case "naturalnaya_cherepitca":
      pageData = {
        title: "Натуральная черепица",
        products: [...products].reverse(),
      };
      break;
    case "falcevaya_cherepitca":
      pageData = {
        title: "Фальцевая черепица",
        products: [...products],
      };
      break;
    case "gidroizolyazionnye_materialy":
      pageData = {
        title: "Гидроизоляционные материалы",
        products: [...products].reverse(),
      };
      break;
    case "kopmplectuyshie":
      pageData = {
        title: "Комплектующие",
        products: [...products],
      };
      break;
    default:
      pageData = {
        title: "ХЗ",
        products: [...products].reverse(),
      };
  }
  return pageData;
}

let productsLinks = [
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
