import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const products = [

];

const ProductPage = () => {
  const pageStyle = {
    background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
    padding: "2rem",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  };

  const imageContainerStyle = {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f1f1",
    borderRadius: "8px",
    marginBottom: "1rem",
  };

  const imgStyle = {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "8px",
  };

  const btnStyle = {
    padding: "0.5rem 1.2rem",
    border: "none",
    borderRadius: "20px",
    background: "#3498db",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const btnHoverStyle = {
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div> <Navbar/>
    <div style={pageStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Products</h1>
      <div style={gridStyle}>
        {products.map((product) => (
          <div key={product.id} style={{ ...cardStyle, ...cardHoverStyle }}>
           <div style={imageContainerStyle}>
              {product.image ? (
                <img src={product.image} alt={product.name} style={imgStyle} />
              ) : (
                <span style={{ color: "#aaa" }}>No Image</span>
              )}
            </div>
           <Link to={`/product/${product.id}`}>  <h2 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>{product.name}</h2>
            <p style={{ color: "#555", marginBottom: "1rem" }}>{product.price}</p>
            <button style={{ ...btnStyle, ...btnHoverStyle }}>View Details</button></Link>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default ProductPage;
