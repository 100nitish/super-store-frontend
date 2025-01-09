import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import Button from "@mui/material/Button";
import Edit from "./Edit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/features/todo/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.product);
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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = (id) => {
    console.log(`Delete product with id: ${id}`);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <div className="p-4">
            {isLoading && <p>Loading products...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!isLoading && !error && data && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
                  >
                    <Link to={`/products/${item._id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-32 w-32 object-contain mb-4"
                      />
                    </Link>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">Price: ${item.price}</p>
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
                        onClick={() => handleDeleteProduct(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
