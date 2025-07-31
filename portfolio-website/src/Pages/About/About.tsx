import { CheckCircle, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import YoutubeEmbed from "../../Components/YoutubeEmbed.tsx";
import "./AboutStyles.css";

const About = () => {
  //#region Variables

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
    "I started video editing at age 14",
    "My daily ride is a CBR500R motorcycle",
    "I love Fujifilm !",
    "I built a 7,500+ follower Instagram page around video edits in high school",
    "My dream job title is 'Principle Frontend Engineer'",
    "I'm happy you read this far :)",
  ];

  //#endregion

  //#region Functions

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  //#endregion

  //#region Component

  return (
    <div id="About" className="Page">
      <div className="Who pageTitle">
        About <div className="regular"> me </div>
      </div>
      <div>
        {/* Abstract Section */}
        <div className="card abstract">
          <h2 className="cardTitle">Abstract</h2>
          <div className="aboutDivider"></div>
          <p className="aboutAbstract">
            I'm Santi, a software engineer at Walmart with a Bachelor's degree
            in computer engineering, pursuing my Master's in comp sci at Georgia
            Tech. I specialize in building clean, user-focused interfaces and
            bring a strong eye for design through experience in UI/UX and
            creative technologies.
          </p>
        </div>
        <div className="aboutContainer">
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
                      handleSocialClick(
                        "https://www.linkedin.com/in/santiagoddiaz"
                      )
                    }
                  >
                    <LinkedIn />
                  </button>
                  <button
                    className="socialButton mouse"
                    onClick={() =>
                      handleSocialClick("https://github.com/sddiaz")
                    }
                  >
                    <GitHub />
                  </button>
                  <button
                    className="socialButton mouse"
                    onClick={() =>
                      handleSocialClick("https://www.instagram.com/cautified")
                    }
                  >
                    <Instagram />
                  </button>
                </div>
              </div>

              {/* Spotify Section */}
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

              {/* Coding Fuel Section */}
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
    </div>
  );

  //#endregion
};

export default About;
