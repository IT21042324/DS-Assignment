import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <section id="HomeBanner">
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & up to 60% off!</p>

      <Link to="/product" style={{ textDecoration: "none" }}>
        <button>Shop Now</button>
      </Link>
    </section>
  );
}

export default HomeBanner;
