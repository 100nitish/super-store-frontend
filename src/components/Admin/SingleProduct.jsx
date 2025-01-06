import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/singleProductControl";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});


  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <>
      <div className="m-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:text-left w-[1300px] m-auto">
          <div>
            <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>
          <div>
            <h1 className="text-5xl text-blue-600 font-sans font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-zinc-900 font-sans font-medium mb-4">{product.description}</p>
            <p className="text-xl text-black font-sans font-bold mb-4">${product.price}</p>
            <div className="flex space-x-2">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              >
                Buy Now
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
