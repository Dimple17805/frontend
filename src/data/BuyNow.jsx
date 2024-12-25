import React, { useState } from "react";

const BuyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    paymentMethod: "COD",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    console.log("Order Details:", formData);
    setOrderPlaced(true);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "#f8f9fa" }}>
      <h1 style={{ color: "#2c3e50" }}>Buy Now</h1>
      {orderPlaced ? (
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ color: "#27ae60" }}>Order Placed Successfully!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "2rem auto",
            background: "#fff",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "#3498db", marginBottom: "1rem" }}>Shipping Address</h3>
          <div style={{ marginBottom: "1rem" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.5rem 0",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.5rem 0",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            ></textarea>
          </div>
          <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
            <div style={{ flex: "1" }}>
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  margin: "0.5rem 0",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ flex: "1" }}>
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  margin: "0.5rem 0",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>ZIP Code:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.5rem 0",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <h3 style={{ color: "#3498db", marginBottom: "1rem" }}>Contact Information</h3>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.5rem 0",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.5rem 0",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <h3 style={{ color: "#3498db", marginBottom: "1rem" }}>Payment Method</h3>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={formData.paymentMethod === "COD"}
                onChange={handleInputChange}
              />{" "}
              Cash on Delivery (COD)
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Online"
                checked={formData.paymentMethod === "Online"}
                onChange={handleInputChange}
              />{" "}
              Online Payment
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "#27ae60",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default BuyNow;
