import {
  faCheckCircle,
  faGears,
  faThumbsUp,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../assets/f1.png";
import { useState } from "react";
import { useBackendAPI } from "../../context/useBackendAPI";
import { UseUserContext } from "../../context/useUserContext";
import Header from "../../components/Header";

export default function Buyer() {
  const { updateOrderAndPaymentStatus } = useBackendAPI();
  const { orders, user1, dispatch } = UseUserContext();

  const [statusValue, setStatusValue] = useState(0);
  const [selectedOrderId, setSelectedOrderId] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const handleViewItemClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const confirmOrderReceived = async (e, status) => {
    e.preventDefault();

    const updatedOrder = await updateOrderAndPaymentStatus(
      selectedOrderId,
      status
    );

    if (updatedOrder) {
      setStatusValue(3);
      alert("Order delivery confirmed");

      dispatch({
        type: "ConfirmDelivery",
        payload: { _id: selectedOrderId },
      });
    }
  };

  return (
    <div>
      <Header />
      <section>
        <div className="card mb-4">
          <div className="card-header bg-primary" style={{ height: 150 }}></div>
          <div className="card-body">
            <div className="row">
              <div
                className="col-xl col-lg flex-grow-0"
                style={{ flexBasis: 230 }}
              >
                <div
                  className="img-thumbnail shadow w-100 bg-white position-relative text-center"
                  style={{ height: 190, width: 200, marginTop: -120 }}
                >
                  {!user1[0] ? (
                    <img src={pic} className="center-xy img-fluid" alt="" />
                  ) : (
                    <img
                      src={user1[0].image}
                      className="center-xy img-fluid"
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="col-xl col-lg">
                <h3>User </h3>
                <p>{user1[0]?.userName}</p>
              </div>
            </div>
            <div className="card mb-4">
              <header className="card-header">
                <h4>My Orders</h4>
              </header>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Payment ID</th>
                        <th scope="col">Store ID</th>
                        <th scope="col">Address</th>
                        <th scope="col">Item List</th>
                        <th scope="col">Order Status</th>
                        <th scope="col" className="text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((data) => {
                        return (
                          <tr key={data._id} style={{ height: "50px" }}>
                            <td scope="col">{data._id.slice(-4)}</td>
                            <td>{data.paymentID.slice(-4)}</td>
                            <td>{data.storeID.slice(-4)}</td>
                            <td>{data.address}</td>
                            <td>
                              {data.itemList
                                .map((itm) => itm.itemName)
                                .join(", ")}
                            </td>
                            <td>{data.status}</td>
                            <td>
                              <button
                                className="btn btn-warning"
                                onClick={(e) => {
                                  if (data.status === "Delivered")
                                    setStatusValue(3);
                                  else {
                                    setStatusValue(data.statusValue);
                                  }

                                  setSelectedOrderId(data._id);
                                  handleViewItemClick();
                                }}
                              >
                                Track Order
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              {showPopup && (
                <div
                  className="popup"
                  style={{ display: showPopup ? "flex" : "none" }}
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      handleClosePopup();
                    }
                  }}
                >
                  <div className="popup-content">
                    <div className="card mb-4">
                      <header className="card-header">
                        <h4>Order Tracking</h4>
                      </header>
                      <div className="card-body">
                        <div className="order-tracking mb-100">
                          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between">
                            <div className="step completed">
                              <div className="step-icon-wrap">
                                <div className="step-icon">
                                  <FontAwesomeIcon icon={faGears} />
                                </div>
                              </div>
                              <h4 className="step-title">Processing Order</h4>
                            </div>
                            <div
                              className={`step ${
                                statusValue > 0 ? "completed" : ""
                              }`}
                            >
                              <div className="step-icon-wrap">
                                <div className="step-icon">
                                  <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                              </div>
                              <h4 className="step-title">Confirmed Order</h4>
                            </div>
                            <div
                              className={`step ${
                                statusValue > 1 ? "completed" : ""
                              }`}
                            >
                              <div className="step-icon-wrap">
                                <div className="step-icon">
                                  <FontAwesomeIcon icon={faTruckFast} />
                                </div>
                              </div>
                              <h4 className="step-title">Order Dispatched</h4>
                            </div>{" "}
                            <div
                              className={`step ${
                                statusValue > 2 ? "completed" : ""
                              }`}
                            >
                              <div className="step-icon-wrap">
                                <div className="step-icon">
                                  <FontAwesomeIcon icon={faThumbsUp} />
                                </div>
                              </div>
                              <h4 className="step-title">Order Delivered</h4>
                            </div>
                          </div>
                          {statusValue === 2 && (
                            <button
                              className="btn btn-success"
                              style={{ float: "right" }}
                              onClick={(e) => {
                                confirmOrderReceived(e, "Delivered");
                              }}
                            >
                              Confirm Order Received
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
