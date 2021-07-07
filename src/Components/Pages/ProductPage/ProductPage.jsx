import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import TopBar from "../../TopBar/TopBar";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const location = useLocation();
  let currentPagePath = location.pathname.split("/")[2];
  return (
    <>
      <TopBar />
      <Header />
      <div className={styles.breadcrumbContainer}>
        <div className="breadcrumb">
          <NavLink to="/">Главная</NavLink>
          <p>&nbsp; / &nbsp;</p>
        </div>
      </div>
      <div>{currentPagePath}</div>
      <Footer />
    </>
  );
}
