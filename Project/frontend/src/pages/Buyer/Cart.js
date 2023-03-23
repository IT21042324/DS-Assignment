import "../Cart.css";
import CartItem from "../../components/CartItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from 'react';

export default function Cart() {
    return (
      <div>
      <Header />
      <center><h2>Shopping Cart</h2></center>
          <div className="cart">
            <div className="cart__left">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                
            </div>
    
            <div className="cart__right">
              <div className="cart__info">
                <p>Subtotal items</p>
                <p>$499</p>
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
