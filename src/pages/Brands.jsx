import { Link, Outlet } from "react-router-dom";

const brands = [
  "Apple",
  "Samsung",
  "Oppo",
  "Vivo",
  "Xiaomi",
];

function Brands() {
  return (
    <div className="brands-page">
      <section className="brands-header">
        <h1>Explore Our Brands</h1>
        <p>Choose your favorite smartphone brand.</p>
      </section>

      <div className="brands-list">
        {brands.map((brand) => (
          <Link
            key={brand}
            to={`/brands/${brand.toLowerCase()}`}
            className="brand-card"
          >
            <h2>{brand}</h2>
            <span>Explore Phones →</span>
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}

export default Brands;