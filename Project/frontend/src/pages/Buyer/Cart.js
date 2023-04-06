import React, { useState } from "react";
import { useCartContext } from "../../context/useCartContext";
import { UseUserContext } from "../../context/useUserContext";
import CartItem from "../../components/CartItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../Cart.css";
import { ShippingEstimate } from "../../components/ShippingService";

export default function Cart() {
  const { user1 } = UseUserContext();
  const { info } = useCartContext();
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // calculate the checkout price using reduce()
  const checkoutPrice = info.reduce(
    (acc, item) => acc + item.itemPrice * item.itemQuantity,
    
  );

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

  return (
    <div>
      <Header />
      <center>
        <h2>Shopping Cart</h2>
      </center>
      <div className="cart">
        <div className="cart__left">
          {info.map((dat) => (
            <CartItem key={dat.itemID} details={dat} />
          ))}
        </div>

        <div className="cart__right">
          <div className="cart__info">
            <p>Subtotal items</p>
            <p>${checkoutPrice}</p>
          </div>
          <div>
            <button onClick={proceedToCheckout}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
      {/* Popup form for payment */}
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
