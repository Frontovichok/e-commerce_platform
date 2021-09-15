import React from "react";
import { useHistory, useLocation } from "react-router";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./PaginationControl.module.css";

export default function PaginationControl(props) {
  let width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  let siblingCount = width > 400 ? 1 : 0;
  let history = useHistory();
  let location = useLocation();

  return (
    <div className={styles.paginationContainer}>
      <Pagination
        count={props.count}
        page={props.page}
        siblingCount={siblingCount}
        onChange={(e, value) => {
          let currentUrlParams = new URLSearchParams(location.search);
          currentUrlParams.set("page", value);
          history.push(location.pathname + "?" + currentUrlParams.toString());
        }}
      />
    </div>
  );
}
