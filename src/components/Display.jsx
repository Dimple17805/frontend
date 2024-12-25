import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Dynamic product ID from URL
  const product = {
    id,
    name: `Product ${id}`,
    price: `${id * 10} INR`,
    description: `This is a detailed description of Product ${id}. It is crafted with precision and offers great value.`,
    features: [
      "High-quality materials",
      "Elegant design",
      "Affordable price",
      "Durable and long-lasting",
    ],
    images: [
      `https://via.placeholder.com/300?text=Image+1`,
      `https://via.placeholder.com/300?text=Image+2`,
      `https://via.placeholder.com/300?text=Image+3`,
    ],
    terms: [
      "Warranty: 1 year",
      "Return policy: 15 days",
      "Free shipping available",
      "Cash on delivery accepted",
    ],
  };

  const pageStyle = {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #f7f9fc, #d7e8f7)",
    color: "#333",
    lineHeight: "1.6",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#2c3e50",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "2rem",
  };

  const imageGalleryStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const detailsStyle = {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const sectionStyle = {
    marginBottom: "1.5rem",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "0.8rem 2rem",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background 0.3s ease",
  };

  const handleButtonHover = {
    ":hover": {
      background: "#2980b9",
    },
  };

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>{product.name}</h1>
      <div style={containerStyle}>
        {/* Image Gallery */}
        <div style={imageGalleryStyle}>
          {product.images.map((src, index) => (
            <img key={index} src={src} alt={`Product ${product.name} - ${index + 1}`} style={imageStyle} />
          ))}
        </div>
        {/* Product Details */}
        <div style={detailsStyle}>
          <div style={sectionStyle}>
            <h2 style={{ color: "#2c3e50" }}>Price: {product.price}</h2>
          </div>
          <div style={sectionStyle}>
            <h3 style={{ color: "#8e44ad" }}>Description:</h3>
            <p>{product.description}</p>
          </div>
          <div style={sectionStyle}>
            <h3 style={{ color: "#8e44ad" }}>Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={{ color: "#8e44ad" }}>Terms & Conditions:</h3>
            <ul>
              {product.terms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
          </div>
         <Link to='/order'> <button style={{ ...buttonStyle, ...handleButtonHover }}>Buy Now</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
