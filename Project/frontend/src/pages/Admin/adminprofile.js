import { Link } from "react-router-dom";
import SideList from "../../components/SideList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import pic from "../../assets/ad.jpg";

export default function AdminProfile() {
  // change the component name to AdminProfile
  return (
    <div>
      <SideList />
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
          <div class="card-header bg-danger" style={{ height: 150 }}></div>
          <div className="card-body">
            <div class="row">
              <div class="col-xl col-lg flex-grow-0" style={{ flexBasis: 230 }}>
                <div
                  class="img-thumbnail shadow w-100 bg-white position-relative text-center"
                  style={{ height: 190, width: 200, marginTop: -120 }}
                >
                  <img src={pic} class="center-xy img-fluid" alt="" />
                </div>
              </div>
              <div class="col-xl col-lg">
                <h3>Admin Name</h3> {/* change the name */}
                <p>Admin location</p> {/* change the location */}
              </div>
              <div class="col-xl-4 text-md-end">
                <Link className="btn btn-success" to={"/admin/edit-profile"}>
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit
                </Link>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row g-4">
              <div class="col-sm-6 col-lg-4 col-xl-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3">
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
