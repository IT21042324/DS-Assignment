import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

export default function Item(props) {
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <div>
          <img
            src={props.details.image}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <h4>{props.details.itemName}</h4>
        <h2>{props.details.storename}</h2>
        <span>Rs. {props.details.price}</span>
        <span>{props.details.quantity} Available</span>
        {/* <button style={{ marginBottom: "18px" }}>View Item</button> */}
        <div style={{ display: "flex" }}>
          <button title="View Item">
            <FontAwesomeIcon icon={faExpand} style={{ color: "#ffffff" }} />
          </button>

          <button title="Add To Cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />{" "}
          </button>
        </div>
        {/* <button>Add To Cart</button> */}
      </div>
    </section>
  );
}
