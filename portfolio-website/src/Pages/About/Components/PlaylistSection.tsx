import React from "react";

const PlaylistSection = () => {
  return (
    <div className="card">
      <h2 className="cardTitle">Playlist</h2>
      <div className="aboutDivider"></div>
      <div className="spotifyContainer">
        <iframe
          title="marias"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/1ShRHPAiiIrh0arZbSFmx1?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="laroi"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/3CJrKExvAP6RCtUR8Cf99P?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="switchfoot"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/0suxuyHvv1GoUdluByrmC0?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PlaylistSection;