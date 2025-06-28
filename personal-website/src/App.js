import { CheckCircle, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Circle } from "react-awesome-shapes/dist/shapes/circle";
import { Diamond } from "react-awesome-shapes/dist/shapes/diamond";
import "./App.css";
import YoutubeEmbed from "./Components/YoutubeEmbed.tsx";
import EarthScene from "./Scenes/EarthScene";
import SatelliteScene from "./Scenes/SatelliteScene";
import UfoScene from "./Scenes/UfoScene";
import "./styles/ParallaxEffect.scss";

function App() {
  // Variables
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

  // Life goals checklist data
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

  // Nerd facts data
  const nerdFacts = [
    "I've been doing video editing since I was 14",
    "My daily ride is a CBR500R motorcycle",
    "I love Fujifilm strictly for the aesthetic",
    "I built a 7,500+ follower Instagram page around video edits in high school",
    "I'm happy you read this far",
  ];

  // Animations
  // useLayoutEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "instant",
  //   });

  //   let ctx = gsap.context(() => {
  //     const timeline = gsap.timeline();
  //     timeline
  //       .from(["#card", "#navbar"], {
  //         delay: 0.8,
  //         duration: 1,
  //         opacity: 0,
  //         y: "+=30",
  //       })
  //       .from("#intro-text", {
  //         opacity: 0,
  //         y: "+=30",
  //         duration: 1,
  //       })
  //       .from(["#sub-1", "#sub-2", "#sub-3"], {
  //         opacity: 0,
  //         y: "+=30",
  //         stagger: 0.2,
  //       })
  //       .from(
  //         [
  //           "#button-1",
  //           "#button-2",
  //           "#button-3",
  //           "#shape-1",
  //           "#shape-2",
  //           "#shape-3",
  //         ],
  //         {
  //           opacity: 0,
  //           x: "-=30",
  //           stagger: 0.2,
  //         }
  //       )
  //       .from("#sceneTitle", {
  //         opacity: 0,
  //         y: "+=30",
  //         stagger: 0.2,
  //       })
  //       .from("#scene", {
  //         opacity: 0,
  //         y: "+=30",
  //         stagger: 0.2,
  //       })
  //       .from(["#earth", "#invite"], {
  //         opacity: 0,
  //         y: "+=30",
  //         stagger: 0.2,
  //       });
  //   }, composition);

  //   return () => ctx.revert();
  // }, []);

  const handleProfileClick = () => {
    window.open("https://www.linkedin.com/in/santiagoddiaz", "_blank");
  };

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleLeave = () => {
    setIsHovering(false);
  };

  // Custom Cursor
  // useEffect(() => {
  //   const cursor = document.getElementById("cursor");
  //   const littleCursor = document.getElementById("littleCursor");

  //   if (!cursor || !littleCursor) return;

  //   let mouseX = 0;
  //   let mouseY = 0;
  //   let cursorX = 0;
  //   let cursorY = 0;
  //   let littleCursorX = 0;
  //   let littleCursorY = 0;

  //   // Smooth cursor movement with requestAnimationFrame
  //   const updateCursor = () => {
  //     // Smooth interpolation for main cursor
  //     cursorX += (mouseX - cursorX) * 0.1;
  //     cursorY += (mouseY - cursorY) * 0.1;

  //     // Faster interpolation for little cursor
  //     littleCursorX += (mouseX - littleCursorX) * 0.3;
  //     littleCursorY += (mouseY - littleCursorY) * 0.3;

  //     cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  //     littleCursor.style.transform = `translate(${littleCursorX}px, ${littleCursorY}px)`;

  //     requestAnimationFrame(updateCursor);
  //   };

  //   // Mouse move handler - just update mouse position
  //   const handleMouseMove = (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //   };

  //   // Start the animation loop
  //   updateCursor();

  //   // Add event listener
  //   document.addEventListener("mousemove", handleMouseMove);

  //   // Handle hover effects
  //   const elements = document.querySelectorAll(".mouse");

  //   const handleMouseEnter = () => {
  //     cursor.classList.add("large-cursor");
  //     littleCursor.classList.add("littleLarge-cursor");
  //   };

  //   const handleMouseLeave = () => {
  //     cursor.classList.remove("large-cursor");
  //     littleCursor.classList.remove("littleLarge-cursor");
  //   };

  //   elements.forEach(element => {
  //     element.addEventListener("mouseenter", handleMouseEnter);
  //     element.addEventListener("mouseleave", handleMouseLeave);
  //   });

  //   // Cleanup
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     elements.forEach(element => {
  //       element.removeEventListener("mouseenter", handleMouseEnter);
  //       element.removeEventListener("mouseleave", handleMouseLeave);
  //     });
  //   };
  // }, []);

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
      {/* Custom Cursor */}
      {/* <div id="cursor" className="cursor"></div>
      <div id="littleCursor" className="littleCursor"></div> */}

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
        <div className="aboutContainer">
          <div className="Who pageTitle">
            Who am <div className="regular"> I? </div>
          </div>
          <div>
            {/* Abstract Section */}
            <div className="aboutSection">
              <h2 className="aboutSectionTitle">Abstract</h2>
              <div className="aboutDivider"></div>
              <p className="aboutAbstract">
                I'm Santi, a software engineer at Walmart Global Tech with a
                degree in computer engineering, pursuing my master's in comp sci
                at Georgia Tech. I specialize in building clean, user-focused
                interfaces and bring a strong eye for design through experience
                in UI/UX and creative technologies.
              </p>
            </div>

            <div className="flexRow">
              <div className="flexCol">
                {/* Life Goals Section */}
                <div className="aboutSection">
                  <h2 className="aboutSectionTitle">Bucket List</h2>
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
                <div className="aboutSection">
                  <h2 className="aboutSectionTitle">
                    Nerd facts & random stuff
                  </h2>
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
                <div className="aboutSection">
                  <h2 className="aboutSectionTitle">Socials</h2>
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
                <div className="aboutSection">
                  <h2 className="aboutSectionTitle">Favorite Songs</h2>
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
                <div className="aboutSection">
                  <h2 className="aboutSectionTitle">Coding Fuel</h2>
                  <div className="aboutDivider"></div>
                  <div className="spotifyContainer">
                    <YoutubeEmbed />
                  </div>
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
      </div>

      {/* PROJECTS SECTION */}
      <div id="Projects" className="Page">
        <div className="Where pageTitle">Featured Projects</div>
      </div>
    </div>
  );
}

export default App;
