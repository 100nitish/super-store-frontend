import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegistraion from './components/Registrtion/UserRegistraion';
import Login from './components/Login/Login';
import MainDashboard from './components/Admin/MainDashboard';
import Products from './components/Admin/Products';
import ProductForm from './components/Admin/ProductForm';
import Register from './components/Registrtion/Register'
import Edit from './components/Admin/Edit'
import SingleProduct from './components/Admin/SingleProduct';
import { Provider } from 'react-redux';
import { AuthProvider } from './components/Context/AuthContext';
import { ProductProvider } from './components/Context/ProductContext';
import AddTodo from './components/Redux/connect/AddTodo';
import { store } from './components/Redux/app/store';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  const [open, setOpen] = useState(false);
  const persistor = persistStore(store);
  return (
    <AuthProvider>
      <ProductProvider>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainDashboard/>} />
          
          <Route path="/registration" element={<UserRegistraion />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/add-todo" element={<AddTodo/>} />
          
          <Route path="/login" element={<Login />} />
        
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<SingleProduct/>} />
          <Route
          path="/edit"
          element={<Edit open={open} setOpen={setOpen} />}
        />
          <Route path="/add-data" element={<ProductForm/>} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
    </PersistGate>
    </Provider>
    </ProductProvider>  
    </AuthProvider>
  );
};

export default App;
