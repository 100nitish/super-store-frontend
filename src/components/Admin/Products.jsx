import React, { useEffect, useState } from "react";
import { getPost, deletePost } from "../API/PostApi";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import Button from "@mui/material/Button";
import Edit from "./Edit";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleOpen = (item, isEdit = false) => {
    setSelectedItem(item);
    setIsEditMode(isEdit);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
    setIsEditMode(false);
  };

  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log("Fetched posts data:", res.data); 
      setData(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!id) {
      console.error("Invalid ID for deletion");
      return;
    }

    try {
      const res = await axios.delete(
        `http://localhost:8000/api/form/delete-product/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        
        const updatedData = data.filter(
          (currProduct) => currProduct.id !== id
        );
        setData(updatedData);
        console.log("Product deleted successfully!");
      } else {
        console.error(`Unexpected response: ${res.status}`);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.length === 0 ? (
                <p>Loading products...</p>
              ) : (
                data.map((item) => {
                  console.log("Rendering product with ID:", item.id); 
                  return (
                    <div
                      key={item.id}
                      className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-32 w-32 object-contain mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Price: ${item.price}
                      </p>
                      <p className="text-yellow-500 text-sm mb-4">
                        Rating:{" "}
                        {item.rating
                          ? `${item.rating.rate} (${item.rating.count} reviews)`
                          : "No ratings yet"}
                      </p>
                      <div className="flex space-x-4">
                        <Button
                          variant="contained"
                          onClick={() => handleOpen(item, true)}
                        >
                          Edit
                        </Button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                          onClick={() => {
                            console.log("Deleting item with ID:", item.id); // Debugging
                            handleDeleteProduct(item.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Edit
          open={open}
          handleClose={handleClose}
          item={selectedItem}
          isEditMode={isEditMode}
        />
      )}
    </>
  );
};

export default Products;
