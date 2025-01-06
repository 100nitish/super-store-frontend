import { deleteProduct, getPost } from "../API/PostApi";


export const fetchProducts = (setData) => {
  getPost()
    .then((res) => {
      console.log("Fetched posts data:", res.data);
      setData(res.data);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
};


export const removeProduct = (id, setData, fetchProducts) => {
  if (!id) {
    console.error("Invalid ID for deletion");
    return;
  }

  const shouldRemove = window.confirm("Are you sure you want to delete?");
  if (!shouldRemove) {
    return;
  }

  deleteProduct(id)
    .then(() => {
      fetchProducts(setData);
      alert("Product deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    });
};
