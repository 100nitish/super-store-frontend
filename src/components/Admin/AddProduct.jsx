import React, { useState } from "react";
import { addNewProduct } from "../utils/addProductControl";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };


  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: null,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    await addNewProduct(formData, resetForm, setMessage);
  };

  return (
    <div className="min-h-96 pt-3 pb-3 flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Product
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
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
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
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="1">Grocery</option>
            <option value="2">Electronic</option>
            <option value="3">Clothes</option>
            <option value="4">Jewelry</option>
            <option value="5">Kids</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Product
        </button>

        {message && (
          <p className="text-center text-sm mt-4 text-gray-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default AddProductForm;
