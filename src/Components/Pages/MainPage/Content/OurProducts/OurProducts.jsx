import ProductCard from "./ProductCard/ProductCard";
import styles from "./OurProducts.module.css";
import { useState } from "react";
import productsMainPage from "../../../../../productsMainPage.json";

function OurProducts() {
  let [showedProducts, setShowedProducts] = useState(4);
  let showedProductsList = [...productsMainPage.products].slice(
    0,
    showedProducts
  );
  return (
    <section className="sectionMainPage">
      <h2 className={"sectionTitle"}>
        {["Каталог товаров"].map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </h2>
      <div className={styles.productList}>
        {showedProductsList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {showedProducts < 8 && (
        <div className={styles.showMoreContainer}>
          <button
            className={styles.showMoreBtn}
            onClick={() => setShowedProducts(showedProducts + 4)}
          >
            Показать еще
          </button>
        </div>
      )}
    </section>
  );
}

export default OurProducts;
