import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { UseUserContext } from "./context/useUserContext";
import { BuyerRoutes } from "./BuyerRoutes";
import { SellerRoutes } from "./SellerRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { BaseRoutes } from "./BaseRoutes";

export default function App() {
  const { user1 } = UseUserContext();

  let element;
  switch (user1[0]?.role) {
    case "Merchant":
      element = <Navigate to="/seller" />;
      break;
    case "Admin":
      element = <Navigate to="/admin" />;
      break;
    default:
      element = <BaseRoutes />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={element} />
        <Route
          path="/admin/*"
          element={
            user1[0]?.role === "Admin" ? <AdminRoutes /> : <Navigate to="/" />
          }
        />

        <Route path="/buyer/*" element={<BuyerRoutes />} />

        <Route
          path="/seller/*"
          element={
            user1[0]?.role === "Merchant" ? (
              <SellerRoutes />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}
