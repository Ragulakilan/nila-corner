import { Smartphone, ShieldCheck, Headphones, Truck } from "lucide-react";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Nila Corner</h1>
        <p>Your trusted destination for smartphones and accessories.</p>
      </section>

      <section className="about-content">
        <div className="about-icon">
          <Smartphone size={70} />
        </div>

        <div>
          <h2>Who We Are</h2>
          <p>
            Nila Corner is a mobile shop offering smartphones from
            leading brands like Apple, Samsung, Oppo, Vivo, and Xiaomi.
            Our goal is to help customers find phones that suit their
            needs and budget.
          </p>
        </div>
      </section>

      <section className="about-features">
        <div className="about-feature-card">
          <ShieldCheck size={35} />
          <h3>Quality Products</h3>
          <p>Explore smartphones from popular brands.</p>
        </div>

        <div className="about-feature-card">
          <Truck size={35} />
          <h3>Reliable Service</h3>
          <p>We aim to make your shopping experience simple.</p>
        </div>

        <div className="about-feature-card">
          <Headphones size={35} />
          <h3>Customer Support</h3>
          <p>Get help choosing the right device.</p>
        </div>
      </section>
    </div>
  );
}

export default About;