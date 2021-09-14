import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAILED,
  SET_PRODUCTS,
  SET_SEARCH_QUERY,
} from "../types";
import productsAPI from "../../api/api";
import productsCategories from "../../data/productsCategories.json";

const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
const productsLoadingFailed = () => ({ type: PRODUCTS_LOADING_FAILED });
const productsIsLoading = () => ({ type: PRODUCTS_LOADING });

export const setSearchQuery = (searchQuery) => ({
  type: SET_SEARCH_QUERY,
  payload: searchQuery,
});

export const getProducts = (categoryPath) => {
  const categoriesData = {};
  return async (dispatch) => {
    dispatch(productsIsLoading());
    const response = await productsAPI.getProducts(categoryPath);
    if (!response.isError) {
      categoriesData[response.data.link.split("/")[1]] = response.data;
      dispatch(
        setProducts({
          productsData: categoriesData,
          allCategoriesNames: getAllCategoriesNames(),
        })
      );
    } else {
      dispatch(productsLoadingFailed());
    }
  };
};

const getAllCategoriesNames = () => {
  let allCategories = {};
  productsCategories.map((category) => {
    allCategories[category.link.split("/")[2]] = true;
  });
  return allCategories;
};

export const getAllProducts = (productsInState, isAllCategoriesLoaded) => {
  let allCategoriesNames = getAllCategoriesNames();
  let missedCategories = [];
  let missedCategoriesData = {};
  Object.keys(allCategoriesNames).map((category) => {
    if (productsInState[category] === undefined) {
      missedCategories.push(category);
    }
  });
  return async (dispatch) => {
    if (!isAllCategoriesLoaded) {
      dispatch(productsIsLoading());
      for (let i = 0; i < missedCategories.length; i++) {
        let category = missedCategories[i];
        const response = await productsAPI.getProducts(`${category}.json`);
        if (!response.isError) {
          missedCategoriesData[response.data.link.split("/")[1]] =
            response.data;
        } else {
          dispatch(productsLoadingFailed());
        }
      }
      dispatch(
        setProducts({
          productsData: missedCategoriesData,
          allCategoriesNames: allCategoriesNames,
        })
      );
    }
  };
};
