import { Link } from "react-router-dom";
import "./CartItem.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import item from "../assets/iherb.jpg";

const CartItem = () =>{
    return (
        <div className="cartItem">
            <div className="cartItem__image">
                <img src="/" alt="" />
            </div>

        <Link to={"/"} className="cartItem__name">
           <p>Product 01</p>
        </Link>

        <p className="cartItem__price"> $499.99</p>

        <select className="cartItem__select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button className="cartItem__deleteBtn">
            <i><FontAwesomeIcon icon={faTrash} /></i>
        </button>
        
        </div>

    );
};
export default CartItem;
