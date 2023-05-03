import { faDashboard, faListSquares } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SideList() {
  return (
    <section className="sideList">
      <div className="logo">
        <Link
          to={"/admin"}
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
            to={"/admin"}
            style={{ textDecoration: "none", color: "gray", lineHeight: 2 }}
          >
            <FontAwesomeIcon icon={faDashboard} />
            &nbsp;&nbsp;Dashboard
          </Link>
        </div>

        <div className="li">
          <Link
            to={"/admin/orders"}
            style={{ textDecoration: "none", color: "gray", lineHeight: 2 }}
          >
            <FontAwesomeIcon icon={faListSquares} />
            &nbsp;&nbsp;Orders
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SideList;
