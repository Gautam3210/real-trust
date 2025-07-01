import React from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container navbar-container">
        <a className="navbar-brand" href="#">
          <img src={assets.logo} alt="Logo" className="navbar-logo" />
        </a>

        <div className="mx-auto d-lg-flex">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link admin-link"
                href={`${import.meta.env.VITE_ADMIN_URL}`}
              >
                Admin
              </a>
            </li>
          </ul>
        </div>

        <div className="d-lg-block">
          <button className="connect-button">Connect</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
