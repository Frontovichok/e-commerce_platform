import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../../Redux/actions/productsActions";
import ProductsPage from "./ProductsPage";

function ProductsPageContainer(props) {
  const setBreadcrumbData = props.setBreadcrumbData;
  const pathName = useLocation().pathname;
  let [subCategory, setSubCategory] = useState({});
  let [subSubCategory, setSubSubCategory] = useState({});
  let { categoryName, subCategoryName, subSubCategoryName } = useParams();

  let products = props.products[categoryName];
  useEffect(async () => {
    if (
      props.products[categoryName] === undefined &&
      props.productsIsLoading === false
    ) {
      props.getProducts(`${categoryName}.json`);
    }
    if (props.productsIsLoading === false && props.products[categoryName]) {
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

  if (props.productsIsLoading === false && props.products[categoryName]) {
    return (
      <ProductsPage
        {...props}
        productsData={
          Object.keys(subSubCategory).length > 0 ? subSubCategory : subCategory
        }
        categories={{ categoryName, subCategoryName, subSubCategoryName }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  productsIsLoading: state.products.isLoading,
});
export default connect(mapStateToProps, { getProducts })(ProductsPageContainer);
