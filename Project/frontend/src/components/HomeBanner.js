import { Link } from "react-router-dom";
import React from "react";

function HomeBanner() {
  return (
    <section id="HomeBanner">
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Pick Your Herbal Cure</p>

      <Link to="/product" style={{ textDecoration: "none" }}>
        <button>Shop Now</button>
      </Link>
    </section>
  );
}

export default HomeBanner;
