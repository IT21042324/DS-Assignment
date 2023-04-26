import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { faDashboard, faGear, faListSquares, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function AddUser() {
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
            <h2>Add New User</h2>
            <p>Add Users here</p>
          </div>
          <div>
            <Link className="btn btn-primary" to={"/admin"}>
              Back
            </Link>
          </div>
        </div>

        <div className="card mb-4">
          <header className="card-header">
            <h4>User</h4>
            <div>
              <Link className="btn btn-success" to={"/add-user"}>
                Submit
              </Link>
            </div>
          </header>
          <form>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="validationCustom01">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Type here"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col">
                  <label for="validationCustom01">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Enter the password"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="validationCustom01">Contact No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Enter the contact Number"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col">
                  <label for="validationCustom01">Address</label>
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Enter the address"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col">
                  <label for="validationCustom01">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="validationCustom01"
                    placeholder=""
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="validationCustom01">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Enter the Role"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
