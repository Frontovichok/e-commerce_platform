import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      {/* <img src={product.img} alt="Product" /> */}
      <LazyLoadImage
        alt="Product"
        effect="opacity"
        src={JSON.parse(product.linksToImages)[0]}
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
        <p className={styles.title}>{product.name}</p>
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
              {/* <p className={styles.priceUnit}>₽/м²</p> */}
            </>
          )}
        </div>
      </div>
      <NavLink to={`/product/${product.article}`} className={styles.button}>
        Подробнее
      </NavLink>
    </div>
  );
}

export default ProductCard;

// {
//   "id": 10,
//   "title": "Металлочерепица 0.4 мм 2250х1180 мм красный RAL 3005",
//   "img": "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/15569304.jpg",
//   "artNumber": "Арт. 12345",
//   "price": 100,
//   "tags": ["Лучшая цена"]
// }
