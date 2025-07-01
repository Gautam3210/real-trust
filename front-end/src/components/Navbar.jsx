import React from "react";
import {assets} from "../assets/assets";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container" style={{height:"4rem"}}>
        <a className="navbar-brand" href="#">
          <img src={assets.logo} alt="Logo" style={{width:"8rem", height:"8rem"}} />
        </a>

        <div className="mx-auto  d-lg-flex">
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
          </ul>
        </div>

        <div className="  d-lg-block">
          <button
            className="btn btn-warning text-white px-4"
            style={{ background: "orange" }}
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
