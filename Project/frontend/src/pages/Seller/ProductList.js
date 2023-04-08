// Import necessary modules and components
import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { UseStoreContext } from "../../context/useStoreContext";
import { useBackendAPI } from "../../context/useBackendAPI";

// Define a function component ProductList
export default function ProductList() {
  const { removeItem } = useBackendAPI();

  // Get the items from the StoreContext
  const { items } = UseStoreContext();

  //To delete an item
  const deleteItem = async (id) => {
    await removeItem(id);
  };

  // Return the JSX code for the ProductList component
  return (
    <div>
      {/* Render the SideMenu component */}
      <SideMenu />{" "}
      <section className="main-wrap">
        <div
          className="content-main"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            {/* // Add heading and description */}
            <h2>Product List</h2>
            <p>Manage your products here</p>
          </div>
          <div>
            {/* // Add a button to navigate back to seller page */}
            <Link className="btn btn-primary" to={"/seller"}>
              Back
            </Link>
          </div>
        </div>

        <div className="card mb-4">
          <header className="card-header">
            {/* // Add heading and a button to add a new product */}
            <h4>Product</h4>
            <div>
              <Link className="btn btn-success" to={"/seller/add-product"}>
                <FontAwesomeIcon icon={faPlus} /> Add Products
              </Link>
            </div>
          </header>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  {/* // Add table header rows */}
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Discounted Price</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* // Map through the items array and display each item in a table row*/}
                  {items.map((dat) => {
                    return (
                      <tr key={dat._id}>
                        <td>1</td>
                        <td>
                          <img
                            src={dat.image}
                            style={{ width: "60px", height: "50px" }}
                            alt={dat.itemName}
                          />
                        </td>
                        <td>{dat.itemName}</td>
                        <td>{dat.quantity}</td>
                        <td>{dat.price}</td>
                        <td>{dat.totalPrice}</td>
                        <td className="text-end">
                          <button
                            style={{ border: "none", background: "none" }}
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                          &nbsp; &nbsp; &nbsp; &nbsp;
                          <button
                            style={{ border: "none", background: "none" }}
                            onClick={(e) => deleteItem(dat._id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
