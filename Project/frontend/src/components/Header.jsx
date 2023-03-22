import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./Navbar";

function Header () {
    return (
        <header>
            <h1>RB&NS</h1>
            <NavBar />
            <div className="navbar-icons">
                <div className="user">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </div>
        </header>
    );
}

export default Header;