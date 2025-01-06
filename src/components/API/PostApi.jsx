import axios from "axios";
const token = localStorage.getItem("token");

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
  
export const addProduct = (formData)=>{
  return api.post(`/form/add-product`,formData,{
    headers:{
      'Content-Type':'multipart/form-data'
    }})
}

export const getPost = () => {
  return api.get(`/form/get-product`);
};


export const deleteProduct = (id) => {
  return api.delete(`/form/delete-product/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    });
};


export const postData = (post) => {
  return api.post(`/form/get-product`, post);
};


export const putData = (id, post) => {
  return api.put(`/form/get-product/${id}`, post);
};

export const userData = async () => {
  try {
    const response = await api.get('/auth/get-register', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const deleteUser = async (userId) => {
  return await api.delete(`/auth/delete-register/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
