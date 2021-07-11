import { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import MenuExpanded from "../MenuExpanded/MenuExpanded";
import styles from "./SearchProduct.module.css";

const isMobile = window.innerWidth <= 900;

const source = [
  {
    title: "title1",
    description: "description1",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/15569321.jpg",
    price: 1,
  },
  {
    title: "title2",
    description: "description2",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_240,h_240,c_pad,b_white,d_photoiscoming.png,dpr_1.0/LMCode/11756305.jpg",
    price: 2,
  },
];

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function SearchProduct({ menuItems }) {
  let [openState, setOpenState] = useState(false);

  let toggleOpenState = () => {
    setOpenState(!openState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        {!isMobile && (
          <button className={styles.productsButton} onClick={toggleOpenState}>
            <Icon
              className={styles.listIcon}
              color="white"
              name={openState ? "chevron up" : "list ul"}
            />
            &nbsp; Каталог товаров
          </button>
        )}
        <div className={styles.searchInputContainer}>
          <input className={styles.searchInput} placeholder="Что ищем?" />
          {isMobile && (
            <Button className={styles.mobileSearchButton} icon="search" />
          )}
        </div>
        <button className={styles.searchButton}>Найти</button>
      </div>
      <MenuExpanded
        openState={openState}
        setOpenState={setOpenState}
        menuItems={menuItems}
      />
    </div>
  );
}

export default SearchProduct;
