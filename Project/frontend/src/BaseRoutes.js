import { Routes, Route } from "react-router-dom";
import Home from "./pages/Buyer/Home";
import Login from "./components/Login";
import Register from "./components/Register";

export function BaseRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
