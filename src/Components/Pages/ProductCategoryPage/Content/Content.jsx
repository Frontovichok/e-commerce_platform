import Types from "./Types/Types";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../../Common/ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import { useLocation } from "react-router-dom";
import Advaces from "./Advices/Advaces";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import productsCategories from "../../../../data/productsCategories.json";

function Content() {
  const location = useLocation();
  let curentCategoryPath = location.pathname.split("/")[1];
  let curentCategoryData = productsCategories.filter(
    (category) => category.link === `/${curentCategoryPath}`
  )[0];
  console.log(curentCategoryData);
  let currentCategorySubCategories = curentCategoryData.subMenu;
  let breadcrumbCurentPage = curentCategoryData.title;
  return (
    <div className={styles.container}>
      <Breadcrumb
        path={[
          { link: "/", text: "Главная" },
          { text: "/" },
          { text: breadcrumbCurentPage },
        ]}
      />
      <div className={styles.content}>
        <ProductsNavBar products={currentCategorySubCategories} />
        <div>
          <Types subCategories={currentCategorySubCategories} />
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
