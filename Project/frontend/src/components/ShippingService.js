import React, { useState } from "react";
import classes from "./ShippingEstimate.module.css";
import { PayPalCheckoutButton } from "./PayPalCheckoutButton";

export function ShippingEstimate(props) {
  const [total, setTotal] = useState(parseInt(props.details.checkoutPrice));
  const [dhlPrice, setDhlPrice] = useState(
    (props.details.checkoutPrice * 40) / 100
  );

  function calculatePrice(val) {
    if (val === "0") {
      setTotal(parseInt(props.details.checkoutPrice));
    } else {
      setDhlPrice(parseInt(val));
      setTotal(parseInt(val) + parseInt(props.details.checkoutPrice));
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.destination}>
        <span>Destination: Sri Lanka</span>
      </div>

      <div className={classes.carrier}>
        <div>
          <input
            type="radio"
            name="service"
            value="0"
            onClick={(e) => calculatePrice(e.target.value)}
            defaultChecked
          />
          &nbsp;&nbsp;
          <span>Free Shipping</span>
        </div>
      </div>

      <div className={classes.carrier}>
        <div>
          <input
            type="radio"
            name="service"
            value={dhlPrice}
            onClick={(e) => calculatePrice(e.target.value)}
          />
          &nbsp;&nbsp;
          <span>DHL Express (Faster Delivery)</span>
        </div>

        <div style={{ marginLeft: "200px" }}>
          <span>Rs. {dhlPrice}</span>
        </div>
      </div>

      <div className={classes.carrier} style={{ color: "green" }}>
        <div>
          <span>Service Charge (included) : {(total * 15) / 100}</span>
        </div>

        <div style={{ marginLeft: "200px", color: "green" }}>
          <span>Rs. {total}</span>
        </div>
      </div>

      <div className={classes.carrier} style={{ color: "green" }}>
        <div>
          <span>Total Price : </span>
        </div>

        <div style={{ marginLeft: "200px", color: "green" }}>
          <span>Rs. {total}</span>
        </div>
      </div>

      <div className={classes.disclaimer}>
        <PayPalCheckoutButton product={{ description: "Nice", price: total }} />
      </div>
    </div>
  );
}
