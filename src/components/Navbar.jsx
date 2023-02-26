import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Noteable
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex gap-3" role="search">
              <Link className="btn btn-outline-light" role="button" to="/login">
                Login
              </Link>
              <Link className="btn btn-light" role="button" to="/signup">
                Sign Up
              </Link>
            </form>
          ) : (
            <div className="d-flex align-items-center">
              <Link to="/userdetails" className="mx-3">
                <i className="fa-solid fa-user text-light border rounded-circle p-2 border-3"></i>
              </Link>
              <Link
                className="btn btn-light"
                role="button"
                to="/login"
                onClick={handleLogout}
              >
                LogOut
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
