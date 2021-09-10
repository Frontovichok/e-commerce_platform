import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Products from "./Products/Products";
import styles from "./ProductsPage.module.css";

function ProductsPage({ setBreadcrumbData }) {
  const pathName = useLocation().pathname;
  let [subCategory, setSubCategory] = useState({});
  let [subSubCategory, setSubSubCategory] = useState({});
  let { categoryName, subCategoryName, subSubCategoryName } = useParams();
  useEffect(() => {
    setSubCategory([]);
    setSubSubCategory([]);
    fetch(`http://localhost:3000/categoriesData/${categoryName}.json`)
      .then((response) => response.json())
      .then((data) => {
        data.subMenu.map((subCategory) => {
          if (subCategory.link.split("/")[2] === subCategoryName) {
            setSubCategory(subCategory);
            setBreadcrumbData([
              { link: "/", text: "Главная" },
              { text: "/" },
              { link: `/catalog${data.link}`, text: data.title },
              { text: "/" },
              { text: subCategory.title },
            ]);
            subSubCategoryName &&
              subCategory.subMenu.map((ssCategory) => {
                if (ssCategory.link.split("/")[3] === subSubCategoryName) {
                  setSubSubCategory(ssCategory);
                  setBreadcrumbData([
                    { link: "/", text: "Главная" },
                    { text: "/" },
                    { link: `/catalog${data.link}`, text: data.title },
                    { text: "/" },
                    {
                      text: subCategory.title,
                      link: `/catalog${subCategory.link}`,
                    },
                    { text: "/" },
                    { text: ssCategory.title },
                  ]);
                }
              });
          }
        });
      });
  }, [pathName]);
  return (
    <>
      <div className={styles.productsContainer}>
        <Products
          pageData={
            Object.keys(subSubCategory).length > 0
              ? subSubCategory
              : subCategory
          }
        />
      </div>
    </>
  );
}

export default ProductsPage;
