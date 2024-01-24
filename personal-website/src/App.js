import './App.css';
import './styles/ParallaxEffect.scss'
import Avatar from '@mui/material/Avatar';
import gsap from "gsap";
import React, { useState, useLayoutEffect, useRef } from 'react';
import { Circle } from 'react-awesome-shapes/dist/shapes/circle';
import { Diamond } from "react-awesome-shapes/dist/shapes/diamond";
import Tilt from 'react-parallax-tilt';
import EarthScene from './Scenes/EarthScene';
import SatelliteScene from './Scenes/SatelliteScene';
import UfoScene from './Scenes/UfoScene';
import Menu  from '@mui/material/Menu';
import MenuItem  from '@mui/material/MenuItem';
import { ArrowCircleDown } from '@mui/icons-material';

function App() {

  // Variables

  const [programFlip, setProgramFlip] = useState(false)
  const [aboutToggle, setAboutToggle] = useState(true);
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


  // Animations

  useLayoutEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Set behavior to 'auto' for instant scroll
    });

    let ctx = gsap.context(() => {

      const timeline = gsap.timeline()
      timeline.from(["#card", "#navbar"], {
        delay: 0.8,
        duration: 1,
        opacity: 0,
        y: "+=30",
      }).from("#intro-text", {
        opacity: 0,
        y: "+=30",
        duration: 1,
      }).from(["#sub-1", "#sub-2", "#sub-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.2
      }).from(["#button-1", "#button-2", "#button-3", "#shape-1", "#shape-2", "#shape-3"], {
        opacity: 0,
        x: "-=30",
        stagger: 0.2
      }).from("#sceneTitle", {
        opacity: 0,
        y: "+=30",
        stagger: 0.2
      }).from("#scene", {
        opacity: 0,
        y: "+=30",
        stagger: 0.2
      })
      .from(["#earth", "#invite"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.2
      })

    }, composition);

    return () => ctx.revert();

  }, []);

  const handleProfileClick = () => {
    window.open('https://www.linkedin.com/in/santiagoddiaz', '_blank');
  }
  const handleHover = () => {
    setIsHovering(true);
  }

  const handleLeave = () => {
    setIsHovering(false);
  }

  const aboutScroll = (e) => {
    document.querySelector('#About').scrollIntoView({
      behavior: 'smooth',
    });
    setAnchorEl(null);
  };

  const workScroll = (e) => {
    document.querySelector('#Work').scrollIntoView({
      behavior: 'smooth',
    });
    setAnchorEl(null);
  };

  const contactScroll = (e) => {
    document.querySelector('#Contact').scrollIntoView({
      behavior: 'smooth',
    });
    setAnchorEl(null);
  };

  const handleToggle = () => {
    setAboutToggle(!aboutToggle);
  };

  const handleProgramFlip = () => {
    setProgramFlip(!programFlip);
  }
  

  return (
    <div className="App" ref={composition}>
      <div className="title">
        <div id="navbar" className="navbar">
          <div id="bigButton" className="navComponentBig" >
            <button style={{fontSize: '25px', width: '25vw'}} className={open ? "btn btnActive" : "btn"} onClick={handleClick} id="aboutBtn" class="btn">
            Menu ≡
            </button>
            <Menu
              
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              sx={{background: 'rgba(0,0,0,0.3)'}}
            >
              <MenuItem className='menuItem' onClick={aboutScroll}>About Me</MenuItem>
              <MenuItem className='menuItem' onClick={workScroll}>My Work</MenuItem>
              <MenuItem className='menuItem' onClick={contactScroll}>Get in Touch</MenuItem>
            </Menu>
          </div>
          <div id="button-1" className="navComponent" >
            <button onClick={aboutScroll} id="aboutBtn" class="btn">About</button>
          </div>
          <div id="button-2" className="navComponent">
            <button  onClick={workScroll} id="workBtn" class="btn">Work</button>
          </div>
          <div id="button-3" className="navComponent">
            <button  onClick={contactScroll} id="contactBtn" class="btn">Contact</button>
          </div>
        </div>
        <div className="backgroundSheet">
          <div className="backgroundCircle"/>
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
                  size={['15px', '15px', '18px', '18px']}
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
              <div className="titleCard--border" >
                <div className="squares">
                  <div className="square1"/>
                  <div className="square2"/>
                  <div className="square3"/>
                </div>
                <div className="titleCard--top">
                  <div className="titleCard--top--text">
                    <div>
                      <div id="intro-text">
                        Hello ! 👋 I'm Santiago.
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
                  <div id="image" onClick={handleProfileClick} className="titleCard--top--image"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}>
                    <Avatar
                      alt="Santiago Diaz"
                      src="/static/images/headshot_color.jpg"
                      sx={{
                        border: "1px solid var(--wildCard)",
                        width: 200,
                        height: 200,
                        opacity: isHovered ? 1 : 0,
                        position: 'absolute',
                        zIndex: isHovered ? 2 : 1,
                        transition: 'opacity 1s, z-index 0.3s',
                        '@media (max-width: 600px)': {
                          width: 150,
                          height: 150,
                        },
                        '@media (min-width: 601px) and (max-width: 1200px)': {
                          width: 'calc(150px + 15 * ((100vw - 600px) / 600))', // Adjust this formula as needed
                          height: 'calc(150px + 15 * ((100vw - 600px) / 600))',
                        },
                        '@media (min-width: 1201px)': {
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
                        transition: 'opacity 1s, z-index 0.3s',
                        '@media (max-width: 600px)': {
                          width: 150,
                          height: 150,
                        },
                        '@media (min-width: 601px) and (max-width: 1200px)': {
                          width: 'calc(150px + 15 * ((100vw - 600px) / 600))', // Adjust this formula as needed
                          height: 'calc(150px + 15 * ((100vw - 600px) / 600))',
                        },
                        '@media (min-width: 1201px)': {
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
          <div id="sceneTitle" className="impactCard" style={{filter: 'drop-shadow(2px 2px 0px #000000)', marginTop: '25px', fontSize: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             I want to make an <span className="highlight Impact">impact </span> on our <span className="highlight World">world </span> with  <span className="highlight Tech">tech.</span>
          </div>
          <div id="earth" className="ThreeJsScenes">
            <SatelliteScene className="satellite"/>
            <EarthScene id="earth" className="earth"/>
            <UfoScene className="ufo"/>
          </div>
        </div>
        <div id="invite" className="invite" >
          Learn More
          <img alt='' onClick={aboutScroll} className="invite--scroll" src="/static/images/mouse-cursor.png"
          ></img>
        </div>
      </div>
      <div id="About" className="Page">
       <div className="Who pageTitle">
        <div className="aboutTitle">
          About <div className="regular">me</div>
        </div>
        <div className="aboutPage">
            <div className="aboutToggleSection">
              <div onClick={handleToggle} className="aboutToggle">
                    <div className={aboutToggle ? "aboutToggleSelected" : "aboutToggleUnselected"}>
                      Biography
                    </div>
                    <div className={!aboutToggle ? "aboutToggleSelected" : "aboutToggleUnselected"}>
                      Passions
                    </div>
              </div>
            </div>
            <div className="aboutSections">
                {aboutToggle &&
                <div className="storyPage">
                  Here's a brief biography
                </div>}
                {!aboutToggle &&
                <div className="passionsPage">
                  <div className="passionRow">
                    <div className="aboutPassion">
                        <Tilt
                        onClick={handleProgramFlip}
                        flipHorizontally={programFlip}
                        className="parallax-effect-glare-scale programming"
                        glarePosition='all'
                        perspective={1000}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.05}
                      >
                        <div className="inner-element">
                          <div>Programming</div>
                        </div>
                        </Tilt>
                    </div>
                    <div className="aboutPassion">
                        <Tilt
                        className="parallax-effect-glare-scale art"
                        glarePosition='all'
                        perspective={1000}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.05}
                      >
                        <div className="inner-element">
                          <div>Digital Art</div>
                        </div>
                        </Tilt>
                    </div>
                  </div>
                  <div className="passionRow">
                    <div className="aboutPassion">
                        <Tilt
                        className="parallax-effect-glare-scale travel"
                        glarePosition='all'
                        perspective={1000}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.05}
                      >
                        <div className="inner-element">
                          <div>Travel</div>
                        </div>
                        </Tilt>
                    </div>
                    <div className="aboutPassion">
                        <Tilt
                        className="parallax-effect-glare-scale film"
                        glarePosition='all'
                        perspective={1000}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.05}
                      >
                        <div className="inner-element">
                          <div>Film</div>
                        </div>
                        </Tilt>
                    </div>
                  </div>
                </div>}
            </div>
        </div>
       </div>
      </div>
      <div id="Work" className="Page">
       <div className="What pageTitle">
          Work <div className="regular"> and </div> Skills
       </div>
      </div>
      <div id="Contact" className="Page">
       <div className="Where pageTitle">
          Say Hi
       </div>
      </div>
    </div>
  );
}

export default App;
