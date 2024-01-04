import './App.css';
import Avatar from '@mui/material/Avatar';
import gsap from "gsap";
import { useState, useLayoutEffect, useRef, useEffect } from 'react';


function App() {
  
  // Variables

  const [isHovered, setIsHovering] = useState(false); 
  const composition = useRef(null); 

  // Animation Timeline
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline()
      timeline.from("#card", {
        delay: 0.3,
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
      })
    }, composition);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const inviteElement = document.querySelector('.invite');

    const fadeInTimeout = setTimeout(() => {
      inviteElement.classList.add('fade-in');
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => {
      clearTimeout(fadeInTimeout);
    };
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

  const handleScroll = (e) => {
    document.querySelector('#About').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="App" ref={composition}>
      <div className="title v">
        <div>
        </div>
        <div className="backgroundSheet">
          <div className="backgroundCircle"/>
        </div>
        <div className="titleCard">
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
                    Video Game Enthusiast
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
        <div className="invite" >
          Learn More
          <img onClick={handleScroll} className="invite--scroll" src="/static/images/mouse-cursor.png"
          ></img>
        </div>
      </div>
      <div id="About" className="Page"> 
       <div className="Who pageTitle">
          About <div className="regular">me</div>
       </div>
      </div>
      <div className="Page"> 
       <div className="What pageTitle">
          Work <div className="regular"> and </div> Skills
       </div>
      </div>
      <div className="Page"> 
       <div className="Where pageTitle">
          Say Hi
       </div>
      </div>
    </div>
  );
}

export default App;
