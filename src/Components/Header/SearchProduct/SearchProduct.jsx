import { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import MenuExpanded from "../MenuExpanded/MenuExpanded";
import { useHistory } from "react-router-dom";
import styles from "./SearchProduct.module.css";
import { connect } from "react-redux";
import { setSearchQuery } from "../../../Redux/actions/productsActions";

const isMobile = window.innerWidth <= 900;

function SearchProduct({ menuItems, searchQuery, setSearchQuery }) {
  console.log("searchQuery: ", searchQuery);
  let history = useHistory();
  let [openState, setOpenState] = useState(false);
  // let [searchQuery, setSearchQuery] = useState("");

  let handleChangeSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };
  let handleKeyDownSearchQuery = (e) => {
    if (e.keyCode === 13) {
      searchSubmit();
    }
  };
  let searchSubmit = () => {
    if (searchQuery.length > 3) {
      history.push("/search/" + searchQuery);
    }
  };

  let clearSearchInput = () => {
    setSearchQuery("");
  };

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
              // color="white"
              name={openState ? "chevron up" : "list ul"}
            />
            &nbsp; Каталог товаров
          </button>
        )}
        <div className={styles.searchInputContainer}>
          <input
            className={styles.searchInput}
            placeholder="Что ищем?"
            value={searchQuery}
            onKeyDown={handleKeyDownSearchQuery}
            onChange={handleChangeSearchQuery}
          />
          <Button
            className={styles.clearSearchFieldButton}
            icon={searchQuery.length > 0 ? "close" : "search"}
            onClick={clearSearchInput}
          />
        </div>
        <button className={styles.searchButton} onClick={searchSubmit}>
          Найти
        </button>
      </div>
      <MenuExpanded
        openState={openState}
        setOpenState={setOpenState}
        menuItems={menuItems}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchQuery: state.products.searchQuery,
});

export default connect(mapStateToProps, { setSearchQuery })(SearchProduct);
