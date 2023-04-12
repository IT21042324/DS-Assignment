// Import necessary dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDollarSign,
  faTruck,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { UseUserContext } from "../context/useUserContext";
import { useBackendAPI } from "../context/useBackendAPI";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function DashWrapper() {
  // Access necessary functions and variables from custom hooks
  const { logoutUser, getUser } = UseUserContext();
  const {
    getTotalSalesAmount,
    getStoreItemCount,
    getAllItemsFromOneStore,
    updateOrderAndPaymentStatus,
  } = useBackendAPI();

  // Get user information from the context
  const user = getUser();

  // Define state variables to store data
  const [salesTotal, setSalesTotal] = useState(0);
  const [salesOrderCount, setOrderCount] = useState(0);
  const [storeItemCount, setStoreItemCount] = useState(0);
  const [storeDetails, setStoreDetails] = useState([]);

  // Define a state variable to track merchant's login status
  const [mechantIsLoggedIn, setMerchantIsLoggedIn] = useState(true);

  // Use useEffect to get sales data and store item count when user changes
  useEffect(() => {
    async function getSalesData() {
      // Get total sales amount and order count
      const { total, orderCount } = await getTotalSalesAmount(user.storeID);

      // Get store item count
      const itemCount = await getStoreItemCount(user.storeID);

      const data = await getAllItemsFromOneStore(user.storeID);

      // Update state variables with fetched data
      setSalesTotal(total);
      setOrderCount(orderCount);
      setStoreItemCount(itemCount);
      setStoreDetails(data);
    }

    // Call the getSalesData function when user changes
    getSalesData();
  }, [user]);

  // Use useEffect to logout user if merchantIsLoggedIn state changes
  useEffect(() => {
    console.log(mechantIsLoggedIn);

    if (!mechantIsLoggedIn) {
      // Call the logoutUser function from the context
      logoutUser();
    }
  }, [mechantIsLoggedIn]);

  // Define a function to logout the user
  const logoutFunction = () => {
    // Set merchantIsLoggedIn state to false
    setMerchantIsLoggedIn(false);

    // Show an alert to confirm the logout
    alert("Logged Out");
  };

  //To change the status of the order
  const changeOrderStatus = async (orderID, status) => {
    await updateOrderAndPaymentStatus(orderID, status);
  };

  //To display th status of the order
  function getOrderStatus(data) {
    if (data.status === "Confirmed") {
      return (
        <button
          style={{ border: "none", background: "none" }}
          name="Confirm Order"
          onClick={(e) => changeOrderStatus(data._id, "Dispatched")}
        >
          <FontAwesomeIcon icon={faSquareCheck} />
        </button>
      );
    } else if (data.status === "Pending") {
      return "Order awaiting Admin Approval";
    } else if (data.status === "Dispatched") {
      return "Order Approved for dispatch";
    } else {
      return "Delivery Confirmed";
    }
  }

  return (
    <section className="main-wrap">
      {/* If the merchant is logged in, display the dashboard */}
      {mechantIsLoggedIn ? (
        <>
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
                    <h6 className="mb-1 card-title">Orders</h6>
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
                      <th scope="col">Customer ID</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Order Status</th>
                      <th scope="col" className="text-end">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {storeDetails.map((data) => {
                    return (
                      <tr key={data._id}>
                        <td scope="col">{data._id.slice(-4)}</td>
                        <td>{data.userID.slice(-4)}</td>
                        <td>{data.orderedDate.substring(0, 10)}</td>
                        <td>{data.totalAmount}</td>
                        <td>{data.status}</td>
                        <td>{getOrderStatus(data)}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </section>
  );
}

export default DashWrapper;
