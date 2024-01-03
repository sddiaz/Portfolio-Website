import { useState } from 'react';
import './App.css';
import Avatar from '@mui/material/Avatar';

function App() {

  const [isHovered, setIsHovering] = useState(false); 

  const handleHover = () => {
    setIsHovering(true); 
  }

  const handleLeave = () => {
    setIsHovering(false); 
  }

  return (
    <div className="App">
      <div className="backgroundSheet">
        <div className="backgroundCircle"/>
      </div>
      <div className="titleCard">
        <div className="titleCard--border">
          <div className="titleCard--top">
            <div className="titleCard--top--text">
              <div>
                Hello ! 👋 I'm Santiago.  
                <div className="titleCard--top--subText">
                Software Engineer @ Walmart Global Tech
                </div>
              </div>        
            </div>
            <div className="titleCard--top--image" 
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}>
              <Avatar
                alt="Santiago Diaz"
                src="/static/images/headshot_color.jpg"
                sx={{
                  width: 200,
                  height: 200,
                  opacity: isHovered ? 1 : 0,
                  position: 'absolute',
                  zIndex: isHovered ? 2 : 1,
                  transition: 'opacity 1s, height 0.3s, z-index 0.3s',
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
                  transition: 'opacity 1s, height 0.3s, z-index 0.3s',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
