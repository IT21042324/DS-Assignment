// Import necessary dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDollarSign,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { UseUserContext } from "../context/useUserContext";
import { useBackendAPI } from "../context/useBackendAPI";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSellerOrderContext } from "../context/useSellerOrderContext";

function DashWrapper() {
  const { order, dispatch } = useSellerOrderContext();

  const [orders, setOrders] = useState([]);
  const { dashBoardDetails } = order;
  const { total, orderCount, itemCount } = dashBoardDetails;

  useEffect(() => {
    setOrders(order.orders);
  }, [order.orders]);

  // Access necessary functions and variables from custom hooks
  const { logoutUser } = UseUserContext();
  const { updateOrderAndPaymentStatus } = useBackendAPI();

  // Define a state variable to track merchant's login status
  const [mechantIsLoggedIn, setMerchantIsLoggedIn] = useState(true);

  // Use useEffect to logout user if merchantIsLoggedIn state changes
  useEffect(() => {
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
  const changeOrderStatus = async (e, orderID, status) => {
    e.preventDefault();

    const data = await updateOrderAndPaymentStatus(orderID, status);

    if (data) {
      alert(`Order status changed to ${status}`);

      dispatch({
        type: "DispatchOrder",
        payload: { _id: orderID },
      });
    }
  };

  //To display th status of the order
  function getOrderStatus(data) {
    if (data.status === "Confirmed") {
      return (
        <button
          name="Confirm Order"
          onClick={(e) => changeOrderStatus(e, data._id, "Dispatched")}
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "none",
            fontSize: "16px",
            fontFamily: "sans-serif",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "green",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
        >
          Dispatch Order
        </button>
      );
    } else if (data.status === "Pending") {
      return "Order awaiting Admin Approval";
    } else if (data.status === "Dispatched") {
      return "Order Dispatched";
    } else {
      return "Delivered";
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
                    {total ? (
                      <span> {total.toFixed(2)}</span>
                    ) : (
                      <span> 0.00</span>
                    )}
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
                    <span>{orderCount}</span>
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
                    <span>{itemCount}</span>
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
                      <th scope="col" className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((data) => {
                      return (
                        <tr key={data._id}>
                          <td scope="col">{data._id.slice(-4)}</td>
                          <td>{data.userID.slice(-4)}</td>
                          <td>{data.orderedDate.substring(0, 10)}</td>
                          <td>Rs. {data.totalAmount} </td>
                          <td>{data.status}</td>
                          <td className="text-center" style={{ color: "blue" }}>
                            {getOrderStatus(data)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
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
