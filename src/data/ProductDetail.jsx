import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "./products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || "");

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Product Not Found</h1>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "0.5rem 1rem",
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{product.name}</h1><img
        src={selectedImage}
        alt={product.name}
        style={{
          width: "100%",
          maxWidth: "500px",
          marginBottom: "1rem",
          borderRadius: "10px",
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "1rem" }}>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              cursor: "pointer",
              border: selectedImage === image ? "2px solid #3498db" : "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
      <p style={{ color: "#8e44ad", fontWeight: "bold", fontSize: "1.5rem" }}>{product.price}</p>
      <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1rem", color: "#2c3e50" }}>
        {product.description}
      </p>
      <h3 style={{ marginTop: "1rem", color: "#3498db" }}>Specifications</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {product.specifications.map((spec, index) => (
          <li key={index} style={{ textAlign: "left", margin: "5px 0" }}>
            - {spec}
          </li>
        ))}
      </ul>
      <h3 style={{ marginTop: "1rem", color: "#3498db" }}>Customer Reviews</h3>
      {product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            <strong>{review.user}</strong>: {review.comment}{" "}
            <span style={{ color: "#f39c12" }}>
              {"★".repeat(review.rating)}{" "}
              {"☆".repeat(5 - review.rating)}
            </span>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#7f8c8d" }}>{product.terms}</p>
      <button
        onClick={() => navigate("/")}
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
        Back to Products
      </button>
      <button><Link to='/buy-now'>BuyNow</Link></button>
    </div>
  );
};

export default ProductDetail;
