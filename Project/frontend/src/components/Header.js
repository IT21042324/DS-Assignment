import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import React from 'react';

function Header () {
    return (
        <header>
            <h1>RB&NS</h1>
            <NavBar />
            <div className="navbar-icons">
                <div className="user">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <Link to="/Cart">
                <div className="cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                </Link>

            </div>
        </header>
    );
}

export default Header;