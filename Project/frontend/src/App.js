import "./App.css";
import Home from "./pages/Buyer/Home";
import Cart from "./pages/Buyer/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Store from "./pages/Seller/Store";
import { UseUserContext } from "./context/useUserContext";

function App() {
  const { user1 } = UseUserContext();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {user1[0]?.role === "Buyer" ||
          (!user1[0] && (
            <>
              <Route path="/Cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
            </>
          ))}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller/register" element={<Register />} />
        <Route path="/seller/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
