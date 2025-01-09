import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "../../../API/PostApi";


export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await getPost();
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
