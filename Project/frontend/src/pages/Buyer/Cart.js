// Import necessary modules and components
import React, { useState } from "react";
import { useCartContext } from "../../context/useCartContext";
import { UseUserContext } from "../../context/useUserContext";
import CartItem from "../../components/CartItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../Cart.css";
import { ShippingEstimate } from "../../components/ShippingService";

// Define a functional component named Cart
export default function Cart() {
  // Use the useUserContext and useCartContext hooks to access user and cart data
  const { user1 } = UseUserContext();
  const { info } = useCartContext();

  // Define a state variable to handle showing the shipping estimate popup
  const [showPopup, setShowPopup] = useState(false);

  // Define a function to handle closing the shipping estimate popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Use reduce to calculate the total checkout price of all items in the cart
  const checkoutPrice = info.reduce(
    (acc, item) => acc + item.itemPrice * item.itemQuantity,
    0
  );

  // Define a function to handle proceeding to checkout
  const proceedToCheckout = () => {
    if (info.length === 0) {
      alert("Please add items to cart");
      return;
    }
    console.log(info);

    if (user1[0] && checkoutPrice !== 0) {
      setShowPopup(true);
    }
  };

  // Render the Cart component
  return (
    <div>
      <Header />
      <center>
        <h2>Shopping Cart</h2>
      </center>
      <div className="cart">
        <div className="cart__left">
          {/* Map over each item in the cart and render a CartItem component */}
          {info.map((dat) => (
            <CartItem key={dat.itemID} details={dat} />
          ))}
        </div>{" "}
        <div className="cart__right">
          <div className="cart__info">
            <p>Subtotal items</p>
            <p>${checkoutPrice}</p>
          </div>
          {user1[0]?.role === "Buyer" && (
            <div>
              {/* Render a button to proceed to checkout */}
              <button onClick={proceedToCheckout}>Proceed To Checkout</button>
            </div>
          )}
        </div>
      </div>
      {/* Render a popup for the shipping estimate */}
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
            <ShippingEstimate details={{ checkoutPrice }} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
