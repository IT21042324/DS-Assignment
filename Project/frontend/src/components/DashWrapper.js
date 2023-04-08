import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDollarSign,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { UseUserContext } from "../context/useUserContext";
import { useBackendAPI } from "../context/useBackendAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashWrapper() {
  const { logoutUser, getUser } = UseUserContext();
  const navigate = useNavigate();

  const { getTotalSalesAmount, getStoreItemCount } = useBackendAPI();
  const user = getUser();

  const [salesTotal, setSalesTotal] = useState(0);
  const [salesOrderCount, setOrderCount] = useState(0);
  const [storeItemCount, setStoreItemCount] = useState(0);

  useEffect(() => {
    async function getSalesData() {
      const { total, orderCount } = await getTotalSalesAmount(user.storeID);
      const itemCount = await getStoreItemCount(user.storeID);
      setSalesTotal(total);
      setOrderCount(orderCount);
      setStoreItemCount(itemCount);
    }
    getSalesData();
  }, [user]);

  //The function to logout
  const logoutFunction = () => {
    //To logout the user
    const result = logoutUser();

    if (result) {
      navigate("/");
      alert("Logged Out");
    }
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

      <div className="row justify-content-center">
        <div className="col-lg-3">
          <div className="card card-body mb-4">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-primary-light">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              <div className="text">
                <h6 className="mb-1 card-title">Revenue</h6>
                <span>${salesTotal}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-body mb-4">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-success-light">
                <FontAwesomeIcon icon={faTruck} />
              </span>
              <div className="text">
                <h6 className="mb-1 card-title">Orders</h6>{" "}
                <span>{salesOrderCount}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-body mb-4">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-warning-light">
                <FontAwesomeIcon icon={faBox} />
              </span>
              <div className="text">
                <h6 className="mb-1 card-title">Products</h6>{" "}
                <span>{storeItemCount}</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <h4>Latest Orders</h4>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col" className="text-end">
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
