import TopBar from "../../TopBar/TopBar";
import Header from "../../Header/Header";
import GlobalContent from "../../GlobalContent/GlobalContent";
import Footer from "../../Footer/Footer";
import CallMe from "../../CallMe/CallMe";
import ProductsNavBar from "../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../ContactWithMe/ContactWithMe";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <GlobalContent>
        <div className={styles.container}>
          <p>Кровельная залупа</p>
          <div className={styles.content}>
            <ProductsNavBar />
            <div className={styles.productsContainer}>
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
