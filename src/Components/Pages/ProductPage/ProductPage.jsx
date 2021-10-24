import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import GlobalContent from "../../GlobalContent/GlobalContent";
import ImageGallery from "react-image-gallery";
import styles from "./ProductPage.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import CarouselProductImages from "./CarouselProductImages/CarouselProductImages";
import { getAllProducts } from "../../../Redux/actions/productsActions";
import { Loader } from "semantic-ui-react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const isMobile = window.innerWidth <= 1500;

function getProductData(
  products,
  categoryArg,
  article,
  categoriesInState,
  isAllCategoriesLoaded
) {
  let productData = {};
  let breadcrumbData = [];
  let categories = [];

  if (!categoryArg && isAllCategoriesLoaded) {
    Object.keys(categoriesInState).map((key) => {
      categories.push(key);
    });
  } else if (products[categoryArg]) {
    categories.push(categoryArg);
  }
  categories.map((category) => {
    for (let i = 0; i < products[category].subMenu.length; i++) {
      let subCat = products[category].subMenu[i];
      if (subCat.subMenu) {
        for (let j = 0; j < subCat.subMenu.length; j++) {
          let subSubCat = subCat.subMenu[j];
          console.log("subSubCat:", subSubCat);
          for (let k = 0; k < subSubCat.productsData.length; k++) {
            let product = subSubCat.productsData[k];
            if (product.article === article) {
              breadcrumbData = [
                { link: "/", text: "Главная" },
                { text: "/" },
                {
                  link: "/catalog" + products[category].link,
                  text: products[category].title,
                },
                { text: "/" },
                { link: `/catalog${subCat.link}`, text: subCat.title },
                { text: "/" },
                { link: `/catalog${subSubCat.link}`, text: subSubCat.title },
              ];
              productData = { ...product };
              return [productData, breadcrumbData];
            }
          }
        }
      } else {
        for (let k = 0; k < subCat.productsData.length; k++) {
          let product = subCat.productsData[k];
          if (product.article === article) {
            breadcrumbData = [
              { link: "/", text: "Главная" },
              { text: "/" },
              {
                link: "/catalog" + products[category].link,
                text: products[category].title,
              },
              { text: "/" },
              { link: `/catalog${subCat.link}`, text: subCat.title },
            ];
            productData = { ...product };
            return [productData, breadcrumbData];
          }
        }
      }
    }
  });

  return [productData, breadcrumbData];
}

function ProductPage({
  products,
  categoriesInState,
  isAllCategoriesLoaded,
  getAllProducts,
}) {
  let query = useQuery();
  let category = query.get("category");
  let { article } = useParams();
  let breadcrumbData = [];
  let productData = {};

  useEffect(() => {
    if (
      (!category && !isAllCategoriesLoaded) ||
      (category && categoriesInState[category] === undefined)
    ) {
      getAllProducts(products, isAllCategoriesLoaded);
    }
  }, []);

  if (category || isAllCategoriesLoaded) {
    [productData, breadcrumbData] = getProductData(
      products,
      category,
      article,
      categoriesInState,
      isAllCategoriesLoaded
    );
    if (breadcrumbData.length > 0) {
      productData.images = [];
      JSON.parse(productData.linksToImages).map((image) => {
        productData.images.push({ original: image, thumbnail: image });
      });
    }
  }

  if (!isAllCategoriesLoaded) {
    console.log("!isAllCategoriesLoaded: ");
  }
  return (
    <>
      <GlobalContent>
        <div className={styles.container}>
          <Breadcrumb path={breadcrumbData} />
          {category || isAllCategoriesLoaded ? (
            <>
              {productData.name ? (
                <>
                  {/* <div className={styles.tags}>
                <div className={styles.tag}>Скидка</div>
                <div className={styles.tag}>Новая модель</div>
              </div> */}
                  <div className={styles.head}>
                    <div className={styles.name}>
                      <p>{productData.name}</p>
                    </div>
                    <div className={styles.articleContainer}>
                      <p>Артикул:</p>
                      <p className={styles.article}>{productData.article}</p>
                    </div>
                  </div>

                  <div className={styles.productBlock}>
                    <div className={styles.images}>
                      {isMobile ? (
                        <CarouselProductImages images={productData.images} />
                      ) : (
                        <ImageGallery
                          items={productData.images}
                          autoPlay={false}
                          lazyLoad={true}
                          showPlayButton={false}
                          thumbnailPosition="bottom"
                          showFullscreenButton={false}
                        />
                      )}
                    </div>
                    <div className={styles.info}>
                      <div className={styles.priceBlock}>
                        <div className={styles.priceContainer}>
                          {/* <p className={styles.price}>{productData.price}</p> */}
                          {productData.oldPrice !== 0 && (
                            <p className={styles.oldPrice}>
                              {productData.oldPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                              {productData.priceCurrency}
                            </p>
                          )}
                          <p className={styles.price}>
                            {productData.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                            {productData.price === "Товар под заказ"
                              ? ""
                              : productData.priceCurrency.replaceAll(" ", "")}
                          </p>
                          {/* {product.newPrice ? (
                        <div className={styles.priceSale}>
                          <p className={styles.newPrice}>
                            {product.newPrice} ₽/м²
                          </p>
                          <p className={styles.oldPrice}>
                            {product.price} ₽/м²
                          </p>
                        </div>
                      ) : (
                        <>
                          <p className={styles.price}>{product.price}</p>
                          <p className={styles.priceUnit}>₽/м²</p>
                        </>
                      )} */}
                        </div>
                        <button className={styles.clarifуPriceButton}>
                          Уточнить актуальную цену
                        </button>
                      </div>
                      <div className={styles.description}>
                        <h3 className={styles.propertiesTitle}>Описание</h3>
                        <p>{productData.description}</p>
                      </div>
                      <div className={styles.properties}>
                        <h3 className={styles.propertiesTitle}>
                          Характеристики
                        </h3>
                        {JSON.parse(productData.attributes).map(
                          (property, i) => (
                            <div key={i} className={styles.propery}>
                              <div className={styles.propertyName}>
                                {property.key}
                              </div>
                              <div className={styles.propertyValue}>
                                {property.value}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>Not found</div>
              )}
            </>
          ) : (
            <Loader active inline />
          )}
        </div>
      </GlobalContent>
    </>
  );
}
const mapStateToProps = (state) => ({
  products: state.products.products,
  categoriesInState: state.products.categories,
  isAllCategoriesLoaded: state.products.isAllCategoriesLoaded,
});
export default connect(mapStateToProps, { getAllProducts })(ProductPage);
