import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Dropdown } from "semantic-ui-react";
import styles from "./ShowedProductsInPageDropdown.module.css";

const options = [
  { key: "15", value: "15", text: "15" },
  { key: "30", value: "30", text: "30" },
];

const ShowedProductsInPageDropdown = () => {
  let history = useHistory();
  let location = useLocation();
  let currentUrlParams = new URLSearchParams(location.search);
  let [productsPerPage, setProductsPerPage] = useState(
    currentUrlParams.get("productsPerPage") || "15"
  );

  useEffect(() => {
    if (
      currentUrlParams.get("productsPerPage") === null ||
      productsPerPage !== currentUrlParams.get("productsPerPage")
    ) {
      currentUrlParams.set("productsPerPage", productsPerPage);
      history.push(location.pathname + "?" + currentUrlParams.toString());
    }
  }, [productsPerPage, location]);

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.label}>Товаров на странице:</div>
      <Dropdown
        placeholder={currentUrlParams.get("productsPerPage")}
        openOnFocus
        selection
        options={options}
        className={styles.dropdown}
        onChange={(e, { value }) => {
          setProductsPerPage(value);
          currentUrlParams.set("page", 1);
          history.push(location.pathname + "?" + currentUrlParams.toString());
        }}
        defaultValue={currentUrlParams.get("productsPerPage")}
      />
    </div>
  );
};

export default ShowedProductsInPageDropdown;
