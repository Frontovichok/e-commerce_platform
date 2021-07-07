import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function ProductCard(product) {
  return (
    <div className={styles.card}>
      {/* <img src={product.img} alt="Product" /> */}
      <LazyLoadImage
        alt="Product"
        effect="opacity"
        src={product.img}
        className={styles.cardImage}
      />
      {product.tags.length !== 0 && (
        <div className={styles.tagsContainer}>
          {product.tags.map((tag, i) => (
            <label className={styles.tag} key={i}>
              {tag}
            </label>
          ))}
        </div>
      )}
      <div className={styles.content}>
        <p className={styles.title}>{product.title}</p>
        <div className={styles.priceContainer}>
          {product.newPrice ? (
            <div className={styles.priceSale}>
              <p className={styles.oldPrice}>{product.price}</p>
              <p className={styles.newPrice}>{product.newPrice}</p>
              <p className={styles.priceUnit}>₽/м²</p>
            </div>
          ) : (
            <>
              <p className={styles.price}>{product.price}</p>
              <p className={styles.priceUnit}>₽/м²</p>
            </>
          )}
        </div>
      </div>
      <NavLink to={`/product/${product.id}`} className={styles.button}>
        Подробнее
      </NavLink>
    </div>
  );
}

export default ProductCard;
