import "./App.css";
import Home from "./pages/Buyer/Home";
import Cart from "./pages/Buyer/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";
import React from "react";
import Seller from "./pages/Seller/Seller";
import Profile from "./pages/Seller/Profile";
import ProductList from "./pages/Seller/ProductList";
import AddProduct from "./pages/Seller/Add-Product";
import Login from "./components/Login";
import Register from "./components/Register";
import Store from "./pages/Seller/Store";
import { Navigate } from "react-router-dom";
import { UseUserContext } from "./context/useUserContext";

export default function App() {
  const { user1, getUser } = UseUserContext();
  const user = getUser();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user?.role === "Buyer" || !user ? (
              <Home />
            ) : (
              <Navigate to="/seller/store" />
            )
          }
        />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/seller/register" element={<Register />} />
        <Route path="/seller/profile" element={<Profile />} />
        <Route path="/seller/product" element={<ProductList />} />
        <Route path="/seller/add-product" element={<AddProduct />} />

        <Route
          path="/seller/store"
          element={!user?.storeID ? <Store /> : <Navigate to="/seller" />}
        />
      </Routes>
    </div>
  );
}
