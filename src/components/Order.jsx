import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const OrderForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    quantity: 1,
    address: "",
    contact: "",
    paymentMethod: "Online",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderConfirmation = () => {
    alert("Order placed successfully!");
    navigate("/");
  };

  const pageStyle = {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #f7f9fc, #d7e8f7)",
    color: "#333",
    lineHeight: "1.6",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    margin: "1rem 0.5rem",
    padding: "0.8rem 2rem",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#2c3e50" }}>
        Order for Product {id}
      </h1>
      {step === 1 && (
        <>
          <h3>Select Quantity</h3>
          <input
            type="number"
            name="quantity"
            value={orderData.quantity}
            min="1"
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <div>
            <button style={buttonStyle} onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h3>Delivery Address</h3>
          <textarea
            name="address"
            value={orderData.address}
            onChange={handleInputChange}
            rows="4"
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <h3>Contact Information</h3>
          <input
            type="text"
            name="contact"
            value={orderData.contact}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <div>
            <button style={buttonStyle} onClick={handlePrevious}>
              Previous
            </button>
            <button style={buttonStyle} onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h3>Select Payment Method</h3>
          <select
            name="paymentMethod"
            value={orderData.paymentMethod}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="Online">Online Payment</option>
            <option value="COD">Cash on Delivery</option>
          </select>
          <div>
            <button style={buttonStyle} onClick={handlePrevious}>
              Previous
            </button>
            <button style={buttonStyle} onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <h3>Order Summary</h3>
          <ul>
            <li>Product ID: {id}</li>
            <li>Quantity: {orderData.quantity}</li>
            <li>Address: {orderData.address}</li>
            <li>Contact: {orderData.contact}</li>
            <li>Payment Method: {orderData.paymentMethod}</li>
          </ul>
          <div>
            <button style={buttonStyle} onClick={handlePrevious}>
              Previous
            </button>
            <button style={buttonStyle} onClick={handleOrderConfirmation}>
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderForm;
