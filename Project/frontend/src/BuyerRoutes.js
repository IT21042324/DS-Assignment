import "./App.css";
import Cart from "./pages/Buyer/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";
import { Navigate } from "react-router-dom";
import { UseUserContext } from "./context/useUserContext";

export function BuyerRoutes() {
  const { user1, getUser } = UseUserContext();
  const user = getUser();

  return (
    <div className="App">
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}
