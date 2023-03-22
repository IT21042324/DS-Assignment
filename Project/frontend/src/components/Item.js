import classes from "../pages/Buyer/home.module.css";

export default function Item(props) {
  return (
    <div className={classes.postDetails} style={{ textAlign: "center" }}>
      <p>
        <img
          src={props.details.image}
          alt={`${props.details.title} image`}
          style={{
            width: "200px",
            height: "200px",
          }}
        ></img>
      </p>
      <h4>{props.details.name}</h4>
      <p>{props.details.rating}</p>

      <p>{props.details.price}</p>
    </div>
  );
}
