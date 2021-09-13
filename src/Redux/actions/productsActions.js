import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAILED,
  SET_PRODUCTS,
  SET_MISSED_PRODUCTS,
  SET_CATEGORIES,
} from "../types";
import productsAPI from "../../api/api";
import productsCategories from "../../data/productsCategories.json";

const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
const setMissedProducts = (missedProducts) => ({
  type: SET_MISSED_PRODUCTS,
  payload: missedProducts,
});
const productsLoadingFailed = () => ({ type: PRODUCTS_LOADING_FAILED });
const productsIsLoading = () => ({ type: PRODUCTS_LOADING });
const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const getProducts = (categoryPath) => {
  const categoriesData = {};
  return async (dispatch) => {
    dispatch(productsIsLoading());
    const response = await productsAPI.getProducts(categoryPath);
    if (!response.isError) {
      categoriesData[response.data.link.split("/")[1]] = response.data;
      dispatch(setProducts(categoriesData));
    } else {
      dispatch(productsLoadingFailed());
    }
  };
};

const getCategories = () => {
  let allCategories = {};
  productsCategories.map((category) => {
    allCategories[category.link.split("/")[2]] = true;
  });
  // dispatch(setCategories(categoriesNames));
  return allCategories;
};

export const getAllProducts = (productsInState, categories) => {
  let allCategories = getCategories();
  let missedCategories = [];
  let missedCategoriesData = {};
  Object.keys(allCategories).map((category) => {
    if (productsInState[`/${category}`] === undefined) {
      missedCategories.push(category);
      console.log("2");
    }
  });
  console.log("missedCategories1: ", missedCategories);

  return async (dispatch) => {
    dispatch(productsIsLoading());
    dispatch(setCategories(allCategories));

    // for (let i = 0; i < missedgCategories.length; i++) {
    //   const response = await productsAPI.getProducts(
    //     `${missedgCategories[i]}.json`
    //   );
    //   if (!response.isError) {
    //     dispatch(setProducts(response.data));
    //   } else {
    //     dispatch(productsLoadingFailed());
    //   }
    // }
    console.log("missedCategories: ", missedCategories);
    // missedCategories.map(async (category) => {
    for (let i = 0; i < missedCategories.length; i++) {
      let category = missedCategories[i];
      const response = await productsAPI.getProducts(`${category}.json`);
      console.log("response: ", response);
      if (!response.isError) {
        missedCategoriesData[response.data.link.split("/")[1]] = response.data;
      } else {
        dispatch(productsLoadingFailed());
      }
    }

    // });
    console.log("missedCategoriesData: ", missedCategoriesData);
    dispatch(setMissedProducts(missedCategoriesData));
  };

  // let missingCategories = productsInState.map((category) => {
  //   console.log(category.link.split("/")[1]);
  // });
  // return async (dispatch) => {
  //   dispatch(productsIsLoading());
  //
  // };
};
