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
import { useRef, useState } from "react";

// Define a function component ProductList
export default function ProductList() {
  // Define a state variable to handle showing the shipping estimate popup
  const [showPopup, setShowPopup] = useState(false);
  const [itemID, setItemID] = useState("");

  //Declaring all varibale with ref
  const itemName = useRef(),
    description = useRef(),
    price = useRef(),
    quantity = useRef(),
    discount = useRef();

  const { removeItem, updateItem } = useBackendAPI();

  // Define a function to handle closing the shipping estimate popup
  const handleClosePopup = (id) => {
    setShowPopup(false);
  };

  // Define a function to open popup form
  const handleEditButtonClick = (itemID) => {
    setItemID(itemID);
    setShowPopup(true);
  };

  //To handle update when the popup form submit is cliked
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await updateItem({
      itemID,
      itemName: itemName.current.value,
      description: description.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
      discount: discount.current.value,
    });

    setShowPopup(false);
  };

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
                    <th className="text-center">Action</th>
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
                        <td className="text-center">
                          <button
                            style={{ border: "none", background: "none" }}
                            onClick={(e) => handleEditButtonClick(dat._id)}
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
                  <form onSubmit={(e) => onSubmitHandler(e)}>
                    <header className="card-header">
                      <h4>Product</h4>
                      <div>
                        <input
                          className="btn btn-success"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </header>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label for="validationCustom01">Product title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Type here"
                            ref={itemName}
                            required
                          />
                        </div>
                        <div className="col">
                          <label for="validationCustom01">
                            Product description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Type here"
                            ref={description}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label for="validationCustom01">Quantity</label>
                          <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="0"
                            ref={quantity}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label for="validationCustom01">Unit Price</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="0.00"
                            ref={price}
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label for="validationCustom01">Discount</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="0.00"
                            ref={discount}
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
