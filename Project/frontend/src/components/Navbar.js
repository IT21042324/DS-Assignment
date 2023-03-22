import /*faMagnifyingGlass,*/ "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div className="active">Home</div>
      <Link to="/product" style={{ textDecoration: "none", color: "black" }}>
        <div>Product</div>
      </Link>
      <div>Contact</div>
      {/* <div>
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div> */}
    </nav>
  );
}

export default NavBar;
