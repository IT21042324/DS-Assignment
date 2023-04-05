import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { UseUserContext } from "../context/useUserContext";

function NavBar() {
  const [selection, setSelection] = useState("Home");
  function onNavLinkClick() {}

  //To get the logged in userRoler
  const { getUserRole, dispatch } = UseUserContext();
  const userRole = getUserRole();

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
        to="/Seller/store"
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => onNavLinkClick("Store")}
      >
        <div className={selection === "Store" ? "active" : ""}>Store</div>
      </Link>
      {!(userRole === "Merchant") ? (
        <Link
          to="/seller/register"
          style={{ textDecoration: "none", color: "black" }}
          onClick={(e) => {
            dispatch({
              type: "SetUserRole",
              userRole: "Merchant",
            });
          }}
        >
          <div className={selection === "Seller" ? "active" : ""}>
            Sell On RB&NS
          </div>
        </Link>
      ) : (
        ""
      )}
    </nav>
  );
}

export default NavBar;
