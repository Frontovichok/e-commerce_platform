import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import GlobalContent from "../../GlobalContent/GlobalContent";
import ImageGallery from "react-image-gallery";
import styles from "./ProductPage.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import CarouselProductImages from "./CarouselProductImages/CarouselProductImages";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const images = [
  {
    original:
      "https://www.grandline.ru/image/cache/data/shop1c/13/54113-500x335.jpg",
    thumbnail:
      "https://www.grandline.ru/image/cache/data/shop1c/13/54113-500x335.jpg",
  },
  {
    original:
      "https://www.grandline.ru/image/cache/data/shop1c/13/54113-500x335.jpg",
    thumbnail:
      "https://www.grandline.ru/image/cache/data/shop1c/13/54113-500x335.jpg",
  },
  {
    original:
      "https://www.grandline.ru/image/cache/data/photo/krovlya/metallocherepica/classic/3005/gl/atlas-ral-3005-500x335.jpg",
    thumbnail:
      "https://www.grandline.ru/image/cache/data/photo/krovlya/metallocherepica/classic/3005/gl/atlas-ral-3005-500x335.jpg",
  },
];

const properties = [
  { name: "Цвет", value: "Красный" },
  { name: "Ширина", value: "10 см" },
  { name: "Высота", value: "20 см" },
  { name: "Цвет", value: "Красный" },
  { name: "Ширина", value: "10 см" },
  { name: "Высота", value: "20 см" },
  { name: "Цвет", value: "Красный" },
  { name: "Ширина", value: "10 см" },
  { name: "Высота", value: "20 см" },
];

const product = {
  id: 1,
  title: "Черепица гибкая Mida Прима красный 3 м²",
  img: "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/15569321.jpg",
  artNumber: "Арт. 12345",
  price: 1000,
  newPrice: 200,
  tags: ["Новая модель"],
};

const isMobile = window.innerWidth <= 1500;

function getProductData(products, category, article) {
  console.log(article);
  let productData = {};
  let breadcrumbData = [];
  for (let i = 0; i < products[`/${category}`].subMenu.length; i++) {
    let subCat = products[`/${category}`].subMenu[i];
    if (subCat.subMenu) {
      for (let j = 0; j < subCat.subMenu.length; j++) {
        let subSubCat = subCat.subMenu[j];
        for (let k = 0; k < subSubCat.productsData.length; k++) {
          let product = subSubCat.productsData[k];
          if (product.article === article) {
            breadcrumbData = [
              { link: "/", text: "Главная" },
              { text: "/" },
              {
                link: "/catalog" + products[`/${category}`].link,
                text: products[`/${category}`].title,
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
              link: "/catalog" + products[`/${category}`].link,
              text: products[`/${category}`].title,
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
  return [productData, breadcrumbData];
}

function ProductPage({ products, categories, isAllCategoriesLoaded }) {
  // const [breadcrumbData, setBreadcrumbData] = useState([]);
  let query = useQuery();
  let category = query.get("category");
  let subCategory = query.get("subCategory");
  let subSubCategory = query.get("subSubCategory");
  const location = useLocation();
  let currentPagePath = location.pathname.split("/")[2];
  let { article } = useParams();
  let breadcrumbData = [];

  let productData = {};

  console.log("category: ", category);
  console.log("products: ", products);
  console.log("products[category]: ", products[`/${category}`]);

  if (category && products[`/${category}`]) {
    [productData, breadcrumbData] = getProductData(products, category, article);
    console.log("6666", productData);
    // categoryLoop: for (
    //   let i = 0;
    //   i < products[`/${category}`].subMenu.length;
    //   i++
    // ) {
    //   let subCat = products[`/${category}`].subMenu[i];
    //   for (let j = 0; j < subCat.subMenu.length; j++) {
    //     let subSubCat = subCat.subMenu[j];
    //     for (let k = 0; k < subSubCat.productsData.length; k++) {
    //       let product = subSubCat.productsData[k];
    //       if (product.article === article) {
    //         console.log("------------");
    //         breadcrumbData = [
    //           { link: "/", text: "Главная" },
    //           { text: "/" },
    //           {
    //             link: "/catalog" + products[`/${category}`].link,
    //             text: products[`/${category}`].title,
    //           },
    //           { text: "/" },
    //           { link: `/catalog${subCat.link}`, text: subCat.title },
    //           { text: "/" },
    //           { link: `/catalog${subSubCat.link}`, text: subSubCat.title },
    //         ];
    //         productData = { ...product };
    //         i = products[`/${category}`].subMenu.length;
    //         j = subCat.subMenu.length;
    //         k = subSubCat.productsData.length;
    //         // break subSubCategoryLoop;
    //       }
    //       console.log("-");
    //     }
    //   }
    // }
    productData.images = [];
    JSON.parse(productData.linksToImages).map((image) => {
      console.log("image:", image);
      productData.images.push({ original: image, thumbnail: image });
    });
  }

  if (!isAllCategoriesLoaded) {
    console.log("!isAllCategoriesLoaded: ");
  }
  return (
    <>
      <GlobalContent>
        <div className={styles.container}>
          <Breadcrumb path={breadcrumbData} />
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
                    />
                  )}
                </div>
                <div className={styles.info}>
                  <div className={styles.priceBlock}>
                    <div className={styles.priceContainer}>
                      <p className={styles.price}>{productData.price}</p>
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
                    <h3 className={styles.propertiesTitle}>Характеристики</h3>
                    {properties.map((property, i) => (
                      <div key={i} className={styles.propery}>
                        <div className={styles.propertyName}>
                          {property.name}
                        </div>
                        <div className={styles.propertyValue}>
                          {property.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>Not found</div>
          )}
        </div>
      </GlobalContent>
    </>
  );
}
const mapStateToProps = (state) => ({
  products: state.products.products,
  categories: state.products.categories,
  isAllCategoriesLoaded: state.products.isAllCategoriesLoaded,
});
export default connect(mapStateToProps, {})(ProductPage);
