import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/form";


export const addProduct = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/add-product`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};


export const editProduct = async (id, data) => {
  const response = await axios.put(`${API_BASE_URL}/edit-product/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
