import "./App.css";
import Home from "./pages/Buyer/Home";
import Cart from "./pages/Buyer/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";
import React from 'react';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Seller from "./pages/Seller/Seller";
import Profile from "./pages/Seller/Profile";
import ProductList from "./pages/Seller/ProductList";
import AddProduct from "./pages/Seller/Add-Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/seller/register" element={<Register />} />
        <Route path="/seller/profile" element={<Profile />} />
        <Route path="/seller/product" element={<ProductList />} />
        <Route path="/seller/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
