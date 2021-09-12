import {
  SET_PRODUCTS,
  SET_CATEGORIES,
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAILED,
} from "../types";

const initialState = {
  products: {},
  categories: {},
  isAllCategoriesLoaded: false,
  isLoading: false,
  loadingFailed: false,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      const productsCategory = {};
      productsCategory[action.payload.link] = action.payload;
      // console.log(state.products);
      return {
        ...state,
        products: { ...{ ...state.products }, ...productsCategory },
        isLoading: false,
        loadingFailed: false,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        isAllCategoriesLoaded: true,
      };
    case PRODUCTS_LOADING:
      return { ...state, isLoading: true };
    case PRODUCTS_LOADING_FAILED:
      return { ...state, loadingFailed: true };
    default:
      return state;
  }
}

export default productsReducer;
