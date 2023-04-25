import { Link } from "react-router-dom";
import DashWrapper from "../../components/DashWrapper";
import SideMenu from "../../components/SideMenu";
import { faBox, faDashboard, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Seller() {
  return (
    <div>
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
          <SideMenu to="/seller" icon={faDashboard} label="Dashboard" />
          <SideMenu to="/seller/product" icon={faBox} label="Products" />
        </div>
      </section>
      <DashWrapper />
    </div>
  );
}
