import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const { brandName } = useParams();

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");

  const routeBrand = brandName
    ? brandName.toLowerCase()
    : "";

  const brands = ["All", "Apple", "Samsung", "Oppo", "Vivo", "Xiaomi"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase());

    const matchesBrand =
      routeBrand
        ? product.brand.toLowerCase() === routeBrand
        : selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  return (
    <div className="products-page">
      <section className="products-header">
        <h1>
          {routeBrand
            ? `${routeBrand.charAt(0).toUpperCase() + routeBrand.slice(1)} Smartphones`
            : "Our Smartphones"}
        </h1>

        <p>Explore the latest smartphones at Nila Corner.</p>
      </section>

      <section className="products-controls">
        <input
          type="text"
          placeholder="Search smartphones..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {!routeBrand && (
          <div className="brand-filters">
            {brands.map((brand) => (
              <button
                key={brand}
                className={`brand-btn ${
                  selectedBrand === brand ? "active" : ""
                }`}
                onClick={() => setSelectedBrand(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">
            No smartphones found for this brand.
          </p>
        )}
      </section>
    </div>
  );
}

export default Products;