import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Dropdown } from "semantic-ui-react";
import styles from "./ShowedProductsInPageDropdown.module.css";

const options = [
  { key: "15", value: "15", text: "15" },
  { key: "30", value: "30", text: "30" },
];

const ShowedProductsInPageDropdown = () => {
  // let history = useHistory();
  // let location = useLocation();
  // let currentUrlParams = new URLSearchParams(location.search);
  // let [sortBy, setSortBy] = useState(currentUrlParams.get("sort") || "default");

  // useEffect(() => {
  //   currentUrlParams.set("sort", sortBy);
  //   history.push(location.pathname + "?" + currentUrlParams.toString());
  // }, [sortBy]);

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.label}>Товаров на странице:</div>
      <Dropdown
        placeholder="Товаров на странице"
        openOnFocus
        selection
        options={options}
        className={styles.dropdown}
        onChange={(e, { value }) => {
          // setSortBy(value);
          // currentUrlParams.set("page", 1);
          // history.push(location.pathname + "?" + currentUrlParams.toString());
        }}
        // defaultValue={currentUrlParams.get("sort")}
      />
    </div>
  );
};

export default ShowedProductsInPageDropdown;
