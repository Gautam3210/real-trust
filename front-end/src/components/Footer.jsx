import React from "react";
import "./Footer.css";
import {assets} from "../assets/assets"; 
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>📞 Contact: +91 98765 43210</p>
      </div>

      <div className="footer-center">
        <img src={assets.logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
