import "../Cart.css";
import CartItem from "../../components/CartItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { useState } from "react";
import { useCartContext } from "../../context/useCartContext";

export default function Cart() {
  const { info } = useCartContext();

  // calculate the checkout price using reduce()
  const checkoutPrice = info.reduce(
    (acc, item) => acc + item.itemPrice * item.itemQuantity,
    0
  );

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
            {/* display the calculated checkout price */}
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
