import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { faBox, faCheckCircle, faDashboard, faGears, faPenToSquare, faThumbsUp, faTruckFast, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../assets/f1.png";
import { useEffect, useRef, useState } from "react";
import { useBackendAPI } from "../../context/useBackendAPI";

export default function Buyer() {
    
    const { getAllStoreOrders, updateOrderAndPaymentStatus } = useBackendAPI();

    // Define state variables to store data
    const [allOrder, setAllOrders] = useState([]);

    const isMounted = useRef(false);

    const [showPopup, setShowPopup] = useState(false);

    const handleViewItemClick = () => {
        setShowPopup(true);
    };
    
    const handleClosePopup = () => {
        setShowPopup(false);
    };

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

    return(
        <div>
            <section className="sideMenu">
                <div className="logo">
                <Link
                    to="/buyer"
                    style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: 50,
                    paddingTop: 20,
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                    RB&NS
                </Link>
                </div>
                <div className="items">
                <SideMenu to="/buyer" icon={faDashboard} label="Dashboard" />
                <SideMenu to="/buyer/profile" icon={faUser} label="Profile" />
                <SideMenu to="/buyer/product" icon={faBox} label="Products" />
                </div>
            </section>
            <section className="main-wrap">
                <div
                className="content-main"
                style={{ display: "flex", justifyContent: "space-between" }}
                >
                <div>
                    <h2>Account</h2>
                    <p>Manage your account here</p>
                </div>
                <div>
                    <Link className="btn btn-primary" to={"/"}>
                    Back
                    </Link>
                </div>
                </div>

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
                                <img src={pic} className="center-xy img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-xl col-lg">
                                <h3>Buyer Name</h3>
                                <p>buyer@gmail.com</p>
                            </div>
                            <div className="col-xl-4 text-md-end">
                                <Link className="btn btn-success" to={"/buyer/profile"}>
                                <FontAwesomeIcon icon={faPenToSquare} /> Edit Account
                                </Link>
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
                                                <th scope="col" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                                        <td>
                                                            <button className="btn btn-warning" onClick={handleViewItemClick}>Track Order</button>
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
                                                <div class="order-tracking mb-100">
                                                    <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between">
                                                        <div class="step completed">
                                                            <div class="step-icon-wrap">
                                                                <div class="step-icon"><FontAwesomeIcon icon={faGears} /></div>
                                                            </div>
                                                            <h4 class="step-title">Processing Order</h4>
                                                            <small class="text-muted text-sm">15 March 2022</small>
                                                        </div>
                                                        <div class="step completed">
                                                            <div class="step-icon-wrap">
                                                                <div class="step-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                                            </div>
                                                            <h4 class="step-title">Confirmed Order</h4>
                                                            <small class="text-muted text-sm">16 March 2022</small>
                                                        </div>
                                                        <div class="step">
                                                            <div class="step-icon-wrap">
                                                                <div class="step-icon"><FontAwesomeIcon icon={faTruckFast} /></div>
                                                            </div>
                                                            <h4 class="step-title">Product Dispatched</h4>
                                                            <small class="text-muted text-sm">18 March 2022</small>
                                                        </div>
                                                        <div class="step">
                                                            <div class="step-icon-wrap">
                                                                <div class="step-icon"><FontAwesomeIcon icon={faThumbsUp} /></div>
                                                            </div>
                                                            <h4 class="step-title">Product Delivered</h4>
                                                            <small class="text-muted text-sm">20 March 2022</small>
                                                        </div>
                                                    </div>
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