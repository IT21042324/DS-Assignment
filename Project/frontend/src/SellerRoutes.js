import { Routes, Route } from "react-router-dom";
import Seller from "./pages/Seller/Seller";
import Profile from "./pages/Seller/Profile";
import ProductList from "./pages/Seller/ProductList";
import AddProduct from "./pages/Seller/Add-Product";
import Store from "./pages/Seller/Store";
import { Navigate } from "react-router-dom";
import { UseUserContext } from "./context/useUserContext";

export function SellerRoutes() {
  const { getUser } = UseUserContext();
  const user = getUser();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Seller />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route
          path="/store"
          element={!user?.storeID ? <Store /> : <Navigate to="/seller" />}
        />
      </Routes>
    </div>
  );
}
