import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  const [selection, setSelection] = useState("Home");

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/") {
      setSelection("Home");
    } else if (path === "/product") {
      setSelection("Products");
    } else if (path === "/seller/register") {
      setSelection("Seller");
    }
  }, []);

  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className={selection === "Home" ? "active" : ""}>Home</div>
      </Link>
      <Link to="/product" style={{ textDecoration: "none", color: "black" }}>
        <div className={selection === "Products" ? "active" : ""}>Products</div>
      </Link>
      <Link
        to="/seller/register"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={selection === "Seller" ? "active" : ""}>
          Sell On RB&NS
        </div>
      </Link>
    </nav>
  );
}

export default NavBar;
