import { Link } from "react-router-dom";
import SideList from "../../components/SideList";
// import { ItemMapper } from "../Buyer/ItemMapper";

export default function Orderlist() {
  return (
    <div>
      <SideList />
      <section className="main-wrap">
        <div
          className="content-main"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h2>Order List</h2>
            <p>Manage Orders here</p>
          </div>
          <div>
            <Link className="btn btn-primary" to={"/admin"}>
              Back
            </Link>
          </div>
        </div>

        <div class="card mb-4">
          <header class="card-header">
            <h4>Orders</h4>
          </header>
          <div class="card-body">
            {/* <ItemMapper /> */}
            <div class="table-responsive">
              {" "}
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#User ID</th>
                    <th scope="col">Payment ID</th>
                    <th scope="col">Address</th>
                    <th scope="col">Store ID</th>
                    <th scope="col">Item List</th>
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
