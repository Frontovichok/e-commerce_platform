import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
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
      <div className={styles.breadcrumbContainer}>
        <Breadcrumb path={[{ link: "/", text: "Главная" }, { text: "/" }]} />
      </div>
      <div className={styles.notFoundContainer}>
        <h1 className={styles.errorCode}>404</h1>
        <h3 className={styles.title}>Страница не найдена</h3>
        <div>{state}</div>
        <NavLink to="/" className={styles.link}>
          Перейти на главную страницу
        </NavLink>
      </div>
    </>
  );
}
