import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react';

function NavBar() {
  const [selection, setSelection] = useState("Home");

  const onNavLinkClick = (link) => {
    setSelection(link);
  };

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/") {
      setSelection("Home");
    } else if (path === "/product") {
      setSelection("Products");
    }
  }, []);

  return (
    <nav>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => onNavLinkClick("Home")}
      >
        <div className={selection === "Home" ? "active" : ""}>Home</div>
      </Link>
      <Link
        to="/product"
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => onNavLinkClick("Products")}
      >
        <div className={selection === "Products" ? "active" : ""}>Products</div>
      </Link>
    </nav>
  );
}

export default NavBar;
