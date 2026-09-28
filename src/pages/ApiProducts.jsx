import useFetchData from "../hooks/useFetchData";

function ApiProducts() {
  const {
    data: products,
    loading,
    error,
  } = useFetchData("https://fakestoreapi.com/products");

  if (loading) {
    return <h2 className="api-message">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="api-error">Error: {error}</h2>;
  }

  return (
    <div className="api-products-page">
      <section className="api-header">
        <h1>API Products</h1>
        <p>Products fetched dynamically from an external API.</p>
      </section>

      <div className="api-product-grid">
        {products.map((product) => (
          <div className="api-product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <div className="api-product-info">
              <h3>{product.title}</h3>

              <p className="api-category">{product.category}</p>

              <h2>₹{(product.price * 85).toLocaleString("en-IN")}</h2>

              <p className="api-rating">
                ⭐ {product.rating?.rate ?? "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiProducts;