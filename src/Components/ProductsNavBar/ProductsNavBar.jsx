import { NavLink } from "react-router-dom";
import styles from "./ProductsNavBar.module.css";

function ProductsGroup(props) {
  let productsGroup = props.productsGroup;
  return (
    <>
      <p className={styles.navbarGroupItem}>{productsGroup.name}</p>
      <div className={styles.navbarItemsGroup}>
        {productsGroup.products.map((product, i) => (
          <NavLink key={i} to={product.link} className={styles.item}>
            {product.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}

function ProductsNavBar(props) {
  let products = props.products;
  return (
    <div className={styles.container}>
      <ul className={styles.navbarItems}>
        {products.map((product, i) =>
          product.products ? (
            <ProductsGroup key={i} productsGroup={product} />
          ) : (
            <NavLink key={i} to={product.link} className={styles.item}>
              {product.name}
            </NavLink>
          )
        )}
      </ul>
    </div>
  );
}
export default ProductsNavBar;
