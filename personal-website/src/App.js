import { CheckCircle, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Circle } from "react-awesome-shapes/dist/shapes/circle";
import { Diamond } from "react-awesome-shapes/dist/shapes/diamond";
import "./App.css";
import YoutubeEmbed from "./Components/YoutubeEmbed.tsx";
import Experience from "./Pages/Experience.tsx";
import EarthScene from "./Scenes/EarthScene";
import SatelliteScene from "./Scenes/SatelliteScene";
import UfoScene from "./Scenes/UfoScene";
import "./styles/ParallaxEffect.scss";

const particlesConfig = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 6,
          },
          bubble: {
            distance: 250,
            duration: 2,
            size: 8,
            opacity: 0.8,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: [
            "#62ffdc",
            "#d062ff",
            "#1cc99e",
            "#338573",
            "#f3f3f3",
            "#c9d2f5",
          ], // Your CSS color variables
        },
        links: {
          color: "#62ffdc", // Your accent color
          distance: 120,
          enable: true,
          opacity: 0.15,
          width: 0.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: {
            min: 0.1,
            max: 0.6, // Slightly slower for elegant movement
          },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150, // Adjusted for title page size
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
            startValue: "random",
            mode: "auto",
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 0.5,
            max: 3.5,
          },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
            startValue: "random",
            mode: "auto",
          },
        },
        // Remove potentially unsupported properties
        // twinkle, rotate, shadow, motion may not be supported in your version
      },
      detectRetina: true,
};

const ParticlesBackground = React.memo(() => {
  const [initializeParticles, setInitializeParticles] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => {
      setInitializeParticles(true);
    });
  }, []);

  if (!initializeParticles) return null;

  return <Particles id="tsparticles" options={particlesConfig} />;
});


function App() {
  // Variables
  const [initializeParticles, setInitializeParticles] = useState(false);
  const [programFlip, setProgramFlip] = useState(false);
  const [isHovered, setIsHovering] = useState(false);
  const composition = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const lifeGoals = [
    { text: "Earn a B.S. in Computer Engineering", completed: true },
    { text: "Land first Software Engineering role", completed: true },
    { text: "Publish a polished portfolio website", completed: true },
    { text: "Travel to 10 countries", completed: false },
    { text: "M.S. in Computer Science", completed: false },
    { text: "Achieve Principle Engineer title", completed: false },
    { text: "Start tech-focused content creation", completed: false },
    {
      text: "Get featured or speak at a tech/design conference",
      completed: false,
    },
    { text: "Build a game!!", completed: false },
    { text: "Marry my girlfriend :D", completed: false },
  ];

  const nerdFacts = [
    "I've been doing video editing since I was 14",
    "My daily ride is a CBR500R motorcycle",
    "I love Fujifilm strictly for the aesthetic",
    "I built a 7,500+ follower Instagram page around video edits in high school",
    "I'm happy you read this far",
  ];

  const particlesConfigRef = useRef(particlesConfig);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version
      await loadBasic(engine);
    }).then(() => {
      setInitializeParticles(true);
    });
  }, []);

  const handleProfileClick = () => {
    window.open("https://www.linkedin.com/in/santiagoddiaz", "_blank");
  };

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleLeave = () => {
    setIsHovering(false);
  };

  // Scrolling to various sections
  const aboutScroll = (e) => {
    document.querySelector("#About").scrollIntoView({
      behavior: "smooth",
    });
    setAnchorEl(null);
  };

  const experienceScroll = (e) => {
    document.querySelector("#Experience").scrollIntoView({
      behavior: "smooth",
    });
    setAnchorEl(null);
  };

  const projectsScroll = (e) => {
    document.querySelector("#Projects").scrollIntoView({
      behavior: "smooth",
    });
    setAnchorEl(null);
  };

  const handleProgramFlip = () => {
    setProgramFlip(!programFlip);
  };

  return (
    <div className="App" ref={composition}>
      <div className="title">
        <div id="navbar" className="navbar">
          <div id="bigButton" className="navComponentBig">
            <button
              className={open ? "btn btnActive mouse menuButton" : "btn mouse"}
              onClick={handleClick}
              id="aboutBtn"
            >
              Menu ≡
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ background: "rgba(0,0,0,0.3)" }}
            >
              <MenuItem className="menuItem" onClick={aboutScroll}>
                About
              </MenuItem>
              <MenuItem className="menuItem" onClick={experienceScroll}>
                Experience
              </MenuItem>
              <MenuItem className="menuItem" onClick={projectsScroll}>
                Projects
              </MenuItem>
            </Menu>
          </div>
          <div id="button-1" className="navComponent mouse">
            <button onClick={aboutScroll} id="aboutBtn" className="btn mouse">
              About
            </button>
          </div>
          <div id="button-2" className="navComponent mouse">
            <button
              onClick={experienceScroll}
              id="workBtn"
              className="btn mouse"
            >
              Experience
            </button>
          </div>
          <div id="button-3" className="navComponent mouse">
            <button
              onClick={projectsScroll}
              id="contactBtn"
              className="btn mouse"
            >
              Projects
            </button>
          </div>
        </div>

        <div className="backgroundSheet">
          {<ParticlesBackground />}
          <div className="backgroundCircle" />
        </div>

        <div className="middle">
          <div className="titleCard">
            <div className="shapeWrapper">
              <div id="card" className="shapes">
                <div id="shape-1">
                  <Diamond
                    color="linear-gradient(135deg, #93c5fd, #3b82f6)"
                    size="10px"
                    zIndex={2}
                  />
                </div>
                <div id="shape-2">
                  <Circle
                    color="linear-gradient(135deg, #fff, #d062ff)"
                    size={["15px", "15px", "18px", "18px"]}
                    zIndex={2}
                  />
                </div>
                <div id="shape-3">
                  <Diamond
                    color="linear-gradient(135deg, #93c5fd, #3b82f6)"
                    size="10px"
                    zIndex={2}
                  />
                </div>
              </div>
            </div>

            <div id="card">
              <div className="titleCard--border">
                <div className="squares">
                  <div className="square1" />
                  <div className="square2" />
                  <div className="square3" />
                </div>
                <div className="titleCard--top">
                  <div className="titleCard--top--text">
                    <div>
                      <div id="intro-text" className="mouse">
                        Hey ! 👋 I'm Santiago.
                      </div>
                      <div id="sub-1" className="titleCard--top--subText">
                        Software Engineer
                      </div>
                      <div id="sub-2" className="titleCard--top--subText">
                        Digital Artist
                      </div>
                      <div id="sub-3" className="titleCard--top--subText">
                        Life-long Learner
                      </div>
                    </div>
                  </div>
                  <div
                    id="image"
                    onClick={handleProfileClick}
                    className="titleCard--top--image mouse"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                  >
                    <Avatar
                      alt="Santiago Diaz"
                      src="/static/images/headshot_color.jpg"
                      sx={{
                        border: "1px solid var(--wildCard)",
                        width: 200,
                        height: 200,
                        opacity: isHovered ? 1 : 0,
                        position: "absolute",
                        zIndex: isHovered ? 2 : 1,
                        transition: "opacity 1s, z-index 0.3s",
                        "@media (max-width: 600px)": {
                          width: 150,
                          height: 150,
                        },
                        "@media (min-width: 601px) and (max-width: 1200px)": {
                          width: "calc(150px + 15 * ((100vw - 600px) / 600))",
                          height: "calc(150px + 15 * ((100vw - 600px) / 600))",
                        },
                        "@media (min-width: 1201px)": {
                          width: 250,
                          height: 250,
                        },
                      }}
                    />
                    <Avatar
                      alt="Santiago Diaz"
                      src="/static/images/headshot.jpg"
                      sx={{
                        width: 200,
                        height: 200,
                        opacity: isHovered ? 0 : 1,
                        zIndex: isHovered ? 1 : 2,
                        transition: "opacity 1s, z-index 0.3s",
                        "@media (max-width: 600px)": {
                          width: 150,
                          height: 150,
                        },
                        "@media (min-width: 601px) and (max-width: 1200px)": {
                          width: "calc(150px + 15 * ((100vw - 600px) / 600))",
                          height: "calc(150px + 15 * ((100vw - 600px) / 600))",
                        },
                        "@media (min-width: 1201px)": {
                          width: 250,
                          height: 250,
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="circles">
                  <div className="circle1 circle" />
                  <div className="circle2 circle" />
                  <div className="circle3 circle" />
                </div>
              </div>
            </div>
          </div>

          <div
            id="sceneTitle"
            className="impactCard"
            style={{
              filter: "drop-shadow(2px 2px 0px #000000)",
              marginTop: "25px",
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            I want to make an <span className="highlight Impact">impact </span>{" "}
            on our <span className="highlight World">world </span> with{" "}
            <span className="highlight Tech">tech.</span>
          </div>

          <div id="earth" className="ThreeJsScenes">
            <SatelliteScene className="scene--satellite" />
            <EarthScene id="earth" className="scene--earth" />
            <UfoScene className="scene--ufo" />
          </div>
        </div>

        <div id="invite" className="invite">
          Get Started
          <img
            alt=""
            onClick={aboutScroll}
            className="invite--scroll mouse"
            src="/static/images/mouse-cursor.png"
          ></img>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div id="About" className="Page">
        <div className="Who pageTitle">
          About <div className="regular"> me </div>
        </div>
        <div>
          {/* Abstract Section */}
          <div className="card">
            <h2 className="cardTitle">Abstract</h2>
            <div className="aboutDivider"></div>
            <p className="aboutAbstract">
              I'm Santi, a software engineer at Walmart Global Tech with a
              degree in computer engineering, pursuing my master's in comp sci
              at Georgia Tech. I specialize in building clean, user-focused
              interfaces and bring a strong eye for design through experience in
              UI/UX and creative technologies.
            </p>
          </div>

          <div className="flexRow">
            <div className="flexCol">
              {/* Life Goals Section */}
              <div className="card">
                <h2 className="cardTitle">Bucket List</h2>
                <div className="aboutDivider"></div>
                <div className="goalsContainer">
                  <ul className="goalsList">
                    {lifeGoals.map((goal, index) => (
                      <li
                        key={index}
                        className={`goalItem ${
                          goal.completed ? "completed" : ""
                        }`}
                      >
                        <span className="goalText">{goal.text}</span>
                        {goal.completed && (
                          <CheckCircle className="checkIcon" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Nerd Facts Section - Full Width */}
              <div className="card">
                <h2 className="cardTitle">Nerd facts & random stuff</h2>
                <div className="aboutDivider"></div>
                <ul className="nerdFactsList">
                  {nerdFacts.map((fact, index) => (
                    <li key={index} className="nerdFact">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flexCol">
              {/* Socials Section */}
              <div className="card">
                <h2 className="cardTitle">Socials</h2>
                <div className="aboutDivider"></div>
                <div className="socialsContainer">
                  <button
                    className="socialButton mouse"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/santiagoddiaz",
                        "_blank"
                      )
                    }
                  >
                    <LinkedIn />
                  </button>
                  <button
                    className="socialButton mouse"
                    onClick={() =>
                      window.open("https://github.com/sddiaz", "_blank")
                    }
                  >
                    <GitHub />
                  </button>
                  <button
                    className="socialButton mouse"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/cautified",
                        "_blank"
                      )
                    }
                  >
                    <Instagram />
                  </button>
                </div>
              </div>

              {/* Spotify Section */}
              <div className="card">
                <h2 className="cardTitle">Favorite Songs</h2>
                <div className="aboutDivider"></div>
                <div className="spotifyContainer">
                  <iframe
                    title="marias"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/1ShRHPAiiIrh0arZbSFmx1?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowfullscreen=""
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
                    allowfullscreen=""
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
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Spotify Section */}
              <div className="card">
                <h2 className="cardTitle">Coding Fuel</h2>
                <div className="aboutDivider"></div>
                <div className="spotifyContainer">
                  <YoutubeEmbed />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div id="Experience" className="Page">
        <div className="What pageTitle">
          Experience <div className="regular"> and </div> Skills
        </div>
        <Experience />
      </div>

      {/* PROJECTS SECTION */}
      <div id="Projects" className="Page">
        <div className="Where pageTitle">Featured Projects</div>
      </div>
    </div>
  );
}

export default App;
