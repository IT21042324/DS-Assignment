import Cart from "./pages/Buyer/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";
import Buyer from "./pages/Buyer/Buyer";

export function BuyerRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Buyer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}
