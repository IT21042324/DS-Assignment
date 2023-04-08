import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useBackendAPI } from "../../context/useBackendAPI";
import { useEffect, useState } from "react";
import { UseStoreContext } from "../../context/useStoreContext";

export default function ProductList() {
  const { items } = UseStoreContext();

  return (
    <div>
      <SideMenu />
      <section className="main-wrap">
        <div
          className="content-main"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h2>Product List</h2>
            <p>Manage your products here</p>
          </div>
          <div>
            <Link className="btn btn-primary" to={"/seller"}>
              Back
            </Link>
          </div>
        </div>

        <div class="card mb-4">
          <header class="card-header">
            <h4>Product</h4>
            <div>
              <Link className="btn btn-success" to={"/seller/add-product"}>
                <FontAwesomeIcon icon={faPlus} /> Add Products
              </Link>
            </div>
          </header>
          <div class="card-body">
            {/* <ItemMapper /> */}
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Discounted Price</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
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
                        <td>{dat.totalPrice}</td>
                        <td>{dat.discount}</td>
                        <td class="text-end">Action</td>
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
