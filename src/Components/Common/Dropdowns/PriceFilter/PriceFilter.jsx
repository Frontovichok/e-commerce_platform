import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Popup, Icon, Checkbox } from "semantic-ui-react";
import Slider from "@mui/material/Slider";
import styles from "./PriceFilter.module.css";

const PriceFilter = () => {
  let history = useHistory();
  let location = useLocation();
  let currentUrlParams = new URLSearchParams(location.search);
  let priceValueFromParams = [
    +currentUrlParams.get("pricefrom"),
    +currentUrlParams.get("priceto"),
  ];
  let [priceValue, setPriceValue] = useState(
    priceValueFromParams[0] && priceValueFromParams[1]
      ? priceValueFromParams
      : [100, 1100]
  );
  let [open, setOpen] = React.useState(false);
  let [priceChecked, setPriceСhecked] = React.useState(
    currentUrlParams.get("showProductsOnlyWithPrice") === "false" ? false : true
  );
  let minPrice = 0;
  let maxPrice = 2000;

  const handleChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  return (
    <div className={styles.sortDropdown}>
      {/* <div className={styles.label}>Сотировка:</div> */}
      <Popup
        content={
          <div className={styles.popupContainer}>
            <div className={styles.priceTablo}>
              <p className={styles.priceText}>
                от{" "}
                {priceValue[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                ₽
              </p>
              <p className={styles.priceText}>
                до{" "}
                {priceValue[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                ₽
              </p>
            </div>
            <div className={styles.sliderContainer}>
              <Slider
                min={minPrice}
                max={maxPrice}
                step={10}
                getAriaLabel={() => "Price range"}
                value={priceValue}
                onChange={handleChange}
              />
            </div>
            <Checkbox
              className={styles.priceCheckbox}
              label="Отображать только товары с ценой"
              onChange={() => setPriceСhecked(!priceChecked)}
              checked={priceChecked}
            />
            <button
              className="customButton_outline"
              onClick={(e) => {
                currentUrlParams.set("page", 1);
                currentUrlParams.set("pricefrom", priceValue[0]);
                currentUrlParams.set("priceto", priceValue[1]);
                currentUrlParams.set("showProductsOnlyWithPrice", priceChecked);
                history.push(
                  location.pathname + "?" + currentUrlParams.toString()
                );
                setOpen(false);
              }}
            >
              Применить
            </button>
          </div>
        }
        on="click"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        positionFixed
        position="bottom left"
        trigger={
          <Button basic className={styles.priceButton}>
            Цена, &nbsp;₽
            <Icon name="triangle down" className={styles.priceButtonIcon} />
          </Button>
        }
      />
    </div>
  );
};

export default PriceFilter;
