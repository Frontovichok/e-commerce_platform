import Types from "./Types/Types";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../../ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import Advaces from "./Advices/Advaces";
// import Gallery from "./Gallery/Gallery";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>
        <p>Кровельные материалы</p>
      </div>
      <div className={styles.content}>
        <ProductsNavBar />
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
