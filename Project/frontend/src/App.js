import "./App.css";
import Home from "./pages/Buyer/Home";
import Cart from "./pages/Buyer/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
