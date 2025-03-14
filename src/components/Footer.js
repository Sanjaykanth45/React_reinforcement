import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FaFacebook, FaInstagram,  FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center py-4">
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
          className="icon instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"          
            className="icon facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/Sanjaykanth45"                    
            className="icon github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjaykanth45/"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-text mt-3">
          &copy; 2024 Sanjay. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
