import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDollarSign,
  faTruck,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { UseUserContext } from "../context/useUserContext";
import { useBackendAPI } from "../context/useBackendAPI";
import { useEffect, useState } from "react";

function DashWrapper() {
  const { logoutUser, getUser } = UseUserContext();

  const { getTotalSalesAmount, getStoreItemCount } = useBackendAPI();
  const user = getUser();

  const [salesTotal, setSalesTotal] = useState(0);
  const [salesOrderCount, setOrderCount] = useState(0);
  const [storeItemCount, setStoreItemCount] = useState(0);

  useEffect(() => {
    async function getSalesData() {
      const { total, orderCount } = await getTotalSalesAmount(user.storeID);
      const itemCount = await getStoreItemCount();
      setSalesTotal(total);
      setOrderCount(orderCount);
      setStoreItemCount(itemCount);
    }
    getSalesData();
  }, []);

  //The function to logout
  const logoutFunction = () => {
    //To logout the user
    logoutUser();
  };

  return (
    <section className="main-wrap">
      <div
        className="content-main"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h2>Seller Corner</h2>
          <p>Whole data about your business here</p>
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

      <div class="row justify-content-center">
        <div class="col-lg-3">
          <div class="card card-body mb-4">
            <article class="icontext">
              <span class="icon icon-sm rounded-circle bg-primary-light">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              <div class="text">
                <h6 class="mb-1 card-title">Revenue</h6>
                <span>${salesTotal}</span>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-body mb-4">
            <article class="icontext">
              <span class="icon icon-sm rounded-circle bg-success-light">
                <FontAwesomeIcon icon={faTruck} />
              </span>
              <div class="text">
                <h6 class="mb-1 card-title">Orders</h6>{" "}
                <span>{salesOrderCount}</span>
              </div>
            </article>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-body mb-4">
            <article class="icontext">
              <span class="icon icon-sm rounded-circle bg-warning-light">
                <FontAwesomeIcon icon={faBox} />
              </span>
              <div class="text">
                <h6 class="mb-1 card-title">Products</h6>{" "}
                <span>{storeItemCount}</span>
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
                    Action
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

export default DashWrapper;
