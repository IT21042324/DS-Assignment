import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../../components/SideMenu";
import { faDashboard, faGear, faListSquares, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import pic from "../../assets/ad.jpg";

export default function AdminProfile() {
  // change the component name to AdminProfile
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
        <SideMenu to="/admin/adminprofile" icon={faUser} label="Profile" />
        <SideMenu to="/admin/user" icon={faUsers} label="Users" />
        <SideMenu to="/admin/add-user" icon={faGear} label="Add-User" />
        </div>
      </section>
      <section className="main-wrap">
        <div
          className="content-main"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h2>Admin Profile</h2> {/* change the heading */}
            <p>Manage admin profile here</p> {/* change the description */}
          </div>
          <div>
            <Link className="btn btn-primary" to={"/admin"}>
              Back
            </Link>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-danger" style={{ height: 150 }}></div>
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
                <h3>Admin Name</h3> {/* change the name */}
                <p>designation</p> {/* change the location */}
              </div>
              <div className="col-xl-4 text-md-end">
                <Link className="btn btn-success" to={"/admin/edit-profile"}>
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit
                </Link>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <h4>Contacts</h4>
                <p>
                  Manager: Admin Name <br />
                </p>{" "}
                {/* change the name */}
                <p>
                  admin@example.com <br />
                </p>{" "}
                {/* change the email */}
                <p>012 345 6789</p> {/* change the phone number */}
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <h4>Address</h4>
                <p>
                  Country: Sri Lanka <br />
                </p>
                <p>
                  Address: Admin Street, Admin City <br />
                </p>{" "}
                {/* change the address */}
                <p>Postal code: 62639</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
