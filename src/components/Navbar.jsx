import { Link } from "react-router-dom";
import { ShoppingCart, Smartphone } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Smartphone size={28} />
        <span>Nila Corner</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/cart" className="cart-link">
        <ShoppingCart size={22} />
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;