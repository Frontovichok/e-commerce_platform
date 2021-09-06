import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GlobalContent from "../../GlobalContent/GlobalContent";
import CallMeFixedBlock from "../../Common/CallMeFixedBlock/CallMeFixedBlock";
import Products from "./Products/Products";
import styles from "./ProductsPage.module.css";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import ProductsNavBar from "../../ProductsNavBar/ProductsNavBar";
import productsCategories from "../../../data/productsCategories.json";

function ProductsPage({ setBreadcrumbData }) {
  const location = useLocation();
  let [category, setCategory] = useState({ title: "", link: "" });
  let [subCategory, setSubCategory] = useState({});
  let [subCategories, setSubCategories] = useState([]);
  let currentCategory = location.pathname.split("/")[2];
  let currentSubCategory = location.pathname.split("/")[3];
  // let curentCategoryData = productsCategories.filter(
  //   (categ) => categ.link === `/${category.link}`
  // )[0];
  useEffect(() => {
    fetch(`http://localhost:3000/categoriesData/${currentCategory}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        setCategory({ title: data.title, link: data.link });
        setSubCategories(data.subMenu);

        data.subMenu.map((subCategory) => {
          if (subCategory.link.split("/")[2] === currentSubCategory) {
            setSubCategory(subCategory);
            // console.log("hi ", breadcrumbData);
            setBreadcrumbData([
              { link: "/", text: "Главная" },
              { text: "/" },
              { link: data.link, text: data.title },
              { text: "/" },
              { text: subCategory.title },
            ]);
          }
        });
        console.log("hhhhhhhhhhh ", subCategory);
      });
  }, [location]);
  console.log(currentCategory);
  console.log(currentSubCategory);
  return (
    <>
      {/* <GlobalContent> */}
      {/* <div className={styles.container}> */}
      {/* <Breadcrumb
            path={[
              { link: "/", text: "Главная" },
              { text: "/" },
              { link: category.link, text: category.title },
              { text: "/" },
              { text: subCategory.title },
            ]}
          /> */}
      {/* <div className={styles.content}> */}
      {/* <ProductsNavBar products={subCategories} /> */}
      <div className={styles.productsContainer}>
        <Products pageData={subCategory} />
        {/* <div className={styles.contactWithMe}>
                <ContactWithMe />
              </div> */}
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* // </GlobalContent> */}
      {/* // <CallMeFixedBlock /> */}
    </>
  );
}

export default ProductsPage;

// function getPageData(pagePath) {
// let pageData = { title: "Hi", products: [...products] };

// return pageData;
// }
