import StarRating from "./StarRating";

export default function ReviewContainer(props) {
  return (
    <div>
      <div class="review">
        <div class="review-rating">
          <StarRating initialRating={props.review.rating} fixedRating={true} />
        </div>
        <div>
          <h6 class="review-name">{props.review.userName}</h6>
          <div class="review-content">{props.review.review}</div>
        </div>
      </div>
    </div>
  );
}
