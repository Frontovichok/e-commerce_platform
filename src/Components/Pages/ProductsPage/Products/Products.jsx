import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import PaginationControl from "../../../Common/Pagination/PaginationControl";
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

function Products({ pageData }) {
  let [activePage, setActivePage] = useState(1);
  let productsArr = [];
  let loadingState = false;
  if (pageData.productsData) {
    productsArr.push(...pageData.productsData);
    loadingState = true;
  } else if (pageData.subMenu) {
    pageData.subMenu.map((subMenu) => {
      productsArr.push(...subMenu.productsData);
    });
    loadingState = true;
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
      {productsArr && loadingState ? (
        <>
          <div className={styles.productsContainer}>
            {slicedProducts[activePage - 1].map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
          <PaginationControl
            size="large"
            page={activePage}
            count={countPages}
            handleChange={setActivePage}
          />
        </>
      ) : (
        <Loader active inline />
      )}
    </section>
  );
}

export default Products;
