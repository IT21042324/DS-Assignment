import { /*faMagnifyingGlass,*/ faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header () {
    return (
        <header>
            <h1>RB&NS</h1>
            <nav>
                <div className="active">Home</div>
                <div>About</div>
                <div>Contact</div>
                {/* <div>
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div> */}
            </nav>
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