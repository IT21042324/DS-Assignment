import { Link } from "react-router-dom";
import SideList from "../../components/SideList";
import { useState, useEffect, useRef } from "react";
import { useBackendAPI } from "../../context/useBackendAPI";

export default function Orderlist() {
  const { getAllStoreOrders, updateOrderAndPaymentStatus } = useBackendAPI();

  // Define state variables to store data
  const [allOrder, setAllOrders] = useState([]);

  const isMounted = useRef(false);

  // Use useEffect to get sales data and store item count when user changes
  useEffect(() => {
    async function getData() {
      const data = await getAllStoreOrders();

      // Update state variable with fetched data
      setAllOrders(data);
    }

    if (!isMounted.current) {
      getData();
      isMounted.current = true;
    }
  }, []);

  //To change the status of the order
  const changeOrderStatus = async (orderID, status) => {
    await updateOrderAndPaymentStatus(orderID, status);

    setAllOrders((prev) =>
      prev.map((dat) => {
        if (dat._id === orderID) {
          return { ...dat, status: "Confirmed" };
        } else {
          return dat;
        }
      })
    );
  };

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

        <div className="card mb-4">
          <header className="card-header">
            <h4>Orders</h4>
          </header>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-hover"
                style={{ borderSpacing: "0 50px" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Payment ID</th>
                    <th scope="col">Store ID</th>
                    <th scope="col">Address</th>
                    <th scope="col">Item List</th>
                    <th scope="col">Order Status</th>
                    <th scope="col" className="text-end">
                      Action
                    </th>
                  </tr>
                </thead>
                {allOrder.map((data) => {
                  return (
                    <tr key={data._id} style={{ height: "50px" }}>
                      <td scope="col">{data._id.slice(-4)}</td>
                      <td>{data.paymentID.slice(-4)}</td>
                      <td>{data.storeID.slice(-4)}</td>
                      <td>{data.address}</td>
                      <td>
                        {data.itemList.map((itm) => itm.itemName).join(", ")}
                      </td>
                      <td>{data.status}</td>
                      <td scope="col">
                        {data.status === "Pending" ? (
                          <button
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
                              transition: "all 0.2s ease-in-out",
                            }}
                            name="Confirm Order"
                            onClick={(e) =>
                              changeOrderStatus(data._id, "Confirmed")
                            }
                            onMouseEnter={(e) =>
                              (e.target.style.backgroundColor = "#f1f1f1")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.backgroundColor = "#fff")
                            }
                          >
                            Confirm Order
                          </button>
                        ) : (
                          "Order Approved"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
