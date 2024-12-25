import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "linear-gradient(135deg, #8e44ad, #3498db)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "500",
    position: "relative",
    transition: "color 0.3s ease",
  };

  const linkHoverEffect = {
    "::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      height: "3px",
      width: "0",
      backgroundColor: "#f1c40f",
      transition: "width 0.3s ease",
    },
    ":hover": {
      color: "#f1c40f",
    },
    ":hover::after": {
      width: "100%",
    },
  };

  const buttonStyle = {
    padding: "0.5rem 1.2rem",
    border: "none",
    borderRadius: "25px",
    background: "#e74c3c",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const handleButtonHover = {
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MyBrand</div>
      <ul style={navLinksStyle}>
        {["Home", "About", "Products", "Services", "Contact"].map((link, index) => (
          <li key={index}>
            <a href={`#${link.toLowerCase()}`} style={{ ...linkStyle, ...linkHoverEffect }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
        <Link to='/login'>   <button style={{ ...buttonStyle, ...handleButtonHover }}>Login</button></Link>
        <Link to='/signup'>   <button style={{ ...buttonStyle, ...handleButtonHover }}>Sign Up</button></Link>
    </nav>
  );
};

export default Navbar;
