import "./App.css";
import Home from "./pages/Buyer/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { UseUserContext } from "./context/useUserContext";
import { BuyerRoutes } from "./BuyerRoutes";
import { SellerRoutes } from "./SellerRoutes";
import { AdminRoutes } from "./AdminRoutes";

export default function App() {
  const { user1 } = UseUserContext();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user1[0]?.role === "Buyer" || !user1[0] ? (
              <Home />
            ) : (
              <Navigate to="/seller" />
            )
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

        {(user1[0]?.role === "Buyer" || !user1[0]) && (
          <Route path="/buyer/*" element={<BuyerRoutes />} />
        )}
        {user1[0]?.role === "Merchant" && (
          <Route path="/seller/*" element={<SellerRoutes />} />
        )}
      </Routes>
    </div>
  );
}