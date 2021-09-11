import Types from "./Types/Types";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../../Common/ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import Advaces from "./Advices/Advaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../Common/Breadcrumb/Breadcrumb";
import productsCategories from "../../../../data/productsCategories.json";
import ProductsPage from "../../ProductsPage/ProductsPage";

function Content() {
  const [breadcrumbData, setBreadcrumbData] = useState([]);
  let { categoryName, subCategoryName, subSubCategoryName } = useParams();
  let curentCategoryData = productsCategories.filter(
    (category) => category.link === `/catalog/${categoryName}`
  )[0];
  let currentCategorySubCategories = curentCategoryData.subMenu;
  let breadcrumbCurentPage = curentCategoryData.title;

  useEffect(() => {
    // setBreadcrumbData();
    if (!subCategoryName) {
      setBreadcrumbData([
        { link: "/", text: "Главная" },
        { text: "/" },
        { text: curentCategoryData.title },
      ]);
    }
  }, [categoryName, subCategoryName, subSubCategoryName]);

  return (
    <div className={styles.container}>
      <Breadcrumb path={breadcrumbData} />
      <div className={styles.content}>
        <ProductsNavBar products={currentCategorySubCategories} />
        {subCategoryName ? (
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
