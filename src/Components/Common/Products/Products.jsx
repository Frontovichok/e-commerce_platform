import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Loader } from "semantic-ui-react";
import RecentlyViewedProducts from "../RecentlyViewedProducts/RecentlyViewedProducts";
import PaginationControl from "../Pagination/PaginationControl";
import ProductCard from "../ProductCard/ProductCard";
import SortDropdown from "../Dropdowns/SortDropdown/SortDropdown";
import ShowedProductsInPageDropdown from "../Dropdowns/ShowedProductsInPageDropdown/ShowedProductsInPageDropdown";
import PriceFilter from "../Dropdowns/PriceFilter/PriceFilter";
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

function filterByPrice(
  products,
  priceFrom,
  priceTo,
  isShowProductsOnlyWithPrice
) {
  let filteredProducts = products.filter((product) => {
    if (!isShowProductsOnlyWithPrice && product.price === "Товар под заказ") {
      return true;
    }
    return +product.price >= +priceFrom && +product.price <= +priceTo;
  });
  return filteredProducts;
}

function Products({ pageData, categories, searchQuery, isLoading }) {
  let query = useQuery();
  let location = useLocation();
  let pageNow = +query.get("page") || 1;
  let sortBy = query.get("sort") || "default";
  let priceFrom = query.get("pricefrom") || "default";
  let priceTo = query.get("priceto") || "default";
  let isShowProductsOnlyWithPrice =
    query.get("showProductsOnlyWithPrice") || true;
  if (typeof isShowProductsOnlyWithPrice === "string") {
    isShowProductsOnlyWithPrice =
      isShowProductsOnlyWithPrice === "true" ? true : false;
  }
  let productsArr = [];
  let isLoaded = false;
  let isMobile = window.innerWidth < 500;
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

  if (
    +priceFrom === parseInt(priceFrom, 10) &&
    +priceTo === parseInt(priceTo, 10)
  ) {
    productsArr = filterByPrice(
      productsArr,
      priceFrom,
      priceTo,
      isShowProductsOnlyWithPrice
    );
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

  let productsPerPage = (isMobile && 16) || +query.get("productsPerPage") || 15;
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
    console.log("useEffect in Products component");
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
            <div className={styles.topDropdowns}>
              <SortDropdown />
              {!isMobile && <ShowedProductsInPageDropdown />}
            </div>
            <div className={styles.bottomDropdowns}>
              <PriceFilter />
            </div>
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
          <RecentlyViewedProducts />
        </>
      ) : (
        <Loader className={styles.loader} active inline size="large" />
      )}
    </section>
  );
}

export default Products;
