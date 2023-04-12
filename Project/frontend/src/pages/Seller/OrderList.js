import { Link, Navigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { UseUserContext } from "../../context/useUserContext";
import { useBackendAPI } from "../../context/useBackendAPI";

export default function Orderlist() {
    // Access necessary functions and variables from custom hooks
    const { logoutUser, getUser} = UseUserContext();
    const { getAllItemsFromOneStore, updateOrderAndPaymentStatus } = useBackendAPI();

    // Get user information from the context
    const user = getUser();

    // Define state variables to store data
    const [storeDetails, setStoreDetails] = useState([]);

    // Define a state variable to track merchant's login status
    const [mechantIsLoggedIn, setMerchantIsLoggedIn] = useState(true);

    useEffect(() => {
        async function getSalesData() {
            const data = await getAllItemsFromOneStore(user.storeID);
            // Update state variables with fetched data
            setStoreDetails(data);
        }
        // Call the getSalesData function when user changes
        getSalesData();
    }, [user]);

    useEffect(() => {
        console.log(mechantIsLoggedIn);

        // Use useEffect to logout user if merchantIsLoggedIn state changes
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

    return (
    <div>
        <SideMenu />
        <section className="main-wrap">
            {/* If the merchant is logged in, display the dashboard */}
            {mechantIsLoggedIn ? (
                <>
                    <div
                        className="content-main"
                        style={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <div>
                        <h2>Order List</h2>
                        <p>Manage your orders here</p>
                        </div>
                        <div>
                            {/* <Link className="btn btn-primary" to={"/seller"}>
                                Back
                            </Link> */}
                            <input
                                type="Button"
                                className="btn btn-primary"
                                onClick={(e) => logoutFunction()}
                                value="Logout"
                            />
                        </div>
                    </div>

                    <div class="card mb-4">
                        <header class="card-header">
                        <h4>Orders</h4>
                        </header>
                        <div class="card-body">
                        <div class="table-responsive">
                            {" "}
                            <table class="table table-hover">
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
                                {storeDetails.map((data) => {
                                    return (
                                        <tr key={data._id}>
                                            <td scope="col">{data._id.slice(-4)}</td>
                                            <td>{data.userID.slice(-4)}</td>
                                            <td>{data.orderedDate.substring(0, 10)}</td>
                                            <td>{data.totalAmount}</td>
                                            <td>{data.status}</td>
                                            <td scope="col">
                                                {data.status === 'Pending' ? (
                                                    <button
                                                        style={{ border: "none", background: "none" }}
                                                        name="Confirm Order"
                                                        onClick={(e) => 
                                                            changeOrderStatus(data._id, "Confirmed")
                                                        }
                                                    >
                                                        <FontAwesomeIcon icon={faSquareCheck} />
                                                    </button>
                                                ) : (
                                                    "Order Approved"
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </>
            ) : (
                <Navigate to={"/"} />
            )}
        </section>
    </div>
    );
}
