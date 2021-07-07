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

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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
            <div className={styles.tag}>Скидка 5%</div>
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
              <div className={styles.price}>Цена</div>
              <div className={styles.description}>Описание</div>
              <div className={styles.properties}>Характеристики</div>
            </div>
          </div>
        </div>
      </GlobalContent>
      <Footer />
    </>
  );
}
