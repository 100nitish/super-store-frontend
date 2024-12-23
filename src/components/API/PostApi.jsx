import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000/api`, 
});


export const postRegister = (formData, config) => {
  return api.post(`/auth/register`, formData, config);
};

export const postLogin = (formData) => {
    return api.post("/auth/login", formData, {
      headers: { "Content-Type": "application/json" },
    });
  };
  


export const getPost = () => {
  return api.get(`/form/get-product`);
};


export const deletePost = (id) => {
  return api.delete(`/form/get-product/${id}`);
};


export const postData = (post) => {
  return api.post(`/form/get-product`, post);
};


export const putData = (id, post) => {
  return api.put(`/form/get-product/${id}`, post);
};
