import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import TopBar from "../../TopBar/TopBar";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />
      <div className={styles.notFoundContainer}>
        <h1 className={styles.errorCode}>404</h1>
        <h3 className={styles.title}>Страница не найдена</h3>
        <NavLink to="/" className={styles.link}>
          Перейти на главную страницу
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
