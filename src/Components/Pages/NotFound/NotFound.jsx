import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import TopBar from "../../TopBar/TopBar";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((res) => {
        setState(res.message);
        console.log("res: ", res);
      });
    setTimeout(() => console.log(state), 3000);
  });
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
      <div className={styles.notFoundContainer}>
        <h1 className={styles.errorCode}>404</h1>
        <h3 className={styles.title}>Страница не найдена</h3>
        <div>{state}</div>
        <NavLink to="/" className={styles.link}>
          Перейти на главную страницу
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
