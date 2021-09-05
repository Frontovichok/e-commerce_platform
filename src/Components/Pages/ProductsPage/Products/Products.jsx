import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

function Products({ pageData }) {
  console.log("pageData: ", pageData);
  return (
    <section className={styles.products}>
      {/* <h2 className="sectionTitle">{pageData.title}</h2> */}
      <div className={styles.productsContainer}>
        {pageData.productsData &&
          pageData.productsData.map((product) => (
            <ProductCard key={product.article} {...product} />
          ))}
      </div>
    </section>
  );
}

export default Products;
