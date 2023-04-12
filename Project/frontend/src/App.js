import "./App.css";
import Home from "./pages/Buyer/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { UseUserContext } from "./context/useUserContext";
import { BuyerRoutes } from "./BuyerRoutes";
import { SellerRoutes } from "./SellerRoutes";
import { AdminRoutes } from "./AdminRoutes";

// UseUserContext is a custom hook that provides access to the user state
// This component sets up routes for different user roles
export default function App() {
  const { user1 } = UseUserContext();

  return (
    <div className="App">
      {/* Define routes using the Routes and Route components from react-router-dom */}
      <Routes>
        {/* If the user is a buyer or not logged in, render the Home component */}
        {/* If the user is a seller, navigate to the seller page */}
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

        {/* Render the Login and Register components for user authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Render the AdminRoutes component for admin users */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* If the user is a buyer or not logged in, render the BuyerRoutes component */}
        {(user1[0]?.role === "Buyer" || !user1[0]) && (
          <Route path="/buyer/*" element={<BuyerRoutes />} />
        )}

        {/* If the user is a seller, render the SellerRoutes component */}
        {user1[0]?.role === "Merchant" && (
          <Route path="/seller/*" element={<SellerRoutes />} />
        )}
      </Routes>
    </div>
  );
}
