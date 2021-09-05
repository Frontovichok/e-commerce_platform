import styles from "./ProductCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { NavLink } from "react-router-dom";

function ProductCard(product) {
  // let product = JSON.parse(product2);
  // console.log(JSON.parse(product));
  return (
    <div className={styles.card}>
      {/* <img src={JSON.parse(product.linksToImages)[0]} alt="Product" /> */}
      <LazyLoadImage
        alt="product"
        effect="opacity"
        src={JSON.parse(product.linksToImages)[0]} // use normal <img> attributes as props
        className={styles.productImage}
      />
      {/* {product.tags.length !== 0 && (
        <div className={styles.tagsContainer}>
          {product.tags.map((tag, i) => (
            <label className={styles.tag} key={i}>
              {tag}
            </label>
          ))}
        </div>
      )} */}
      <div className={styles.content}>
        <p className={styles.title}>{product.name}</p>
        {/* <div className={styles.priceContainer}>
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
        </div> */}
        <div className={styles.priceContainer}>
          <>
            <p className={styles.price}>{product.price}</p>
            {/* <p className={styles.priceUnit}>₽/м²</p> */}
          </>
        </div>
      </div>
      <NavLink to={`/product/${product.article}`} className={styles.button}>
        Подробнее
      </NavLink>
    </div>
  );
}

export default ProductCard;
