import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>

        <h3>{product.name}</h3>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="view-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;