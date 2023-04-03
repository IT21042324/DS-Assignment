import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";
import ReviewContainer from "./ReviewContainer";
import { useCartContext } from "../context/useCartContext";

export default function Item(props) {
  //importing cartContext,dispath and info from the cartContext
  const { dispatch, info } = useCartContext();

  const [selectedItem, setSelectedItem] = useState(0);

  //to print details everytime the info is changed.. later remove it
  useEffect(() => {
    console.log(info);
  }, [info]);

  function addItemToCart(data) {
    if (selectedItem + 1 > props.details.quantity) {
      alert("There are no more available items");
    } else {
      setSelectedItem((prev) => prev + 1);
      dispatch({ type: "UpdateCart", payload: data });
      alert("Item Added To Cart");
    }
  }

  const [showPopup, setShowPopup] = useState(false);

  const handleViewItemClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [rating, setRating] = useState(0);

  //To get the avg rating of each product based on all the customers rating
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
            <button
              title="Add To Cart"
              onClick={(e) => {
                addItemToCart({
                  itemID: props.details._id,
                  itemName: props.details.itemName,
                  itemPrice: props.details.price,
                  itemQuantity: selectedItem + 1,
                  itemImage: props.details.image,
                });
              }}
            >
              {selectedItem}
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
      {/* For the popup form */}
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
