import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import styles from "./FindedProducts.module.css";

export default function FindedProducts() {
  //   const [state, setState] = useState([]);
  //   useEffect(() => {
  //     fetch("/api")
  //       .then((response) => response.json())
  //       .then((res) => {
  //         setState(res.message);
  //         console.log("res: ", res);
  //       });
  //     setTimeout(() => console.log(state), 3000);
  //   });
  const location = useLocation();
  let params = useParams();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb path={[{ link: "/", text: "Главная" }, { text: "/" }]} />
        </div>
        <div className={styles.content}>
          <div className={styles.hi}>
            По запросу {params.q} найдено N товаров
          </div>
        </div>
      </div>
    </>
  );
}
