import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faTruck,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UseUserContext } from "../context/useUserContext";
import { useBackendAPI } from "../context/useBackendAPI";
import { useEffect, useState } from "react";

function Dashboard() {
  const { logoutUser } = UseUserContext();
  const { getUserCountForAdmin, deleteUser } = useBackendAPI();

  const [amount, setAmount] = useState();
  const [orderCount, setOrderCount] = useState();
  const [userCount, setUserCount] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const getAdminInfo = async () => {
      const { amountForStore, orderCount, userCount, users } =
        await getUserCountForAdmin();

      setAmount(amountForStore);
      setOrderCount(orderCount);
      setUserCount(userCount);
      setAllUsers(users);
    };

    getAdminInfo();
  }, []);

  //The function to logout
  const logoutFunction = () => {
    //To logout the user
    logoutUser();
  };

  const removeUser = async (event, userID, userName) => {
    event.preventDefault();

    const data = await deleteUser(userID);

    if (data) {
      setAllUsers((prev) => prev.filter((dat) => dat._id !== userID));
      alert(`${userName} deleted`);
    } else alert("Ooops.. There seems to be an error deleting the user");
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

      <div className="row justify-content-center">
        <div className="col-lg-3">
          <div className="card card-body mb-3">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-primary-light">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              <div className="text">
                <h6 className="mb-1 card-title">Revenue</h6>
                <span>{amount}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-body mb-3">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-success-dar">
                <FontAwesomeIcon icon={faTruck} />
              </span>
              <div className="text">
                <h6 className="mb-1 card-title">Orders</h6>{" "}
                <span>{orderCount}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-body mb-3">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-warning-light">
                <FontAwesomeIcon icon={faUserGroup} />
              </span>
              <div className="text">
                <h6 className="mb-2 card-title">Users</h6>{" "}
                <span>{userCount}</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <h4>Users</h4>
          <select
            onChange={(e) => setUserRole(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <option value="">--Please select a user role--</option>
            <option value="">All</option>
            <option value="Merchant">Merchant</option>
            <option value="Buyer">Consumer</option>
          </select>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#User ID</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Address</th>
                  <th scope="col" className="text-end">
                    Action
                  </th>
                </tr>
              </thead>
              {allUsers
                .filter((usr) => userRole === "" || usr.role === userRole)
                .map((usr) => {
                  return (
                    <tr key={usr._id}>
                      <td>{usr._id.slice(-4)}</td>
                      <td>{usr.userName}</td>
                      <td>{usr.role}</td>
                      <td>{usr.contact}</td>
                      <td>{usr.address}</td>
                      <td>
                        {" "}
                        <button
                          onClick={(e) => removeUser(e, usr._id, usr.userName)}
                          style={{
                            padding: "8px 12px",
                            borderRadius: "4px",
                            border: "none",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            cursor: "pointer",
                            backgroundColor: "#fff",
                            color: "#ff4d4f",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#f1f1f1")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#fff")
                          }
                        >
                          Remove User
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
