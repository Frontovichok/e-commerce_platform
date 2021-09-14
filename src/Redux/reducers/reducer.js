import {
  SET_PRODUCTS,
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAILED,
  SET_SEARCH_QUERY,
} from "../types";

const initialState = {
  products: {},
  categories: {},
  isAllCategoriesLoaded: false,
  isLoading: false,
  loadingFailed: false,
  searchQuery: "",
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_PRODUCTS:
      const productsCategories = {};
      Object.keys(action.payload.productsData).map((key) => {
        productsCategories[key] = true;
      });
      const categories = { ...state.categories, ...productsCategories };
      const isAllCategoriesLoaded =
        Object.keys(categories).length ===
        Object.keys(action.payload.allCategoriesNames).length;
      return {
        ...state,
        products: { ...state.products, ...action.payload.productsData },
        categories: categories,
        isAllCategoriesLoaded: isAllCategoriesLoaded,
        isLoading: false,
        loadingFailed: false,
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
