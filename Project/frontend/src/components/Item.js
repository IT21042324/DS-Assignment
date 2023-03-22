import image from "../assets/hero4.png";

export default function Item(props) {
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
        <button>Add To Cart</button>
      </div>
    </section>
  );
}
