import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      price: "",
      category: "",
      image: null,
    });
  
  return (
    <ProductContext.Provider value={{ data,setData,formData,setFormData }}>
      {children}
    </ProductContext.Provider>
  );
};
