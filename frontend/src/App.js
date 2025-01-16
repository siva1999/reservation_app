import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Passes from './pages/Passes';
import Reservations from './pages/Reservations';
import Market from './pages/Market';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      {/* Header */}

      <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/passes">
              Passes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/reservations">
              Reservations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold text-light" to="/market">
              Market
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>



      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Bonjour Paris</h1>
          <p className="lead">
            Seamlessly book reservations, manage passes, and explore the market.
          </p>
          <Link to="/reservations" className="btn btn-light btn-lg mt-3">
            Get Started
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </main>




      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>© 2025 Reservation App. All Rights Reserved.</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;
