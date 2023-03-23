import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";
import ReviewContainer from "./ReviewContainer";
// import classes from "../pages/Buyer/item.module.css";

export default function Item(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleViewItemClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (props.details.reviews.length > 0) {
      const averageRating =
        props.details.reviews.reduce((total, rev) => total + rev.rating, 0) /
        props.details.reviews.length;
      setRating(averageRating);
    }
  }, [props.details.reviews]);

  return (
    <section id="productCard" className="section-p1">
      <div className="pro-container">
        <div className="pro">
          <div>
            <img
              src={props.details.image}
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <h5>{props.details.itemName}</h5>
          <span>{props.details.storename}</span>
          <h4>Rs. {props.details.price}</h4>
          <span>{props.details.quantity} Available</span>
          <div>
            <button title="View Item" onClick={handleViewItemClick}>
              <FontAwesomeIcon icon={faExpand} />
            </button>
            <button title="Add To Cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
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
            <img src={props.details.image} alt={props.details.itemName} />
            <StarRating initialRating={rating} fixedRating={true} />
            <h4 style={{ color: "black" }}>{props.details.itemName}</h4>

            <h2 style={{ color: "black" }}>{props.details.storename}</h2>

            <button
              style={{
                margin: "0",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Add Item to Cart
            </button>

            <h3>Reviews</h3>
            {props.details.reviews.map((rev) => {
              return <ReviewContainer key={rev.userID} review={rev} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
}
