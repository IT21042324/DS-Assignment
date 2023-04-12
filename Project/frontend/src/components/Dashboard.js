import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faTruck,
  faMoneyCheckDollar,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UseUserContext } from "../context/useUserContext";

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
              color: "Black",
              fontWeight: "bold",
            }}
          >
            ADMIN DASHBOARD
          </h2>
          <p
            style={{
              color: "black",
            }}
          >
            Whole data about site here
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
                <h6 class="mb-2 card-title">Users</h6> <span>4</span>
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
          <h4>Users</h4>
        </header>
        <div class="card-body">
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
  );
}

export default Dashboard;
