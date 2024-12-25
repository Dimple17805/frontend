import React from "react";
import { Link } from "react-router-dom";
import products from "./products";

const ProductPage = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Our Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "2rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              padding: "1rem",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            {/* Image Placeholder */}
            <div
              style={{
                width: "100%",
                height: "180px",
                marginBottom: "1rem",
                backgroundColor: "#ddd",
                borderRadius: "10px",
                backgroundImage: `url(${product.images?.[0] || "https://via.placeholder.com/180"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <h3 style={{ margin: "0.5rem 0", color: "#2c3e50" }}>
              {product.name}
            </h3>
            <p style={{ color: "#8e44ad", fontWeight: "bold" }}>{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  background: "#3498db",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
