import React, { useState, useRef } from "react";
import {
  GitHub,
  Launch,
  Code,
  Web,
  Apps,
  HourglassEmpty,
  InfoOutlined,
  OpenInNew,
} from "@mui/icons-material";
import "./ProjectsStyles.css";
// Removed MUI Tooltip import

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  categories: ("web" | "mobile" | "design" | "desktop")[]; // Changed to array
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  inProgress?: boolean;
}

const Projects: React.FC = () => {
  //#region Variables

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showInfoTooltip, setShowInfoTooltip] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      categories: ["web"], // Single category
      image:
        "https://github.com/sddiaz/Portfolio/assets/101738608/4745d92b-b1d0-47cb-b719-d5bfe96ca3dc",
      githubUrl:
        "https://github.com/sddiaz/Portfolio/tree/main/EventBuzz%20(Event%20Finder)",
      liveUrl: "https://eventbuzzz.netlify.app/",
      inProgress: false,
    },
    {
      id: 2,
      title: "Amazon Clone",
      description:
        "A full-stack Amazon clone with modern web technologies. Features user authentication, shopping cart, secure Stripe payments, order history, and product browsing with search functionality.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "Stripe",
        "RTK Query",
        "Vercel",
      ],
      categories: ["web"],
      image:
        "https://github.com/user-attachments/assets/5736d62e-74a4-4b69-8e7b-aff18ca11e08",
      githubUrl: "https://github.com/sddiaz/amazon-clone",
      liveUrl: "https://amazon-clone-lake-pi.vercel.app/",
      inProgress: true,
    },
    {
      id: 3,
      title: "Vizme",
      description:
        "An interactive data visualization platform that transforms complex datasets into beautiful, insightful charts and graphs. Built with modern React and D3.js for dynamic, responsive visualizations.",
      technologies: [
        "React",
        "D3.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Express",
      ],
      categories: ["web"],
      githubUrl:
        "https://github.com/sddiaz/Portfolio/tree/86fc3f090c506f5fc66c2259fb1541890088c6be/Vizme%20(Algorithms%20and%20Data%20Structures%20Vizualizer)/vizme",
      inProgress: true,
    },
    {
      id: 4,
      title: "WiD - Daily Journal App",
      description:
        "A full-stack daily journal application with user authentication and real-time database. Users can create, edit past entries, and maintain a personal journal with a clean, intuitive interface. My largest project to date.",
      technologies: [
        "React",
        "Firebase Auth",
        "Firebase Realtime DB",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      categories: ["web"],
      githubUrl:
        "https://github.com/sddiaz/Portfolio/tree/main/WiD%20(Journal%20Web%20App)",
      liveUrl: undefined,
      inProgress: true,
    },
    {
      id: 5,
      title: "Mini Travel Journal",
      description:
        "A responsive static page built with React to practice component architecture, props, and data mapping. Features a clean design showcasing travel destinations with mobile-friendly layout.",
      technologies: ["React", "JSX", "CSS"],
      categories: ["web", "mobile"], // Multiple categories
      image:
        "https://user-images.githubusercontent.com/101738608/211128167-4807830d-8285-4c0d-9d3c-bca8ef4ca33e.png",
      githubUrl:
        "https://github.com/sddiaz/Portfolio/tree/main/React%20(Tutorial%20Based)/Mini%20Travel%20Journal",
      liveUrl: "https://minitraveljournal.netlify.app/",
      inProgress: false,
    },
    {
      id: 6,
      title: "Password Generator",
      description:
        "A feature-rich password generator with focus on UI/UX design. Includes custom switches, reactive sliders, hover effects, infinite carousel, and comprehensive customization options with edge case handling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["web"], // Single category
      image:
        "https://user-images.githubusercontent.com/101738608/200132021-1fd026ec-58e9-4883-9014-1e2c5e48c04a.png",
      githubUrl:
        "https://github.com/sddiaz/Portfolio/tree/main/Password%20Generator",
      liveUrl: "https://my-first-password-generator.netlify.app/",
      inProgress: false,
    },
    {
      id: 7,
      title: "Clippit - Online Clipboard",
      description:
        "A web-based message retrieval system with database integration. Features unique ID generation, error checking, and responsive design. My first personal HTML/CSS project with full-stack capabilities.",
      technologies: ["ASP.NET", "Microsoft SQL", "HTML", "CSS", "C#"],
      categories: ["web", "mobile"], // Multiple categories
      image:
        "https://user-images.githubusercontent.com/101738608/197719421-a2647341-fe8b-4753-b377-5989eec35c6c.png",
      githubUrl:
        "https://github.com/sddiaz/Portfolio/tree/main/Clippit%20(Clipboard%20Web%20App)",
      inProgress: false,
    },
    {
      id: 8,
      title: "Desktop Calculator",
      description:
        "A WPF desktop calculator with dark mode and custom animations. Built from a Dribbble design inspiration, featuring XAML layouts and two-operand functionality. My first major project showcasing UI design skills.",
      technologies: [".NET", "WPF", "C#", "XAML"],
      categories: ["desktop"], // Single category
      image:
        "https://user-images.githubusercontent.com/101738608/197716595-29a3c9fe-ef55-44b0-b27d-e248e2e3325e.png",
      githubUrl:
        "https://github.com/sddiaz/Portfolio/tree/main/Desktop%20Calculator",
      liveUrl: undefined,
      inProgress: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: <Apps /> },
    { id: "in-progress", label: "In Progress", icon: <HourglassEmpty /> },
    { id: "web", label: "Web Apps", icon: <Web /> },
    { id: "mobile", label: "Mobile", icon: <Apps /> },
    { id: "desktop", label: "Desktop", icon: <Code /> },
  ];

  // Updated filtering logic to handle multiple categories and in-progress
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : selectedCategory === "in-progress"
        ? projects.filter((project) => project.inProgress)
        : projects.filter((project) =>
            project.categories.includes(selectedCategory as any)
          );

  //#endregion

  //#region Functions

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

  // Helper function to get primary category for display
  const getPrimaryCategoryIcon = (categories: string[]) => {
    const primaryCategory = categories[0];
    return getCategoryIcon(primaryCategory);
  };

  //#endregion

  //#region Component

  return (
    <div id="Projects" className="Page projects">
      <div className="Where pageTitle">
        <div className="title-with-info">
          <span>Featured Projects</span>
          <div className="current-project-info">
            <div
              className="info-badge"
              title="Want to see my latest coding style? Check out this website's source code!"
              onMouseEnter={() => setShowInfoTooltip(true)}
              onMouseLeave={() => setShowInfoTooltip(false)}
              onClick={() =>
                window.open(
                  "https://github.com/sddiaz/Personal-Website",
                  "_blank"
                )
              }
            >
              <InfoOutlined className="info-icon" />
              <span className="info-text">Latest Code</span>
              <OpenInNew className="external-icon" />
              {showInfoTooltip && (
                <div className="custom-tooltip">
                  Want to see my latest coding style? Check out this website's
                  source code!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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
          {filteredProjects
            .sort((a, b) => {
              let isAInProgress = a.inProgress ? 1 : 0;
              let isBInProgress = b.inProgress ? 1 : 0;

              return isAInProgress - isBInProgress;
            })
            .map((project, index) => (
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

                {/* In Progress Badge */}
                {project.inProgress && (
                  <div className="progress-badge">
                    <HourglassEmpty />
                    <span>In Progress</span>
                  </div>
                )}

                {/* Project Image */}
                <div className="project-image">
                  {project.image && (
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
                  )}
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
                      {getPrimaryCategoryIcon(project.categories)}
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

                  {/* Display multiple category badges if project has more than one */}
                  {project.categories.length > 1 && (
                    <div className="category-badges">
                      {project.categories.map((category, i) => (
                        <span key={i} className={`category-badge ${category}`}>
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
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
    </div>
  );

  //#endregion
};

export default Projects;
