import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Products from "./Products/Products";
import productsAPI from "../../../api/api";
import styles from "./ProductsPage.module.css";
import { connect } from "react-redux";
import { getProducts } from "../../../Redux/actions/productsActions";

function ProductsPage(props) {
  // const pathName = useLocation().pathname;
  // let [subCategory, setSubCategory] = useState({});
  // let [subSubCategory, setSubSubCategory] = useState({});
  // let { categoryName, subCategoryName, subSubCategoryName } = useParams();
  // let products = props.products[`/${categoryName}`];

  // fetch(`http://localhost:3000/categoriesData/${categoryName}.json`)
  //   .then((response) => response.json())
  //   .then((data) => {
  // console.log("products: ", products);

  // });
  // const products22 = await productsAPI.getProducts(`${categoryName}.json`);
  // console.log("products22: ", products22);

  return (
    <>
      <div className={styles.productsContainer}>
        <Products pageData={props.productsData} />
      </div>
    </>
  );
}

// export default ProductsPage;

function ProductsPageContainer(props) {
  const setBreadcrumbData = props.setBreadcrumbData;
  const pathName = useLocation().pathname;
  let [subCategory, setSubCategory] = useState({});
  let [subSubCategory, setSubSubCategory] = useState({});
  let { categoryName, subCategoryName, subSubCategoryName } = useParams();
  let products = props.products[`/${categoryName}`];
  useEffect(async () => {
    if (
      props.products[`/${categoryName}`] === undefined &&
      props.productsIsLoading === false
    ) {
      props.getProducts(`${categoryName}.json`);
    }
    if (
      props.productsIsLoading === false &&
      props.products[`/${categoryName}`]
    ) {
      products.subMenu.map((subCategoryItem) => {
        if (subCategoryItem.link.split("/")[2] === subCategoryName) {
          setSubCategory(subCategoryItem);
          setBreadcrumbData([
            { link: "/", text: "Главная" },
            { text: "/" },
            { link: `/catalog${products.link}`, text: products.title },
            { text: "/" },
            { text: subCategoryItem.title },
          ]);
          if (subSubCategoryName) {
            subCategoryItem.subMenu.map((ssCategory) => {
              if (ssCategory.link.split("/")[3] === subSubCategoryName) {
                setSubSubCategory(ssCategory);
                setBreadcrumbData([
                  { link: "/", text: "Главная" },
                  { text: "/" },
                  { link: `/catalog${products.link}`, text: products.title },
                  { text: "/" },
                  {
                    text: subCategoryItem.title,
                    link: `/catalog${subCategoryItem.link}`,
                  },
                  { text: "/" },
                  { text: ssCategory.title },
                ]);
              }
            });
          } else {
            setSubSubCategory({});
          }
        }
      });
    }
  }, [pathName, props.productsIsLoading, subCategory, subCategoryName]);

  if (props.productsIsLoading === false && props.products[`/${categoryName}`]) {
    return (
      <ProductsPage
        {...props}
        productsData={
          Object.keys(subSubCategory).length > 0 ? subSubCategory : subCategory
        }
      />
    );
  } else {
    return <div>Hi</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  productsIsLoading: state.products.isLoading,
});
export default connect(mapStateToProps, { getProducts })(ProductsPageContainer);
