import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Products from "./Products";
import { addProduct } from "../API/PostApi";

const BasicModal = ({ handleOpen, handleClose, open, item, isEditMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
 
    if (isEditMode && item) {
      setFormData({
        name: item.name || "",
        description: item.description || "",
        price: item.price || "",
        category: item.category || "",
        image: null, 
      });
    }
  }, [item, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    
    setMessage("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (isEditMode) {
        
        await axios.put(`http://localhost:8000/api/form/edit-product/${item._id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setMessage("Product updated successfully!");
      } else {
        
        await addProduct(data);
        setMessage("Product added successfully!");
      }

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });

      handleClose();
    } catch (error) {
      setMessage(
        isEditMode ? "Error updating product. Please try again." : "Error adding product. Please try again."
      );
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <Products handleOpen={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="h-96 pt-3 pb-3 flex items-center mt-24 mx-auto my-auto justify-center w-96 bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              {isEditMode ? "Edit Product" : "Add Product"}
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter the Product Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter the product description"
                rows="4"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter the price"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter the category"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              {isEditMode ? "Update Product" : "Add Product"}
            </button>

            {message && <p className="text-center text-sm mt-4 text-gray-600">{message}</p>}
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BasicModal;
