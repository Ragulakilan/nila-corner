import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./ProductPagination.css";

const ProductPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const currentPage = Math.max(
    1,
    Number(searchParams.get("page")) || 1
  );

  const productsPerPage = 5;

  // Search products
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Calculate pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  const safePage = Math.min(currentPage, totalPages);

  // Get products for current page
  const startIndex = (safePage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Update search
  const handleSearch = (e) => {
    setSearchParams({
      ...(e.target.value ? { search: e.target.value } : {}),
    });
  };

  // Update page
  const handlePageChange = (page) => {
    setSearchParams({
      ...(search ? { search } : {}),
      page: String(page),
    });
  };

  return (
    <section className="pagination-page">
      <div className="pagination-header">
        <h1>Explore Our Mobiles</h1>
        <p>Search and browse mobile phones from different brands.</p>
      </div>

      <div className="pagination-search">
        <input
          type="search"
          placeholder="Search mobile name..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="pagination-info">
        <p>
          Showing {currentProducts.length} of {filteredProducts.length} products
        </p>
        <span>
          Page {safePage} of {totalPages}
        </span>
      </div>

      <div className="pagination-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="pagination-empty">No products found.</p>
        )}
      </div>

      {filteredProducts.length > 0 && (
        <div className="pagination-controls">
          <button
            disabled={safePage === 1}
            onClick={() => handlePageChange(safePage - 1)}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={safePage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            disabled={safePage === totalPages}
            onClick={() => handlePageChange(safePage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductPagination;