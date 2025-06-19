import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Create this CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fancy-navbar px-4 py-2 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4 text-pink" href="#">🎓 Aleena's Graduation</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item"><a className="nav-link nav-btn" href="#timeline">✨ Moments</a></li>
            <li className="nav-item"><a className="nav-link nav-btn" href="#gallery">📸 Snaps</a></li>
            <li className="nav-item"><a className="nav-link nav-btn" href="#letter">💌 Note</a></li>
            <li className="nav-item"><a className="nav-link nav-btn" href="#graduation">🎓 Grad Day</a></li>
            <li className="nav-item"><a className="nav-link nav-btn" href="#engineer">👩‍💻 Engineer Girl</a></li>
            <li className="nav-item"><a className="nav-link nav-btn" href="#vault">🔒 Secrets</a></li>
            <li className="nav-item"><a className="nav-link nav-btn" href="#whatnext">🌈 Next Up</a></li>
            <li className="nav-item"><a className="nav-link nav-btn" href="#final">📝 Love Note</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
