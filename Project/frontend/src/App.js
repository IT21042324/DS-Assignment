import "./App.css";
import Home from "./pages/Buyer/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Buyer/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/Cart" element={<Cart />} />
=======
        <Route path="/product" element={<Product />} />
>>>>>>> df7d9656bda97b66cf41b4c602339e71bc27f24e
      </Routes>
    </div>
  );
}

export default App;
