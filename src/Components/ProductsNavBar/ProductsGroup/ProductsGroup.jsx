import { NavLink } from "react-router-dom";
import styles from "./ProductsGroup.module.css";

function ProductsGroup(props) {
  let productsGroup = props.productsGroup;
  return (
    <>
      <p className={styles.navbarGroupItem}>{productsGroup.name}</p>
      <div className={styles.navbarItemsGroup}>
        {productsGroup.products.map((product, i) => (
          <NavLink key={i} to={product.link} className={styles.item}>
            {product.name}
            <sup className={styles.productsCount}>4</sup>
          </NavLink>
        ))}
      </div>
    </>
  );
}
export default ProductsGroup;
