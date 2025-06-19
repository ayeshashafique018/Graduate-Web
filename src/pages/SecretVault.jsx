import React from "react";

const SecretVault = () => {
  const quotes = [
    "You were my 3 AM call before I even had problems.",
    "Not a therapist, but she healed me.",
    "Your presence is my safest place.",
    "You didn’t just hear me, you understood me.",
    "Some people are medicine in human form — that’s you.",
    "Your words stitched the wounds no one else could see.",
    "You made silence feel like comfort, not absence.",
    "Even on my worst days, your care never wavered.",
    "You never gave up on me — even when I gave up on myself.",
    "If love could be a person, it would look a lot like you."
  ];

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: "#fff0f5", // soft pink vault
        borderRadius: "20px",
        boxShadow: "0 0 15px #ffb6c1aa",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 className="mb-4" style={{ color: "#d63384", fontWeight: "bold" }}>
        💖 Secret Vault of Our Softest Moments 💖
      </h2>

      <ul className="list-unstyled" style={{ fontSize: "1.1rem", color: "#444" }}>
        {quotes.map((quote, index) => (
          <li
            key={index}
            style={{
              marginBottom: "1.2rem",
              backgroundColor: "#ffe4ec",
              padding: "12px 18px",
              borderRadius: "30px",
              display: "inline-block",
              maxWidth: "100%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            ❤️ {quote}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecretVault;
