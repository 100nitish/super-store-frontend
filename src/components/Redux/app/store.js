import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlices";
import productReducer from "../features/todo/productSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
  todo: todoReducer,
  product: productReducer,
});


const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", 
});
