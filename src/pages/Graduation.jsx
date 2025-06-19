import React, { useState } from 'react';
import './FloatingHearts.css'; // Make sure this CSS exists or I can provide it

const Graduation = () => {
  const [showHug, setShowHug] = useState(false);

  const handleHugClick = () => {
    setShowHug(true);
    setTimeout(() => setShowHug(false), 4000); // Hide after 4 sec
  };

  return (
    <div className="text-center py-5" style={{ backgroundColor: '#ffe4ec', minHeight: '100vh' }}>
      <h1 className="display-4 text-danger fw-bold mb-4">🎓 Graduation Congratulations, Aleena! 🎉</h1>
      <p className="lead mx-auto" style={{ maxWidth: '700px', fontSize: '1.3rem', color: '#4b2c3b' }}>
        You did it! You've closed one beautiful chapter and opened another. I hope you know how incredibly proud I am.
        You're going to shine brighter than ever, and I'm here cheering you on — always. 🤍
      </p>

      <button
        className="btn btn-light border border-danger mt-4 px-4 py-2 fs-5 text-danger"
        onClick={handleHugClick}
      >
        💌 Send a Hug
      </button>

      {showHug && (
        <>
          <div className="mt-4 fs-4 text-danger">🤗 Sending you a warm, squishy hug!</div>
          <div className="heart-container">
            {[...Array(15)].map((_, i) => (
              <div className="heart" key={i}></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Graduation;
