import React from "react";
import { useLocation } from "react-router";
import { Loader } from "semantic-ui-react";
import PaginationControl from "../Pagination/PaginationControl";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

function sliceProductsByPage(products, productsPerPage, countPages) {
  let slicedProducts = [];

  for (let i = 0; i <= countPages; i++) {
    let leftEnd = i * productsPerPage;
    let rightEnd = (i + 1) * productsPerPage;
    slicedProducts.push(products.slice(leftEnd, rightEnd));
  }
  return slicedProducts;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Products({ pageData, categories, searchQuery }) {
  console.log("in products component");
  let query = useQuery();
  let pageNow = +query.get("page") || 1;
  let productsArr = [];
  let isLoaded = false;
  if (pageData.productsData) {
    productsArr.push(...pageData.productsData);
    isLoaded = true;
  } else if (pageData.subMenu) {
    pageData.subMenu.map((subMenu) => {
      productsArr.push(...subMenu.productsData);
    });
    isLoaded = true;
  } else if (Array.isArray(pageData)) {
    console.log("hi");
    isLoaded = true;
    productsArr = [...pageData];
  }

  let productsPerPage = 15;
  let countPages = Math.ceil(productsArr.length / productsPerPage);
  let slicedProducts = sliceProductsByPage(
    productsArr,
    productsPerPage,
    countPages
  );

  return (
    <section className={styles.products}>
      {productsArr && isLoaded ? (
        <>
          <div className={styles.productsContainer}>
            {slicedProducts[pageNow - 1].map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                categories={categories}
                searchQuery={searchQuery}
              />
            ))}
          </div>
          <PaginationControl size="large" page={pageNow} count={countPages} />
        </>
      ) : (
        <Loader active inline />
      )}
    </section>
  );
}

export default Products;
