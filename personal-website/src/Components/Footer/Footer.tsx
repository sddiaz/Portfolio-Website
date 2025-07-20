import React from "react";
import { Email, LinkedIn, Instagram } from "@mui/icons-material";
import "./FooterStyles.css";
import "../../App.css";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3 className="footer-title">Let's Connect :) </h3>
          <div className="footer-socials">
            <button
              className="footer-social-btn mouse"
              onClick={() => handleClick("https://www.linkedin.com/in/santiagoddiaz")}
            >
              <LinkedIn />
            </button>
            <button
              className="footer-social-btn mouse"
              onClick={() => handleClick("mailto:your.email@example.com")}
            >
              <Email />
            </button>
            <button
              className="footer-social-btn mouse"
              onClick={() => handleClick("https://www.instagram.com/cautified")}
            >
              <Instagram />
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-credits">
          <div className="footer-made-with">
            Made with <span className="footer-heart">❤️</span> by Santiago Diaz
          </div>
          <div className="footer-year">© 2025</div>
        </div>

        <div className="footer-shapes">
          <div className="footer-shape footer-shape-1"></div>
          <div className="footer-shape footer-shape-2"></div>
          <div className="footer-shape footer-shape-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
