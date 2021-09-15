import ProductCard from "./ProductCard/ProductCard";
// import ProductCard from "../../../../Common/ProductCard/ProductCard";
import styles from "./OurProducts.module.css";
import { useState } from "react";
import productsMainPage from "../../../../../data/productsMainPage.json";

function OurProducts() {
  let [showedProducts, setShowedProducts] = useState(5);
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
        {showedProductsList.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {showedProducts < 10 && (
        <div className={styles.showMoreContainer}>
          <button
            className={styles.showMoreBtn}
            onClick={() => setShowedProducts(showedProducts + 5)}
          >
            Показать еще
          </button>
        </div>
      )}
    </section>
  );
}

export default OurProducts;
