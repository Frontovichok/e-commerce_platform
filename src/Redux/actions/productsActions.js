import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAILED,
  SET_PRODUCTS,
  SET_CATEGORIES,
} from "../types";
import productsAPI from "../../api/api";

const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
const productsLoadingFailed = () => ({ type: PRODUCTS_LOADING_FAILED });
const productsIsLoading = () => ({ type: PRODUCTS_LOADING });

export const getProducts = (categoryPath) => {
  return async (dispatch) => {
    dispatch(productsIsLoading());
    const response = await productsAPI.getProducts(categoryPath);
    if (!response.isError) {
      dispatch(setProducts(response.data));
    } else {
      dispatch(productsLoadingFailed());
    }
  };
};
