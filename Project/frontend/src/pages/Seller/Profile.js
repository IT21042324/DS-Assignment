import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faDashboard, faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import pic from "../../assets/f1.png";

export default function Profile() {
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
          <SideMenu to="/seller/profile" icon={faUser} label="Profile" />
          <SideMenu to="/seller/product" icon={faBox} label="Products" />
        </div>
      </section>
      <section className="main-wrap">
        <div
          className="content-main"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h2>Seller Profile</h2>
            <p>Manage seller profile here</p>
          </div>
          <div>
            <Link className="btn btn-primary" to={"/seller"}>
              Back
            </Link>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-primary" style={{ height: 150 }}></div>
          <div className="card-body">
            <div className="row">
              <div
                className="col-xl col-lg flex-grow-0"
                style={{ flexBasis: 230 }}
              >
                <div
                  className="img-thumbnail shadow w-100 bg-white position-relative text-center"
                  style={{ height: 190, width: 200, marginTop: -120 }}
                >
                  <img src={pic} className="center-xy img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xl col-lg">
                <h3>Shop Name</h3>
                <p>location</p>
              </div>
              <div className="col-xl-4 text-md-end">
                <Link className="btn btn-success" to={"/seller/edit-profile"}>
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit
                </Link>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <h4>Contacts</h4>
                <p>
                  Manager: Name <br />
                </p>
                <p>
                  example@gmail.com <br />
                </p>
                <p>012 345 6789</p>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <h4>Address</h4>
                <p>
                  Country: Sri Lanka <br />
                </p>
                <p>
                  Address: Street, City <br />
                </p>
                <p>Postal code: 62639</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
