import Types from "./Types/Types";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../../Common/ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import { useLocation } from "react-router-dom";
import Advaces from "./Advices/Advaces";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import productsCategories from "../../../../data/productsCategories.json";
import ProductsPage from "../../ProductsPage/ProductsPage";

function Content() {
  const location = useLocation();
  let { category, subCategory } = useParams();
  const [breadcrumbData, setBreadcrumbData] = useState([]);
  let curentCategoryPath = location.pathname.split("/")[2];
  let currentSubCategory = location.pathname.split("/")[3];
  let curentCategoryData = productsCategories.filter(
    (category) => category.link === `/catalog/${curentCategoryPath}`
  )[0];
  let currentCategorySubCategories = curentCategoryData.subMenu;
  let breadcrumbCurentPage = curentCategoryData.title;

  console.log("--------category: ", category);
  console.log("--------subCategory: ", subCategory);

  useEffect(() => {
    // setBreadcrumbData();
    if (!currentSubCategory) {
      setBreadcrumbData([
        { link: "/", text: "Главная" },
        { text: "/" },
        { text: curentCategoryData.title },
      ]);
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <Breadcrumb path={breadcrumbData} />
      <div className={styles.content}>
        <ProductsNavBar products={currentCategorySubCategories} />
        {currentSubCategory ? (
          <ProductsPage
            setBreadcrumbData={setBreadcrumbData}
            breadcrumbData={breadcrumbData}
          />
        ) : (
          <div>
            <Types subCategories={currentCategorySubCategories} />
            <Advaces />
            {/* <Gallery /> */}
            <div className={styles.contactWithMe}>
              <ContactWithMe />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
