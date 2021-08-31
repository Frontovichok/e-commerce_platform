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
import productsData from "../../../data/categoriesData/krovlya.json";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";

let products = productsData.subMenu[0].subMenu[0].productsData;

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
            {/* <ProductsNavBar products={productsLinks} /> */}
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
  let pageData = { title: "Hi", products: [...products] };

  return pageData;
}
