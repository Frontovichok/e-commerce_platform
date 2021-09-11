import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/categoriesData/",
});

const productsAPI = {
  getProducts: async (productsCategory) => {
    try {
      const response = await instance.get(productsCategory, {
        headers: {},
      });
      return response;
    } catch (err) {
      return { err, isError: true };
    }
  },
};

export default productsAPI;
