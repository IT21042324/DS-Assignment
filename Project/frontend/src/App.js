import "./App.css";
import Home from "./pages/Buyer/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
