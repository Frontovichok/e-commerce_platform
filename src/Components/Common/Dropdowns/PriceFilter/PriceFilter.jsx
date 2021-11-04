import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Popup, Icon } from "semantic-ui-react";
import Slider from "@mui/material/Slider";
import styles from "./PriceFilter.module.css";

const PriceFilter = () => {
  let history = useHistory();
  let location = useLocation();
  let currentUrlParams = new URLSearchParams(location.search);
  let [priceValue, setPriceValue] = useState([100, 500]);
  let sortBy = 1;

  const handleChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  //   useEffect(() => {
  //     if (
  //       currentUrlParams.get("price") === null ||
  //       sortBy !== currentUrlParams.get("price")
  //     ) {
  //       currentUrlParams.set("price", sortBy);
  //       history.push(location.pathname + "?" + currentUrlParams.toString());
  //     }
  //   }, [sortBy, location]);

  return (
    <div className={styles.sortDropdown}>
      {/* <div className={styles.label}>Сотировка:</div> */}
      <Popup
        content={
          <div>
            <div className={styles.priceTablo}>
              <p className={styles.priceText}>
                {priceValue[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                ₽
              </p>
              <p className={styles.priceText + " " + styles.dash}> - </p>
              <p className={styles.priceText}>
                {priceValue[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                ₽
              </p>
            </div>

            <div className={styles.sliderContainer}>
              <Slider
                min={0}
                max={2000}
                step={10}
                getAriaLabel={() => "Price range"}
                value={priceValue}
                onChange={handleChange}
              />
            </div>
          </div>
        }
        on="click"
        positionFixed
        position="bottom left"
        trigger={
          <Button basic className={styles.priceButton}>
            Цена
            <Icon name="triangle down" className={styles.priceButtonIcon} />
          </Button>
        }
      />
    </div>
  );
};

export default PriceFilter;
