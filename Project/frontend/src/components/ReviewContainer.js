import StarRating from "./StarRating";

export default function ReviewContainer(props) {
  return (
    <div>
      <div className="review">
        <div className="review-rating">
          <StarRating initialRating={props.review.rating} fixedRating={true} />
        </div>
        <div>
          <h6 className="review-name">{props.review.userName}</h6>
          <div className="review-content">{props.review.review}</div>
        </div>
      </div>
    </div>
  );
}
