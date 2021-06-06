import { NavLink } from "react-router-dom";
import ModalNavbar from "./ModalNavbar/ModalNavbar";
import ProductsGroup from "./ProductsGroup/ProductsGroup";
import styles from "./ProductsNavBar.module.css";

const isMobile = window.innerWidth <= 500;

function ProductsNavBar(props) {
  let products = props.products;
  return (
    <div>
      {isMobile ? (
        <ModalNavbar products={products} />
      ) : (
        <div className={styles.container}>
          <ul className={styles.navbarItems}>
            {products.map((product, i) =>
              product.products ? (
                <ProductsGroup key={i} productsGroup={product} />
              ) : (
                <NavLink key={i} to={product.link} className={styles.item}>
                  {product.name}
                  <sup className={styles.productsCount}>4</sup>
                </NavLink>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
export default ProductsNavBar;
