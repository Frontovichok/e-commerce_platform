import Products from "../../Common/Products/Products";
import styles from "./ProductsPage.module.css";

function ProductsPage(props) {
  return (
    <>
      <div className={styles.productsContainer}>
        <Products
          pageData={props.productsData}
          categories={props.categories}
          query={props.query}
          isLoading={props.productsIsLoading}
        />
      </div>
    </>
  );
}

export default ProductsPage;
