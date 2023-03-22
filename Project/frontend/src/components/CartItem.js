import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () =>{
    return (
        <div className="cartitem">
            <div className="cartitem_image">
                <img src="/#" />
            </div>

        <Link to={"/"} className="cartitem_name">
           <p>Product 01</p>
        </Link>

        <p className="cartitem_price"> $499.99</p>

        <select className="cartitem_select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button className="cartitem_delete">
            <i className="fa fa-trash"></i>
        </button>
        
        </div>

    );
};
export default CartItem;
