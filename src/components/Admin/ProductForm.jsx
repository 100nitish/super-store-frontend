import React from "react";
import SimpleForm from "./AddProduct";

const ProductForm = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Add / Edit Product</h1>
     
      <SimpleForm
        data={data}
        setData={setData}
        updateDataApi={updateDataApi}
        setUpdateDataApi={setUpdateDataApi}
      />
    </div>
  );
};

export default ProductForm;
