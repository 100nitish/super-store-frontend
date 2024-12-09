import React, { useEffect, useState } from "react";
import { postData, putData } from "../API/PostApi";

const SimpleForm = ({data,setData,updateDataApi,setUpdateDataApi}) => {
  const [formData, setFormData] = useState({
    image:null,
    title: "",
    price: "",
    rating: "",
   
  });

  let isEmpty = Object.keys(updateDataApi).length ===0;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: files[0], 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, 
      });
    }
  };
  

  useEffect(()=>{

    updateDataApi && 
    setFormData({
        image:updateDataApi.image || "",
        title:updateDataApi.title || "",
        price:updateDataApi.price || "",
        rating:updateDataApi.rating || ""
    })



  },[updateDataApi])

  const addPostData = async()=>{
    const res = await postData(formData);
    console.log(res)
    if((res.status = 200)){
        setData([...data,res.data]);
    }
  }

  const updatePostData = async () => {
    if (!updateDataApi?.id) {
      console.error("No ID provided for update.");
      return;
    }
  
    try {
      const res = await putData(updateDataApi.id, formData); 
      console.log(res);
  
      if (res.status === 200) {
        setData((prev) =>
          prev.map((item) => (item.id === updateDataApi.id ? res.data : item))
        );
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  
    if (isEmpty) {
      addPostData(); 
    } else {
      updatePostData(); 
    }
  
  
    setFormData({ image:null,title: "", price: "", rating: "" });
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

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            placeholder="Enter the title"
            required
          />
        </div>

       
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
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
            htmlFor="rating"
            className="block text-gray-700 font-medium mb-2"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            placeholder="Enter the rating (1-5)"
            min="1"
            max="5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          value={isEmpty ? "Add":"Edit"}
        >
         {isEmpty ? "Add":"Edit"}
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
