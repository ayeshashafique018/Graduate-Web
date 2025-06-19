import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center py-4"
      style={{
        background: "#ffe6f0",
        color: "#b30059",
        fontFamily: "'Poppins', sans-serif",
        borderTop: "2px dashed #ffb3cc",
      }}
    >
      <div className="container">
        <p style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
          Made with 💖 by <strong>Ayesha Shafique</strong>
        </p>
        <small style={{ fontSize: "0.85rem" }}>
          © 2025 | You’re amazing for scrolling this far! 🌸
        </small>
      </div>
    </footer>
  );
};

export default Footer;
