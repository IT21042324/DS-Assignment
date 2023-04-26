import Dashboard from "../../components/Dashboard";
import { faDashboard, faListSquares } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../../components/SideMenu";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <section className="sideMenu">
        <div className="logo">
        <Link
            to="/admin"
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
        <SideMenu to="/admin" icon={faDashboard} label="Dashboard" />
        <SideMenu to="/admin/orders" icon={faListSquares} label="Orders" />
        </div>
      </section>
      <Dashboard />
    </div>
  );
}
