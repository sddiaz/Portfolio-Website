import React, { useState, useRef, useEffect } from "react";
import { GitHub, Launch, Code, Web, Apps } from "@mui/icons-material";
import "./WorkStyles.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "mobile" | "design" | "desktop";
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Works: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample projects - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "EventBuzz",
      description:
        "A lightweight Chrome extension that fetches events from Google Events using SerpAPI. Features event search, favorites with local storage, date sorting, and pagination with a clean React interface.",
      technologies: [
        "React",
        "Axios",
        "React-Spinners",
        "Vercel",
        "CSS",
        "SerpAPI",
      ],
      category: "web",
      image:
        "https://github.com/sddiaz/Portfolio/assets/101738608/4745d92b-b1d0-47cb-b719-d5bfe96ca3dc",
      githubUrl: "https://github.com/sddiaz/Portfolio-Projects", // Update with actual EventBuzz repo
      liveUrl: "https://eventbuzzz.netlify.app/",
    },
    {
      id: 2,
      title: "Mini Travel Journal",
      description:
        "A responsive static page built with React to practice component architecture, props, and data mapping. Features a clean design showcasing travel destinations with mobile-friendly layout.",
      technologies: ["React", "JSX", "CSS"],
      category: "web",
      image:
        "https://user-images.githubusercontent.com/101738608/211128167-4807830d-8285-4c0d-9d3c-bca8ef4ca33e.png",
      githubUrl: "https://github.com/sddiaz/Portfolio-Projects", // Update with actual repo
      liveUrl: "https://minitraveljournal.netlify.app/",
    },
    {
      id: 3,
      title: "Password Generator",
      description:
        "A feature-rich password generator with focus on UI/UX design. Includes custom switches, reactive sliders, hover effects, infinite carousel, and comprehensive customization options with edge case handling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "web",
      image:
        "https://user-images.githubusercontent.com/101738608/200132021-1fd026ec-58e9-4883-9014-1e2c5e48c04a.png",
      githubUrl: "https://github.com/sddiaz/Portfolio-Projects", // Update with actual repo
      liveUrl: "https://my-first-password-generator.netlify.app/",
    },
    {
      id: 4,
      title: "Clippit - Web Message Retrieval",
      description:
        "A web-based message retrieval system with database integration. Features unique ID generation, error checking, and responsive design. My first personal HTML/CSS project with full-stack capabilities.",
      technologies: ["ASP.NET", "Microsoft SQL", "HTML", "CSS", "C#"],
      category: "web",
      image:
        "https://user-images.githubusercontent.com/101738608/197719421-a2647341-fe8b-4753-b377-5989eec35c6c.png",
      githubUrl: "https://github.com/sddiaz/Portfolio-Projects", // Update with actual repo
      liveUrl: "http://clippit.somee.com/",
    },
    {
      id: 5,
      title: "Desktop Calculator",
      description:
        "A WPF desktop calculator with dark mode and custom animations. Built from a Dribbble design inspiration, featuring XAML layouts and two-operand functionality. My first major project showcasing UI design skills.",
      technologies: [".NET", "WPF", "C#", "XAML"],
      category: "desktop",
      image:
        "https://user-images.githubusercontent.com/101738608/197716595-29a3c9fe-ef55-44b0-b27d-e248e2e3325e.png",
      githubUrl: "https://github.com/sddiaz/Portfolio-Projects", // Update with actual repo
      liveUrl: undefined, // Desktop app, no live URL
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: <Apps /> },
    { id: "web", label: "Web Apps", icon: <Web /> },
    { id: "mobile", label: "Mobile", icon: <Apps /> },
    { id: "desktop", label: "Desktop", icon: <Code /> },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleMouseMove = (e: React.MouseEvent, projectId: number) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Web />;
      case "mobile":
        return <Apps />;
      case "fullstack":
        return <Code />;
      default:
        return <Apps />;
    }
  };

  return (
    <div className="works-container" ref={containerRef}>
      {/* Animated Background */}
      <div className="works-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`floating-shape shape-${i + 1}`}
              style={{
                animationDelay: `${i * 0.5}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.icon}
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card`}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoveredProject(project.id)}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Card Glow Effect */}
            <div className="card-glow"></div>

            {/* Project Image */}
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  // Fallback gradient background if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.style.background =
                    "linear-gradient(135deg, var(--accent), var(--wildCard))";
                }}
              />
              <div className="image-overlay">
                <div className="overlay-icons">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Launch />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="project-info">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Effect Particles */}
            {hoveredProject === project.id && (
              <div className="hover-particles">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
