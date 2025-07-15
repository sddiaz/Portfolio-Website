import React, { useState, useEffect } from "react";
import * as Icon from "devicons-react";
import "./ExperienceStyles.css";
import "../App.css";
import _Draggable from "gsap/Draggable";

const Experience = () => {
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
      company: "Ennovar (Wichita State University)",
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
      company: "National Institute for Aviation Research",
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const currentExperience = experienceData[currentIndex];

  // Check viewport width on mount and resize
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 1080);
    };

    // Check on mount
    checkViewport();

    // Add resize listener
    window.addEventListener('resize', checkViewport);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const handleNext = () => {
    if (isAnimating || currentIndex >= experienceData.length - 1) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const handlePrevious = () => {
    if (isAnimating || currentIndex <= 0) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const { role, company, dates } = currentExperience;

  const getCardStyle = (index) => {
    const position = index - currentIndex;
    
    // Responsive spacing using clamp() - scales between 50px (mobile) to 120px (desktop)
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
        transform: `translateX(calc(${position > 0 ? '1' : '-1'} * clamp(75px, 12vw, 150px))) translateY(clamp(45px, 6vw, 60px)) rotateY(${
          position > 0 ? -35 : 35
        }deg) scale(0.8)`,
        zIndex: 0,
        opacity: 0,
        filter: "blur(3px)",
      };
    }
  };

  return (
<div className="experience">
  <div className="experience-container">
    <div className="experience-header">
      <div className="experience-divider"></div>
    </div>

    <div className="experience-content">
      {isMobileView ? (
        // Mobile Carousel Layout
        <div>
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {experienceData.map((experience, index) => {
                const { role, company, dates, tools, location, notables } = experience;
                
                return (
                  <div className="card" key={index}>
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
          
          {/* Carousel Navigation */}
          <div className="carousel-nav">
            <button 
              className="carousel-btn carousel-prev"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
            >
              ‹
            </button>
            
            <div className="carousel-dots">
              {experienceData.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <button 
              className="carousel-btn carousel-next"
              onClick={() => setCurrentIndex(Math.min(experienceData.length - 1, currentIndex + 1))}
              disabled={currentIndex === experienceData.length - 1}
            >
              ›
            </button>
          </div>
        </div>
      ) : (
        // Desktop Stack Layout
        <div className="experience-cards-container">
          {experienceData.map((experience, index) => {
            const cardStyle = getCardStyle(index);
            const { role, company, dates, tools, location, notables } = experience;

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
  );
};

export default Experience;