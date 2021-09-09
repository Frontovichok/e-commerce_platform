import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import ModalNavbar from "./ModalNavbar/ModalNavbar";
import ProductsGroup from "./ProductsGroup/ProductsGroup";
import productsCategories from "../../data/productsCategories.json";
import styles from "./ProductsNavBar.module.css";

const isMobile = window.innerWidth <= 900;

function ProductsNavBar(props) {
  // let products = props.products;
  let products2 = productsCategories[0].subMenu;
  let [showedCategory, setShowedCategory] = useState(NaN);
  let [showedSubCategory, setShowedSubCategory] = useState(NaN);
  return (
    <div>
      {isMobile ? (
        <ModalNavbar products={products2} />
      ) : (
        <div className={styles.container}>
          {productsCategories.map((products, i) => (
            <div className={styles.navbar}>
              <div
                className={styles.categoryLinkContainer}
                onClick={() => {
                  let setShowedCategoryValue = i == showedCategory ? NaN : i;
                  setShowedCategory(setShowedCategoryValue);
                  setShowedSubCategory(NaN);
                }}
              >
                <div className={styles.expandLinks}>
                  <Icon
                    className={styles.categoryIcon}
                    name={i == showedCategory ? "angle up" : "angle down"}
                  />
                </div>
                <NavLink
                  key={i}
                  to={products.link}
                  className={styles.categoryLink}
                  activeClassName={styles.active}
                >
                  {products.title}
                </NavLink>
              </div>
              {i === showedCategory && (
                <ul className={styles.navbarItems}>
                  {products.subMenu.map((product, j) => (
                    <div className={styles.item} key={j}>
                      <div
                        className={styles.subCategoryLinkContainer}
                        onClick={() => {
                          let setShowedSubCategoryValue =
                            j == showedSubCategory ? NaN : j;
                          setShowedSubCategory(setShowedSubCategoryValue);
                        }}
                      >
                        <div
                          className={
                            styles.expandLinks +
                            " " +
                            (product.subMenu ? styles.show : styles.hidden)
                          }
                        >
                          <Icon
                            name={j == showedSubCategory ? "minus" : "plus"}
                          />
                        </div>
                        <NavLink
                          key={j}
                          to={product.link}
                          className={styles.link}
                          activeClassName={styles.active}
                        >
                          {product.title}
                        </NavLink>
                      </div>
                      {product.subMenu && j == showedSubCategory && (
                        <ProductsGroup key={j} productsGroup={product} />
                      )}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductsNavBar;
