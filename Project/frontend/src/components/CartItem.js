import "./CartItem.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCartContext } from "../context/useCartContext";

const CartItem = (props) => {
  const { dispatch, info } = useCartContext();

  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img
          src={props.details.itemImage}
          style={{ width: "100px", height: "100px" }}
          alt={props.details.itemName}
        />
      </div>

      <p>{props.details.itemName}</p>

      <p className="cartItem__price"> Rs. {props.details.itemPrice}</p>

      <p className="cartItem__price"> x{props.details.itemQuantity}</p>

      <button
        className="cartItem__deleteBtn"
        onClick={(e) => {
          dispatch({
            type: "RemoveFromCart",
            payload: props.details.itemID,
          });
        }}
      >
        <i>
          <FontAwesomeIcon icon={faTrash} />
        </i>
      </button>
    </div>
  );
};
export default CartItem;
