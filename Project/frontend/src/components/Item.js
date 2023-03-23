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
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <div>
          <img
            src={props.details.image}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <h4>{props.details.itemName}</h4>
        <h2>{props.details.storename}</h2>
        <span>Rs. {props.details.price}</span>
        <span>{props.details.quantity} Available</span>
        <div style={{ display: "flex" }}>
          <button title="View Item" onClick={handleViewItemClick}>
            <FontAwesomeIcon icon={faExpand} style={{ color: "#ffffff" }} />
          </button>

          <button title="Add To Cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
          </button>
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
                marginBottom: "10px",
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
