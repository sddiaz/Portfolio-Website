import * as Icon from "devicons-react";
import { useCallback, useEffect, useRef, useState } from "react";
import "../../App.css";
import "./ExperienceStyles.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const Experience = () => {
  //#region Variables

  const toolIconMap = {
    React: Icon.ReactOriginal,
    Python: Icon.PythonOriginal,
    JavaScript: Icon.JavascriptOriginal,
    TypeScript: Icon.TypescriptOriginal,
    SQL: Icon.SqliteOriginal,
    "C#": Icon.CsharpOriginal,
    ".NET": Icon.DotNetOriginal,
    Azure: Icon.AzureOriginal,
    GCP: Icon.GooglecloudOriginal,
    Kuber: Icon.KubernetesOriginal,
    Django: Icon.DjangorestOriginal,
  };

  const experienceData = [
    {
      role: "Software Engineer II",
      company: "Walmart Global Tech",
      dates: "May 2023 – Present",
      tools: ["React", "C#", "SQL", "Azure", "GCP", "Kuber"],
      location: "Bentonville, AR",
      notables: [
        "Architected and implemented scalable React/TypeScript component-based systems processing 10M+ daily transactions across 10,500+ stores, emphasizing reusable UI components and performance optimization with sub-200ms load times",
        "Built comprehensive design system foundations using modern React patterns and TypeScript, creating consistent, accessible UI components used by 1000+ internal developers across multiple product teams",
        "Developed 3 dynamic data visualization components with React and performance-tested component libraries, delivering delightful user experiences for millions of products while maintaining 99.9% uptime",
        "Collaborated closely with product managers and UX designers to implement pixel-perfect, accessible UI components following design specifications and modern front-end best practices",
      ],
      backDate: "June 1st, 2023",
      nextDate: "Present",
    },
    {
      role: "Software Engineer",
      company: "Ennovar",
      dates: "Jan 2023 – May 2023",
      tools: ["React", "TypeScript", "Python", "Django", "SQL"],
      location: "Wichita, KS",
      notables: [
        "Led front-end development of full-stack React application serving 500+ users, implementing component-based architecture with modern JavaScript frameworks and comprehensive testing strategies",
        "Designed RESTful APIs and relational databases in .NET, ensuring seamless integration with the front end and optimized query performance",
        "Delivered modern web features including user authentication, routing, and business logic integration using React and .NET, ensuring robust and extensible platforms",
      ],
      backDate: "January 1st, 2023",
      nextDate: "May 2023",
    },
    {
      role: "Student Technician",
      company: "NIAR",
      dates: "Feb 2022 – Jan 2023",
      tools: ["C#", ".NET", "SQL"],
      location: "Wichita, KS",
      notables: [
        "Built desktop applications using C# .NET with WPF for manufacturing systems, supporting real-time monitoring and analytics for 200+ daily users",
        "Developed autonomous robotics software controlling a $120K robot fleet, with emphasis on precision, UI clarity, and system reliability in mission-critical workflows",
      ],
      backDate: "June 1st, 2022",
      nextDate: "Jan 2023",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [containerHeight, setContainerHeight] = useState("600px");
  const [expandedCards, setExpandedCards] = useState(new Set());
  const cardsContainerRef = useRef(null);

  //#endregion

  //#region Functions

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const calculateContainerHeight = useCallback(() => {
    if (!cardsContainerRef.current || isMobileView) return;

    const cards = (cardsContainerRef.current as any)?.children;
    if (cards.length === 0) return;

    // Get the height of the tallest card
    let maxCardHeight = 0;
    for (let card of cards) {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxCardHeight) {
        maxCardHeight = cardHeight;
      }
    }

    // Add some padding for the stacking effect
    const stackingOffset = (cards.length - 1) * 20;
    const totalHeight = maxCardHeight + stackingOffset + 50;

    setContainerHeight(`${totalHeight}px`);
  }, [isMobileView]);

  const getCardStyle = (index) => {
    const position = index - currentIndex;
    const spacing = `clamp(50px, 8vw, 120px)`;
    const doubleSpacing = `clamp(100px, 16vw, 240px)`;

    if (position === 0) {
      // Active card - front and center
      return {
        transform: `translateX(0px) translateY(0px) rotateY(0deg) scale(1)`,
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (position === 1) {
      // Next card - behind to the right
      return {
        transform: `translateX(calc(${spacing})) translateY(clamp(15px, 2vw, 20px)) rotateY(-15deg) scale(0.95)`,
        zIndex: 20,
        opacity: 0.8,
        filter: "blur(1px)",
      };
    } else if (position === 2) {
      // Third card - further behind to the right
      return {
        transform: `translateX(calc(${doubleSpacing})) translateY(clamp(30px, 4vw, 40px)) rotateY(-25deg) scale(0.9)`,
        zIndex: 10,
        opacity: 0.6,
        filter: "blur(2px)",
      };
    } else if (position === -1) {
      // Previous card - behind to the left
      return {
        transform: `translateX(calc(-1 * ${spacing})) translateY(clamp(15px, 2vw, 20px)) rotateY(15deg) scale(0.95)`,
        zIndex: 20,
        opacity: 0.8,
        filter: "blur(1px)",
      };
    } else if (position === -2) {
      // Previous card - further behind to the left
      return {
        transform: `translateX(calc(-1 * ${doubleSpacing})) translateY(clamp(30px, 4vw, 40px)) rotateY(25deg) scale(0.9)`,
        zIndex: 10,
        opacity: 0.6,
        filter: "blur(2px)",
      };
    } else {
      // Cards too far away - hidden
      return {
        transform: `translateX(calc(${
          position > 0 ? "1" : "-1"
        } * clamp(75px, 12vw, 150px))) translateY(clamp(45px, 6vw, 60px)) rotateY(${
          position > 0 ? -35 : 35
        }deg) scale(0.8)`,
        zIndex: 0,
        opacity: 0,
        filter: "blur(3px)",
      };
    }
  };

  // Use effect to recalculate on data or view changes
  useEffect(() => {
    calculateContainerHeight();
    const handleResize = () => {
      setTimeout(calculateContainerHeight, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateContainerHeight]);

  // Check viewport width on mount and resize
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 1080);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  //#endregion

  //#region Component

  return (
    <div id="Experience" className="Page">
      <div className="What pageTitle">
        Experience <div className="regular"> and </div> Skills
      </div>
      <div className="experience">
        <div className="experience-container">
          <div className="experience-header">
            <div className="experience-divider"></div>
          </div>

          <div className="experience-content">
            {isMobileView ? (
              // Mobile Accordion Layout
              <div className="mobile-accordion">
                {experienceData.map((experience, index) => {
                  const { role, company, dates, tools, location, notables } =
                    experience;
                  const isExpanded = expandedCards.has(index);

                  return (
                    <div
                      className={`accordion-card ${
                        isExpanded ? "expanded" : ""
                      }`}
                      key={index}
                    >
                      <div
                        className="accordion-header"
                        onClick={() => toggleCard(index)}
                      >
                        <div className="accordion-title-section">
                          <h3 className="accordion-role">{role}</h3>
                          <div className="accordion-company-date">
                            <span className="accordion-company">{company}</span>
                            <span className="accordion-dates">{dates}</span>
                          </div>
                        </div>
                        <div className="accordion-toggle">
                          {isExpanded ?  <KeyboardArrowUp />: <KeyboardArrowDown />}
                        </div>
                      </div>

                      <div
                        className={`accordion-content ${
                          isExpanded ? "expanded" : ""
                        }`}
                      >
                        <div className="accordion-tools">
                          <h4 className="accordion-section-title">Tools</h4>
                          <div className="accordion-tools-grid">
                            {tools.map((tool) => {
                              const IconComponent = toolIconMap[tool];
                              return (
                                <div
                                  className="accordion-tool-item"
                                  title={tool}
                                  key={tool}
                                >
                                  {IconComponent && <IconComponent />}
                                  <span>{tool}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="accordion-location">
                          <h4 className="accordion-section-title">Location</h4>
                          <div className="accordion-location-tag">
                            {location}
                          </div>
                        </div>

                        <div className="accordion-accomplishments">
                          <h4 className="accordion-section-title">
                            Accomplishments
                          </h4>
                          <ul className="accordion-accomplishments-list">
                            {notables.map((notable, noteIndex) => (
                              <li
                                key={noteIndex}
                                className="accordion-accomplishment-item"
                              >
                                <span className="accordion-bullet">•</span>
                                <span className="accordion-accomplishment-text">
                                  {notable}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Desktop Stack Layout
              <div
                className="experience-cards-container"
                ref={cardsContainerRef}
                style={{ height: isMobileView ? "auto" : containerHeight }}
              >
                {experienceData.map((experience, index) => {
                  const cardStyle = getCardStyle(index);
                  const { role, company, dates, tools, location, notables } =
                    experience;

                  return (
                    <div
                      className="card"
                      style={{ ...cardStyle }}
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <div className="job-header">
                        <h2 className="job-title">
                          <span className="job-role">{role}</span> at{" "}
                          <span className="job-company">{company}</span> from{" "}
                          <span className="job-dates">{dates}</span>
                        </h2>
                        <div className="job-divider"></div>
                      </div>

                      <div className="job-details">
                        <div>
                          <div className="details-location">
                            <h3 className="details-title">Tools</h3>
                            <div className="details-divider"></div>
                            <div
                              style={{
                                display: "flex",
                                gap: "2px",
                                flexWrap: "wrap",
                              }}
                            >
                              {tools.map((tool) => {
                                const IconComponent = toolIconMap[tool];
                                return (
                                  <div
                                    className="location-tag"
                                    title={tool}
                                    key={tool}
                                  >
                                    {IconComponent && <IconComponent />}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div className="details-location">
                            <h3 className="details-title">Location</h3>
                            <div className="details-divider"></div>
                            <div className="location-tag">{location}</div>
                          </div>
                        </div>

                        <div className="details-notables">
                          <h3 className="details-title">Accomplishments</h3>
                          <div className="details-divider"></div>
                          <ul className="notables-list">
                            {notables.map((notable, index) => (
                              <li key={index} className="notable-item">
                                <span className="notable-bullet">•</span>
                                <span className="notable-text">{notable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  //#endregion
};

export default Experience;
