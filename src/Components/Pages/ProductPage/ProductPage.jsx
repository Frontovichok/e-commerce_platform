import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import TopBar from "../../TopBar/TopBar";
import GlobalContent from "../../GlobalContent/GlobalContent";
import ImageGallery from "react-image-gallery";
import styles from "./ProductPage.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { property } from "lodash";

const images = [
  {
    original:
      "https://www.grandline.ru/image/cache/data/shop1c/13/54113-500x335.jpg",
    thumbnail:
      "https://www.grandline.ru/image/cache/data/shop1c/13/54113-500x335.jpg",
  },
  {
    original:
      "https://www.grandline.ru/image/cache/data/photo/krovlya/metallocherepica/classic/3005/gl/atlas-ral-3005-2-500x335.jpg",
    thumbnail:
      "https://www.grandline.ru/image/cache/data/photo/krovlya/metallocherepica/classic/3005/gl/atlas-ral-3005-2-500x335.jpg",
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
// function Property(property) {
//   return <div>{property.color}</div>;
// }

export default function ProductPage() {
  const location = useLocation();
  let currentPagePath = location.pathname.split("/")[2];
  return (
    <>
      <TopBar />
      <Header />
      <GlobalContent>
        <div className={styles.container}>
          <div className="breadcrumb">
            <NavLink to="/">Главная</NavLink>
            <p>&nbsp; / &nbsp;</p>
            <NavLink to="/krovelnye-materialy">Кровельные материалы</NavLink>
            <p>&nbsp; / &nbsp;</p>
            <NavLink to="/krovelnye-materialy/metallocherepitca">
              Металлочерепица
            </NavLink>
          </div>
          <div className={styles.tags}>
            <div className={styles.tag}>Скидка</div>
            <div className={styles.tag}>Новая модель</div>
          </div>
          <div className={styles.name}>
            {currentPagePath} Профнастил С8А Grand Line 0,5 Atlas с пленкой RAL
            8017 шоколад
          </div>
          <div className={styles.productBlock}>
            <div className={styles.images}>
              <ImageGallery
                items={images}
                autoPlay={true}
                lazyLoad={true}
                showPlayButton={false}
                autoPlay={true}
                thumbnailPosition="bottom"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.priceBlock}>
                <div className={styles.priceContainer}>
                  {product.newPrice ? (
                    <div className={styles.priceSale}>
                      <p className={styles.newPrice}>{product.newPrice} ₽/м²</p>
                      <p className={styles.oldPrice}>{product.price} ₽/м²</p>
                      {/* <p className={styles.priceUnit}>₽/м²</p> */}
                    </div>
                  ) : (
                    <>
                      <p className={styles.price}>{product.price}</p>
                      <p className={styles.priceUnit}>₽/м²</p>
                    </>
                  )}
                </div>
                <button className={styles.clarifуPriceButton}>
                  Уточнить актуальную цену
                </button>
              </div>
              <div className={styles.description}>
                <h3 className={styles.propertiesTitle}>Описание</h3>
                <p>
                  Ни одна из частей этого документа не может быть
                  воспроизведена, опубликована, сохранена в электронной базе
                  данных или передана в любой форме или любыми средствами,
                  такими как электронные, механические, записывающие или иначе,
                  для любой цели без предварительного письменного разрешения
                  Русика.
                </p>
              </div>
              <div className={styles.properties}>
                <h3 className={styles.propertiesTitle}>Характеристики</h3>
                {properties.map((property, i) => (
                  <div key={i} className={styles.propery}>
                    <div className={styles.propertyName}>{property.name}</div>
                    <div className={styles.propertyValue}>{property.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlobalContent>
      <Footer />
    </>
  );
}
