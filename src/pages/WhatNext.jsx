import React from "react";

const WhatNext = () => {
  const goals = [
    "💼 Land a top-tier job (Google? Microsoft? Manifesting 🤞)",
    "📚 Pursue a Master's (only if she's not too busy bossing around)",
    "🌟 Launch her own tech startup — CEO Aleena sounds good right?",
    "🎤 Rock a TEDx Talk titled: 'How I Did It All – In Style'",
    "💍 Oh, and maybe... start planning that mysterious 'wedding of the year' (hehe just saying 👀)",
    "✈️ Travel to Turkey, Switzerland, and maybe a solo trip too",
    "🧕 Continue making her parents proud — like she *always* does",
    "💖 Keep glowing and growing — inside out 🌸"
  ];

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: "#fff5f8",
        borderRadius: "20px",
        boxShadow: "0 0 10px #ffc0cb88",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 className="mb-4" style={{ color: "#c2185b", fontWeight: "bold" }}>
        🌟 What’s Next for Aleena? 2025 & Beyond 👑
      </h2>

      <ul className="list-group list-group-flush">
        {goals.map((goal, idx) => (
          <li
            key={idx}
            className="list-group-item"
            style={{
              backgroundColor: "#ffeef3",
              border: "none",
              margin: "10px 0",
              borderRadius: "15px",
              fontSize: "1.1rem",
            }}
          >
            {goal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatNext;
