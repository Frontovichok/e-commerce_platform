import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Loader } from "semantic-ui-react";
import PaginationControl from "../Pagination/PaginationControl";
import SortDropdown from "../SortDropdown/SortDropdown";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
import ShowedProductsInPageDropdown from "../ShowedProductsInPageDropdown/ShowedProductsInPageDropdown";

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

function sortByName(products, direction) {
  let [returnValue1, returnValue2] = direction === "up" ? [-1, 1] : [1, -1];
  let sortedProducts = [...products].sort((a, b) => {
    if (a.name < b.name) {
      return returnValue1;
    }
    if (a.name > b.name) {
      return returnValue2;
    }
    return 0;
  });
  return sortedProducts;
}

function sortByPrice(products, direction) {
  let [returnValue1, returnValue2] = direction === "up" ? [-1, 1] : [1, -1];
  let sortedProducts = products
    .map((product) =>
      product.price === "Товар под заказ"
        ? { ...product, price: 9999999999 }
        : product
    )
    .sort((a, b) => {
      if (a.price < b.price) {
        return returnValue1;
      }
      if (a.price > b.price) {
        return returnValue2;
      }
      return 0;
    });
  return sortedProducts.map((product) =>
    product.price === 9999999999
      ? { ...product, price: "Товар под заказ" }
      : product
  );
}

function Products({ pageData, categories, searchQuery, isLoading }) {
  let query = useQuery();
  let location = useLocation();
  let pageNow = +query.get("page") || 1;
  let sortBy = query.get("sort") || "default";
  let productsArr = [];
  let isLoaded = false;
  let [show, setShow] = useState(false);
  if (pageData.productsData) {
    productsArr.push(...pageData.productsData);
    isLoaded = true;
  } else if (pageData.subMenu) {
    pageData.subMenu.map((subMenu) => {
      productsArr.push(...subMenu.productsData);
    });
    isLoaded = true;
  } else if (Array.isArray(pageData)) {
    productsArr = [...pageData];
    isLoaded = true;
  }

  sortBy = query.get("sort") || "default";

  switch (sortBy) {
    case "price_up":
      productsArr = sortByPrice(productsArr, "up");
      break;
    case "price_down":
      productsArr = sortByPrice(productsArr, "down");
      break;
    case "name_up":
      productsArr = sortByName(productsArr, "up");
      break;
    case "name_down":
      productsArr = sortByName(productsArr, "down");
      break;
    default:
      productsArr = productsArr;
  }

  let productsPerPage = +query.get("productsPerPage") || 15;
  let countPages = Math.ceil(productsArr.length / productsPerPage);
  let slicedProducts = sliceProductsByPage(
    productsArr,
    productsPerPage,
    countPages
  );
  if (pageNow > countPages) {
    pageNow = countPages;
  }

  useEffect(async () => {
    setShow(false);
    const sleep = (milliseconds = 500) =>
      new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    await sleep(200);
    setShow(true);
  }, [location]);

  return (
    <section className={styles.products}>
      {productsArr && !isLoading && isLoaded ? (
        <>
          <div className={styles.dropdowns}>
            <SortDropdown />
            <ShowedProductsInPageDropdown />
          </div>
          {show ? (
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
              <PaginationControl
                size="large"
                page={pageNow}
                count={countPages}
              />
            </>
          ) : (
            <Loader className={styles.loader} active inline size="big" />
          )}
        </>
      ) : (
        <Loader className={styles.loader} active inline size="large" />
      )}
    </section>
  );
}

export default Products;
