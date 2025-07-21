import React, { useRef } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer.tsx";
import ScrollIndicator from "./Components/Scroll/Scroll.tsx";
import About from "./Pages/About/About.tsx";
import Experience from "./Pages/Experience/Experience.tsx";
import Projects from "./Pages/Projects/Projects.tsx";
import Title from "./Pages/Title/Title.tsx";

function App() {
  const composition = useRef(null);

  return (
    <div className="App" ref={composition}>
      <ScrollIndicator />
      <Title />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
