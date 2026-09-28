import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addCustomer,
  deleteCustomer,
} from "../redux/formSlice";

function CustomerForm() {
  const dispatch = useDispatch();

  const customers = useSelector(
    (state) => state.customers.customers
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value.trim())) {
      setError("Please fill in all fields.");
      return;
    }

    const newCustomer = {
      ...formData,
      id: Date.now(),
    };

    dispatch(addCustomer(newCustomer));

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      role: "",
    });

    setError("");
  };

  return (
    <div className="customer-page">
      <h1>Customer Registration</h1>
      <p>Register a customer and manage records using Redux Toolkit.</p>

      <form className="customer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="view-btn">
          Register Customer
        </button>
      </form>

      <section className="customer-records">
        <h2>Registered Customers ({customers.length})</h2>

        {customers.length === 0 ? (
          <p>No customer records yet.</p>
        ) : (
          customers.map((customer) => (
            <div className="customer-record" key={customer.id}>
              <div>
                <h3>{customer.name}</h3>
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
                <p>{customer.city} · {customer.role}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(deleteCustomer(customer.id))}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default CustomerForm;