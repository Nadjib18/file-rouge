import axios from "axios";

const apiModule = (() => {
  const BASE_URL = "http://127.0.0.1:8000/api";

  async function fetchAllProducts() {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchSingleProduct(productId) {
    try {
      const { data } = await axios.get(`${BASE_URL}/products/${productId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAllCategories() {
    try {
      const { data } = await axios.get(`${BASE_URL}/categories`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAllProductsFromCategory(categoryId) {
    try {
      const { data } = await axios.get(`${BASE_URL}/categories/${categoryId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function postOrder(order) {
    try {
      console.log("Commande", order);
      const response = await axios.post(
        `${BASE_URL}/orders/`,
        {
          orderDetail: order,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      if (error.response) {
        console.log("Error response", error.response);
      }
      if (error.request) {
        console.log("Error request", error.request);
      }
      if (error.message) {
        console.log("Error message", error.message);
      }
    }
  }

  return {
    fetchAllProducts,
    fetchSingleProduct,
    fetchAllProductsFromCategory,
    fetchAllCategories,
    postOrder,
  };
})();

export default apiModule;
