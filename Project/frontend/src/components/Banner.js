import { Link } from "react-router-dom";
import React from "react";
import { UseUserContext } from "../context/useUserContext";

export function ActionBanner() {
  const { dispatch } = UseUserContext();

  return (
    <section id="action" className="section-m1">
      <h4>Seller Corner</h4>
      <h2>
        Join with us <span>Create your store in 3 steps</span>
      </h2>
      <h2>
        Create Seller Account {">>"} Upload Your Products {">>"} Start Selling
      </h2>
      <Link
        to="/register"
        onClick={(e) =>
          dispatch({
            type: "SetUserRole",
            userRole: "Merchant",
          })
        }
      >
        <button>Become a Seller</button>
      </Link>
    </section>
  );
}

export function HomeBanner() {
  return (
    <section id="HomeBanner">
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Pick Your Herbal Cure</p>

      <Link to="/buyer/product" style={{ textDecoration: "none" }}>
        <button>Shop Now</button>
      </Link>
    </section>
  );
}

export function MiniBanner() {
  return (
    <section id="mn-banner" className="section-p1">
      <div className="banner-box">
        <h2>Heading</h2>
        <h3>Sub Heading</h3>
      </div>
      <div className="banner-box banner-box2">
        <h2>Heading</h2>
        <h3>Sub Heading</h3>
      </div>
      <div className="banner-box banner-box3">
        <h2>Heading</h2>
        <h3>Sub Heading</h3>
      </div>
    </section>
  );
}

export function SmallBanner() {
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <h4>Heading</h4>
        <h2>Sub Heading</h2>
        <span>description</span>
        <button>Click here</button>
      </div>
      <div className="banner-box banner-box2">
        <h4>Heading</h4>
        <h2>Sub Heading</h2>
        <span>description</span>
        <button>Click here</button>
      </div>
    </section>
  );
}

export function PageHeader() {
  return (
    <section id="page-header">
      <h2>#stay healthy</h2>
    </section>
  )
}
