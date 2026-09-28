import { Link } from "react-router-dom";
import { Smartphone, Truck, ShieldCheck, Headphones } from "lucide-react";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Welcome to Nila Corner</span>

          <h1>
            Find Your
            <br />
            <span>Perfect Smartphone</span>
          </h1>

          <p>
            Explore the latest smartphones from Apple, Samsung, Oppo,
            Vivo, and Xiaomi at Nila Corner.
          </p>

          <Link to="/products" className="primary-btn">
            Explore Products
          </Link>
        </div>

        <div className="hero-icon">
          <Smartphone size={150} strokeWidth={1.2} />
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <Truck size={32} />
          <h3>Fast Delivery</h3>
          <p>Get your favorite smartphone delivered to your doorstep.</p>
        </div>

        <div className="feature-card">
          <ShieldCheck size={32} />
          <h3>Genuine Products</h3>
          <p>Shop with confidence and explore quality smartphones.</p>
        </div>

        <div className="feature-card">
          <Headphones size={32} />
          <h3>Customer Support</h3>
          <p>We're here to help you choose the right smartphone.</p>
        </div>
      </section>

      <section className="home-cta">
        <h2>Ready to Upgrade Your Phone?</h2>
        <p>Discover smartphones that match your needs and budget.</p>
        <Link to="/products" className="primary-btn">
          Shop Now
        </Link>
      </section>
    </div>
  );
}

export default Home;