import React, { useEffect, useState } from "react";
import "../../App.css";
import "./ScrollStyles.css";

const ScrollIndicator = () => {

  //#region Variables

  const [scrollPosition, setScrollPosition] = useState(0);

  //#endregion

  //#region Functions

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPosition(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //#endregion

  //#region Component

  return (
    <div className="scroll-indicator">
      <div
        className="scroll-line"
        style={{
          background: `linear-gradient(to bottom, var(--accent) ${scrollPosition}%, transparent ${scrollPosition}%)`,
        }}
      >
        <div
          className="scroll-dot"
          style={{
            top: `${scrollPosition}%`,
          }}
        ></div>
      </div>
      <div className="scroll-text">Scroll to explore!</div>
    </div>
  )

  //#endregion
};

export default ScrollIndicator;