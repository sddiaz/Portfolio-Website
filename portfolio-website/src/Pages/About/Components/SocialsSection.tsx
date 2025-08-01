import React from "react";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const SocialsSection = () => {
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="card">
      <h2 className="cardTitle">Socials</h2>
      <div className="aboutDivider"></div>
      <div className="socialsContainer">
        <button
          className="socialButton mouse"
          onClick={() =>
            handleSocialClick("https://www.linkedin.com/in/santiagoddiaz")
          }
        >
          <LinkedIn />
        </button>
        <button
          className="socialButton mouse"
          onClick={() => handleSocialClick("https://github.com/sddiaz")}
        >
          <GitHub />
        </button>
        <button
          className="socialButton mouse"
          onClick={() =>
            handleSocialClick("https://www.instagram.com/cautified")
          }
        >
          <Instagram />
        </button>
      </div>
    </div>
  );
};

export default SocialsSection;