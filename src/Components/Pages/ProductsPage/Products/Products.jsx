import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

function Products({ pageData, loadingState }) {
  // console.log("pageData: ", pageData);
  // let [products, setProducts] = useState([]);
  // useEffect(() => {
  let productsArr = [];
  if (pageData.productsData) {
    // setProducts(...pageData.productsData);
    productsArr.push(...pageData.productsData);
  } else if (pageData.subMenu) {
    pageData.subMenu.map((subMenu) => {
      // console.log("subMenu title: ", subMenu.title);
      // console.log("subMenu.productsData: ", subMenu.productsData);
      console.log("subMenu.productsData.length: ", subMenu.productsData.length);
      productsArr.push(...subMenu.productsData);
      // console.log("productsArr: ", productsArr);
    });
  }
  // setProducts(...[productsArr]);
  // console.log("products length mf: ", products.length);
  // }, [pageData]);

  // console.log("productsArr: ", productsArr);
  // console.log("products length: ", products.length);

  return (
    <section className={styles.products}>
      {/* <h2 className="sectionTitle">{pageData.title}</h2> */}
      <div className={styles.productsContainer}>
        {productsArr && loadingState ? (
          productsArr.map((product, i) => <ProductCard key={i} {...product} />)
        ) : (
          <Loader active inline />
        )}
      </div>
    </section>
  );
}

export default Products;
