import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegistraion from './components/Registrtion/UserRegistraion';
import Login from './components/Login/Login';
import MainDashboard from './components/Admin/MainDashboard';
import Products from './components/Admin/Products';
import ProductForm from './components/Admin/ProductForm';
import Register from './components/Registrtion/Register'
import Edit from './components/Admin/Edit'

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainDashboard/>} />
          <Route path="/registration" element={<UserRegistraion />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products/>} />
          <Route
          path="/edit"
          element={<Edit open={open} setOpen={setOpen} />}
        />
          <Route path="/add-data" element={<ProductForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
