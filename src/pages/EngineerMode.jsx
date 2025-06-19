import React from "react";

const EngineerMode = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center py-5"
      style={{
        backgroundColor: "#ffe6f0", // Pink theme
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {/* 🎖️ Badge */}
      <div
        style={{
          backgroundColor: "#d63384",
          color: "#fff",
          padding: "8px 20px",
          borderRadius: "50px",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1.5rem",
        }}
      >
        🎖️ Certified AI Engineer Mode
      </div>

      {/* 💬 Messages */}
      <div
        className="card shadow p-4 mb-3"
        style={{
          maxWidth: "600px",
          backgroundColor: "#fff0f5",
          borderLeft: "6px solid #d63384",
          borderRadius: "16px",
        }}
      >
        <p className="fs-5 text-dark">
          💻 <code>console.log("From Hello World → Hello TensorFlow!")</code>
        </p>
      </div>

      <div
        className="card shadow p-4 mb-3"
        style={{
          maxWidth: "600px",
          backgroundColor: "#fff0f5",
          borderLeft: "6px solid #d63384",
          borderRadius: "16px",
        }}
      >
        <p className="fs-5 text-dark">
          🧠 <em>“AI = Always Inspiring — just like you, Aleena.”</em>
        </p>
      </div>

      {/* 🎉 Uplift banner */}
      <div
        className="mt-4 px-4 py-3"
        style={{
          backgroundColor: "#ffc9de",
          borderRadius: "10px",
          fontWeight: "500",
          maxWidth: "80%",
        }}
      >
        Every line of code you’ve written was one step closer to becoming the inspiring engineer you are now. 💗 Keep building. Keep glowing.
      </div>

      {/* 🔘 AI Mode Toggle Button */}
      <button
        className="btn mt-4"
        style={{
          backgroundColor: "#d63384",
          color: "white",
          padding: "10px 25px",
          borderRadius: "30px",
          fontWeight: "bold",
          fontSize: "1rem",
          boxShadow: "0 0 10px #d63384aa",
        }}
      >
        🚀 AI Mode: ON
      </button>
    </div>
  );
};

export default EngineerMode;
