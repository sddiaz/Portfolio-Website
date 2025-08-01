import React, { useState, useEffect } from "react";
import AbstractSection from "./Components/AbstractSection.tsx";
import BucketListSection from "./Components/BucketListSection.tsx";
import NerdFactsSection from "./Components/NerdFactsSection.tsx";
import SocialsSection from "./Components/SocialsSection.tsx";
import PlaylistSection from "./Components/PlaylistSection.tsx";
import CodingFuelSection from "./Components/CodingFuelSection.tsx";
import "./AboutStyles.css";

const About = () => {
  const [selectedSection, setSelectedSection] = useState("about");
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 1080);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const sections = [
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "socials", label: "Socials", icon: "🔗" },
    { id: "favorites", label: "Favorites", icon: "🎵" },
  ];

  const handleSectionChange = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "about":
        return (
          <div>
            <AbstractSection />
            <BucketListSection />
            <NerdFactsSection />
          </div>
        );

      case "socials":
        return <SocialsSection />;

      case "favorites":
        return (
          <div>
            <PlaylistSection />
            <CodingFuelSection />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="About" className="Page">
      <div className="Who pageTitle">
        About <div className="regular"> me </div>
      </div>

      {/* Mobile Section Navigation */}
      {isMobileView && (
        <div className="mobileNavContainer">
          <div className="mobileSectionNav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`mobileNavButton ${
                  selectedSection === section.id ? "active" : ""
                }`}
                onClick={() => handleSectionChange(section.id)}
              >
                <span className="navIcon">{section.icon}</span>
                <span className="navLabel">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="aboutMainContainer">
        {/* Mobile Single Section View */}
        {isMobileView && (
          <div className="mobileSectionContainer">
            {renderSelectedSection()}
          </div>
        )}

        {/* Desktop Layout */}
        {!isMobileView && (
          <div className="desktopContainer">
            <div className="abstractWrapper">
              <AbstractSection />
            </div>
            <div className="aboutContainer">
              <div className="flexRow">
                <div className="flexCol">
                  <BucketListSection />
                  <NerdFactsSection />
                </div>
                <div className="flexCol">
                  <SocialsSection />
                  <PlaylistSection />
                  <CodingFuelSection />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
