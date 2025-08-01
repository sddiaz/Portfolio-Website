import React from "react";
const CodingFuelSection = () => {
  return (
    <div className="card">
      <h2 className="cardTitle">Coding Fuel</h2>
      <div className="aboutDivider"></div>
      <div className="spotifyContainer">
        <iframe
          width="auto"
          height="300px"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?si=S9v4rzO0cG8ua0dv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default CodingFuelSection;
