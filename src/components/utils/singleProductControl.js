import axios from "axios";


export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/form/get-product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
