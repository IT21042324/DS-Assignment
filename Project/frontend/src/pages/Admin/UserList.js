import { Link } from "react-router-dom";
import SideList from "../../components/SideList";
// import { ItemMapper } from "../Buyer/ItemMapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function UserList() {
  return (
    <div>
      <SideList />
      <section className="main-wrap">
        <div
          className="content-main"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h2>User List</h2>
            <p>Manage Users here</p>
          </div>
          <div>
            <Link className="btn btn-primary" to={"/admin"}>
              Back
            </Link>
          </div>
        </div>

        <div class="card mb-4">
          <header class="card-header">
            <h4>User</h4>
            <div>
              <Link className="btn btn-success" to={"/admin/add-user"}>
                <FontAwesomeIcon icon={faPlus} /> Add Users
              </Link>
            </div>
          </header>
          <div class="card-body">
            {/* <ItemMapper /> */}
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#User ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Address</th>
                    <th scope="col">Image</th>
                    <th scope="col">Role</th>

                    <th scope="col" class="text-end">
                      {" "}
                      Action{" "}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
