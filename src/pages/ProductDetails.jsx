import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="details-page">
        <h2>Product not found</h2>
        <Link to="/products" className="view-btn">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="details-page">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-card">
        <div className="details-image-box">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <span className="product-brand">{product.brand}</span>

          <h1>{product.name}</h1>

          <h2 className="details-price">
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <p>{product.description}</p>

          <button className="view-btn add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          {added && (
            <p className="success-message">
              ✓ Added to cart successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;