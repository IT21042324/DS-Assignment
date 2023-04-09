import { Link } from "react-router-dom";
import SideList from "../../components/SideList";

export default function AddUser() {
  return (
    <div>
      <SideList />
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

        <div class="card mb-4">
          <header class="card-header">
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
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Type here"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="col">
                  <label for="validationCustom01">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Type here"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="validationCustom01">Contact No</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Type here"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="col">
                  <label for="validationCustom01">Address</label>
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="0"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="col">
                  <label for="validationCustom01">Image</label>
                  <input
                    type="file"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="0.00"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label for="validationCustom01">Role</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="0.00"
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
