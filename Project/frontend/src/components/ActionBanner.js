import { Link } from "react-router-dom";

function ActionBanner() {
  return (
    <section id="action" className="section-m1">
      <h4>Title</h4>
      <h2>
        Up to <span>70% Off</span> - All t-Shirts & Accessories
      </h2>
      <Link to="/products">
        <button>Explore More</button>
      </Link>
    </section>
  );
}

export default ActionBanner;
