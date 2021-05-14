import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import CallMe from "../../CallMe/CallMe";
import ProductsNavBar from "../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../ContactWithMe/ContactWithMe";
import styles from "./ProductsPage.module.css";
import Products from "./Products/Products";
import { NavLink } from "react-router-dom";

function ProductsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <GlobalContent>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <NavLink to="/krovelnye-materialy">Кровельные материалы</NavLink>
            <p>&nbsp; / &nbsp;</p>
            <p>... товары</p>
          </div>
          <div className={styles.content}>
            <ProductsNavBar />
            <div className={styles.productsContainer}>
              <Products />
              <div className={styles.contactWithMe}>
                <ContactWithMe />
              </div>
            </div>
          </div>
        </div>
      </GlobalContent>
      <Footer />
      <CallMe />
    </>
  );
}

export default ProductsPage;
