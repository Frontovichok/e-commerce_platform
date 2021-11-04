import Highlighter from "react-highlight-words";
import styles from "./ProductCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export default function ProductCard({ product, categories, searchQuery = "" }) {
  let categoryQuery = categories
    ? categories.categoryName
      ? "?category=" + categories.categoryName
      : ""
    : "";

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
        {/* <p className={styles.title}>{product.name}</p> */}
        <NavLink
          to={`/product/${product.article}${categoryQuery}`}
          className={styles.nameLink}
        >
          <Highlighter
            className={styles.title}
            highlightClassName="highlited-text"
            searchWords={[searchQuery]}
            autoEscape={true}
            textToHighlight={product.name}
          />
        </NavLink>

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
            {product.oldPrice !== 0 && (
              <p className={styles.oldPrice}>
                {product.oldPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                {product.priceCurrency}
              </p>
            )}
            <p className={styles.price}>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              {product.price === "Товар под заказ"
                ? ""
                : product.priceCurrency.replaceAll(" ", "")}
            </p>
            {/* <p className={styles.priceUnit}>₽/м²</p> */}
          </>
        </div>
        <div className={styles.availableAndArticleContainer}>
          <div className={styles.availableContainer}>
            {product.available ? (
              <p className={styles.available}>
                <Icon name="check" size="small" />В наличии
              </p>
            ) : (
              <p className={styles.notAvailable}>
                <span className={styles.notAvailableIcon}>?</span> Уточняйте у
                менеджера
              </p>
            )}
          </div>
          <div>
            <p className={styles.article}>Артикул: {product.article}</p>
          </div>
        </div>
      </div>
      {/* <NavLink
        to={`/product/${product.article}${categoryQuery}`}
        className={styles.button}
      >
        Подробнее
      </NavLink> */}
    </div>
  );
}
