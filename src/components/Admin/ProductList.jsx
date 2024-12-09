import React from "react";

const ProductList = ({ data, handleDeletePost, handleUpdatePost }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-32 w-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">Price: ${item.price}</p>
            <p className="text-yellow-500 text-sm mb-4">
              Rating: {item.rating
                ? `${item.rating.rate} (${item.rating.count} reviews)`
                : "No ratings yet"}
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => handleUpdatePost(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => handleDeletePost(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
