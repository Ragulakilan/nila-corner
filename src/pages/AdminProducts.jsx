import { useState } from "react";
import { products as initialProducts } from "../data/products";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [products, setProducts] = useState(
    initialProducts.map((product) => ({ ...product }))
  );

  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    image: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.brand.trim() ||
      !formData.price ||
      !formData.image.trim() ||
      !formData.description.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (Number(formData.price) <= 0) {
      setError("Price must be greater than 0.");
      return;
    }

    if (editId !== null) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editId
            ? { ...product, ...formData, price: Number(formData.price) }
            : product
        )
      );
    } else {
      const newProduct = {
        ...formData,
        id: Date.now(),
        price: Number(formData.price),
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    resetForm();
  };

  const handleEdit = (product) => {
    setEditId(product.id);

    setFormData({
      title: product.title,
      brand: product.brand,
      price: String(product.price),
      image: product.image,
      description: product.description,
    });

    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setProducts((prev) => prev.filter((product) => product.id !== id));

      if (editId === id) {
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      brand: "",
      price: "",
      image: "",
      description: "",
    });

    setEditId(null);
    setError("");
  };

  return (
    <section className="admin-products">
      <div className="admin-header">
        <h1>Product Management</h1>
        <p>Add, edit, and manage your mobile products.</p>
      </div>

      {/* CREATE / UPDATE FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editId !== null ? "Edit Product" : "Add New Product"}</h2>

        {error && <p className="admin-error">{error}</p>}

        <div className="admin-form-grid">
          <input
            type="text"
            name="title"
            placeholder="Mobile Name"
            value={formData.title}
            onChange={handleChange}
          />

          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          >
            <option value="">Select Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Oppo">Oppo</option>
            <option value="Vivo">Vivo</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={formData.price}
            onChange={handleChange}
            min="1"
          />

          <input
            type="url"
            name="image"
            placeholder="Product Image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />

        <div className="admin-form-buttons">
          <button type="submit" className="admin-submit">
            {editId !== null ? "Update Product" : "Add Product"}
          </button>

          {editId !== null && (
            <button
              type="button"
              className="admin-cancel"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* READ PRODUCTS */}
      <div className="admin-list-header">
        <h2>All Products</h2>
        <span>{products.length} Products</span>
      </div>

      <div className="admin-product-grid">
        {products.map((product) => (
          <div className="admin-product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <div className="admin-product-info">
              <span className="admin-brand">{product.brand}</span>
              <h3>{product.title}</h3>
              <p className="admin-price">
                ₹{Number(product.price).toLocaleString("en-IN")}
              </p>
              <p className="admin-description">{product.description}</p>

              <div className="admin-card-buttons">
                <button
                  className="admin-edit"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>

                <button
                  className="admin-delete"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminProducts;