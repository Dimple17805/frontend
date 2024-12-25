import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = ({ isLogin }) => {
  const navigate = useNavigate();

  const handleToggle = () => {
    if (isLogin) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={styles.container}>
      {/* Flipping Card */}
      <div style={styles.card}>
        <div
          style={{
            ...styles.cardInner,
            transform: isLogin ? "rotateY(0)" : "rotateY(180deg)",
          }}
        >
          {/* Login Form */}
          <div style={styles.cardFace}>
            <h2 style={styles.heading}>Welcome Back!</h2>
            <p style={styles.subText}>Login to access your account</p>
            <input type="email" placeholder="Email Address" style={styles.input} />
            <input type="password" placeholder="Password" style={styles.input} />
            <button style={styles.button}>Login</button>
            <p style={styles.toggleText}>
              Don't have an account?{" "}
              <span style={styles.link} onClick={handleToggle}>
                Sign Up
              </span>
            </p>
          </div>

          {/* Signup Form */}
          <div style={styles.cardFaceBack}>
            <h2 style={styles.heading}>Join Us Now!</h2>
            <p style={styles.subText}>Create your account</p>
            <input type="text" placeholder="Full Name" style={styles.input} />
            <input type="email" placeholder="Email Address" style={styles.input} />
            <input type="password" placeholder="Password" style={styles.input} />
            <input
              type="password"
              placeholder="Confirm Password"
              style={styles.input}
            />
            <button style={styles.button}>Sign Up</button>
            <p style={styles.toggleText}>
              Already have an account?{" "}
              <span style={styles.link} onClick={handleToggle}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    width: "350px",
    height: "500px",
    perspective: "1000px",
  },
  cardInner: {
    width: "100%",
    height: "100%",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    position: "relative",
  },
  cardFace: {
    position: "absolute",
    backfaceVisibility: "hidden",
    width: "100%",
    height: "100%",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    transform: "rotateY(0deg)",
  },
  cardFaceBack: {
    position: "absolute",
    backfaceVisibility: "hidden",
    width: "100%",
    height: "100%",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    transform: "rotateY(180deg)",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "1rem",
  },
  subText: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    margin: "0.5rem 0",
    border: "1px solid #ccc",
    borderRadius: "25px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "0.8rem",
    marginTop: "1rem",
    backgroundColor: "#66a6ff",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background 0.3s ease",
    outline: "none",
  },
  toggleText: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#555",
  },
  link: {
    color: "#66a6ff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default LoginSignup;
