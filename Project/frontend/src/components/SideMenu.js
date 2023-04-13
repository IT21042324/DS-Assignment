import { faBox, faDashboard, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <section className="sideMenu">
      <div className="logo">
        <Link
          to="/seller"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: 50,
            paddingTop: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          RB&NS
        </Link>
      </div>
      <div className="items">
        <div className="li">
          <Link
            to="/seller"
            style={{ textDecoration: "none", color: "gray", lineHeight: 2 }}
          >
            <FontAwesomeIcon icon={faDashboard} />
            &nbsp;&nbsp;Dashboard
          </Link>
        </div>
        <div className="li">
          <Link
            to="/seller/profile"
            style={{ textDecoration: "none", color: "gray", lineHeight: 2 }}
          >
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;Profile
          </Link>
        </div>

        <div className="li">
          <Link
            to="/seller/product"
            style={{ textDecoration: "none", color: "gray", lineHeight: 2 }}
          >
            <FontAwesomeIcon icon={faBox} />
            &nbsp;&nbsp;Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SideMenu;
