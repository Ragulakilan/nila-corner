import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Your Cart Is Empty</h1>
        <p>Explore our smartphones and add your favorites.</p>

        <Link to="/products" className="view-btn">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </p>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ₹{total.toLocaleString("en-IN")}</h2>
        <button
          className="view-btn"
          onClick={() => alert("Checkout feature coming soon!")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;