import "./Cart.css";
import CartItem from "../components/CartItem";

export default function Cart() {
    return (
          <div className="cart">
            <div className="cart__left">
              <h2>Shopping Cart</h2>
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
      );
}
