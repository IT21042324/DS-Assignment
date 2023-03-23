import { Link } from "react-router-dom";
import React from 'react';

function ActionBanner() {
  return (
    <section id="action" className="section-m1">
      <h4>Seller Corner</h4>
      <h2>
        Join with us <span>Create your store in 3 steps</span>
      </h2>
      <h2>
        1. Create Seller Account {">>"} 2. Upload Your Products {">>"} 3. Start Selling
      </h2>
      <Link to="/product">
        <button>Become a Seller</button>
      </Link>
    </section>
  );
}

export default ActionBanner;
