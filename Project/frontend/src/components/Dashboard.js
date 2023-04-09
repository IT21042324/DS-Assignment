import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faTruck,
  faMoneyCheckDollar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UseUserContext } from "../context/useUserContext";
import "../Dashboard.css";

function Dashboard() {
  const { logoutUser } = UseUserContext();

  //The function to logout
  const logoutFunction = () => {
    //To logout the user
    logoutUser();
  };

  return (
    <section className="main-dashboard">
      <div
        className="content"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h2
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            ADMIN DASHBOARD
          </h2>
          <p
            style={{
              color: "white",
            }}
          >
            Whole data about your business here
          </p>
        </div>
        <div>
          <input
            type="Button"
            className="btn btn-primary"
            onClick={(e) => logoutFunction()}
            value="Logout"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3">
          <div class="card card-body mb-4">
            <article class="icontext">
              <span class="icon icon-sm rounded-circle bg-primary-light">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              <div class="text">
                <h6 class="mb-1 card-title">Revenue</h6>
                <span>$13,456.5</span>
                <span class="text-sm">Shipping fees are not included</span>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-body mb-4">
            <article class="icontext">
              <span class="icon icon-sm rounded-circle bg-success-dar">
                <FontAwesomeIcon icon={faTruck} />
              </span>
              <div class="text">
                <h6 class="mb-1 card-title">Orders</h6> <span>53.668</span>
                <span class="text-sm">Excluding orders in transit</span>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-body mb-4">
            <article class="icontext">
              <span class="icon icon-sm rounded-circle bg-warning-light">
                <FontAwesomeIcon icon={faUserGroup} />
              </span>
              <div class="text">
                <h6 class="mb-1 card-title">Users</h6> <span></span>
                <span class="text-sm">Have 5 members</span>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-body mb-4">
            <article class="icontext">
              <span class="icon icon-sm rounded-circle bg-info-light">
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
              </span>
              <div class="text">
                <h6 class="mb-1 card-title">Monthly Earning</h6>{" "}
                <span>$6,982</span>
                <span class="text-sm">Based in your local time.</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <header class="card-header">
          <h4>Latest Orders</h4>
        </header>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Payment Method</th>
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
  );
}

export default Dashboard;
