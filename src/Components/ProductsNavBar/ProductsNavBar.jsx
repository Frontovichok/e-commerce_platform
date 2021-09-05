import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import ModalNavbar from "./ModalNavbar/ModalNavbar";
import ProductsGroup from "./ProductsGroup/ProductsGroup";
import styles from "./ProductsNavBar.module.css";

const isMobile = window.innerWidth <= 900;

function ProductsNavBar(props) {
  let products = props.products;
  let [showedCategory, setShowedCategory] = useState(NaN);
  return (
    <div>
      {isMobile ? (
        <ModalNavbar products={products} />
      ) : (
        <div className={styles.container}>
          <ul className={styles.navbarItems}>
            {products.map((product, i) => (
              <div className={styles.item} key={i}>
                <div className={styles.categoryLinContainer}>
                  <div
                    className={
                      styles.expandLinks +
                      " " +
                      (product.subMenu ? styles.show : styles.hidden)
                    }
                    onClick={() => {
                      let setShowedCategoryValue =
                        i == showedCategory ? NaN : i;
                      setShowedCategory(setShowedCategoryValue);
                    }}
                  >
                    <Icon name={i == showedCategory ? "minus" : "plus"} />
                  </div>
                  <NavLink key={i} to={product.link} className={styles.link}>
                    {product.title}
                  </NavLink>
                </div>
                {product.subMenu && i == showedCategory && (
                  <ProductsGroup key={i} productsGroup={product} />
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default ProductsNavBar;
