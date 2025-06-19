import React from "react";

const FinalNote = () => {
  return (
    <div
      className="py-5 px-3 text-center"
      style={{
        background: "linear-gradient(to bottom, #ffd1dc, #fff)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2.5rem", color: "#b30059" }}>
        🎓 And Just Like That… You Graduated
      </h2>

      <p
        className="mt-4"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1.2rem",
          color: "#444",
          lineHeight: "1.8",
        }}
      >
        From the first day we met to this very moment — every laugh, every breakdown, every deadline panic,
        and every 3 AM heart-to-heart… it was all worth it because you were there. You made these years feel like a story worth rereading. 💫
        <br /><br />
        No matter where life takes us, this chapter will always be ours. You are not just a friend, you're a part of me — my constant in the chaos.
        <br /><br />
        <strong style={{ color: "#c2185b" }}>
          Here's to your brilliance, your softness, your strength, and your dreams waiting to unfold.
        </strong>
      </p>

     

      <p className="mt-5" style={{ color: "#555", fontStyle: "italic" }}>
        Forever yours — in code, in chaos, in life. <br />
        <strong>“I love you more than AI loves data.”</strong>
      </p>
    </div>
  );
};

export default FinalNote;
