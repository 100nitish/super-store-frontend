import { addProduct } from "../API/PostApi";


export const addNewProduct = async (formData, resetForm, setMessage) => {
  const data = new FormData();
  Object.keys(formData).forEach((key) => {
    data.append(key, formData[key]);
  });

  try {
    const response = await addProduct(data);
    console.log("Product added successfully:", response.data);
    setMessage("Product added successfully!");
    resetForm(); 
  } catch (error) {
    console.error("Error adding product:", error.response?.data || error.message);
    setMessage("Error adding product. Please try again.");
  }
};
