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
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";

let products = productsData.krovlya;

function ProductsPage() {
  const location = useLocation();
  let currentPagePath = location.pathname.split("/")[2];
  let pageData = getPageData(currentPagePath);
  return (
    <>
      <GlobalContent>
        <div className={styles.container}>
          <Breadcrumb
            path={[
              { link: "/", text: "Главная" },
              { text: "/" },
              { link: "/krovlya", text: "Кровельные материалы" },
              { text: "/" },
              { text: pageData.title },
            ]}
          />
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
  let pageData = { title: "", products: [] };
  switch (pagePath) {
    case "metallocherepitsa":
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
