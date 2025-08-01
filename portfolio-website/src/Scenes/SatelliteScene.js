import React, { useRef } from "react";
import { Canvas, useFrame, extend } from "react-three-fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Earth } from "../Components/Earth.tsx";
import { Satellite } from "../Components/Satellite.tsx";

extend({ OrbitControls });

const SatelliteScene = () => {
  return (
    <div className="scene--satellite">
      <Canvas className="satellite" shadows>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.9}
        enableZoom={false}       
        minDistance={80}
        maxDistance={60}
        enableRotate={true}      
        enablePan={false}         
        />
        <Scene />
      </Canvas>
      <svg className="satelliteCircle"  viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad"><stop stop-color="hsl(162, 100%, 58%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(270, 73%, 53%)" stop-opacity="1" offset="100%"></stop></linearGradient><filter id="nnneon-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feGaussianBlur stdDeviation="17 8" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter><filter id="nnneon-filter2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feGaussianBlur stdDeviation="10 17" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g stroke-width="16" stroke="url(#nnneon-grad)" fill="none"><circle r="297.5" cx="400" cy="400" filter="url(#nnneon-filter)"></circle><circle r="297.5" cx="412" cy="400" filter="url(#nnneon-filter2)" opacity="0.25"></circle><circle r="297.5" cx="388" cy="400" filter="url(#nnneon-filter2)" opacity="0.25"></circle><circle r="297.5" cx="400" cy="400"></circle></g></svg>
    </div>
  );
};

function Scene() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={1.5} />

      {/* Directional Light (Simulating Sun) */}
      <directionalLight position={[10, 10, 0]} intensity={5} castShadow />

      {/* Your Earth object with shadow */}
      <mesh castShadow>
        <Float speed={1.4} rotationIntensity={1.6} floatIntensity={1}>
          <Satellite />
        </Float>
      </mesh>
    </>
  );
}

export default SatelliteScene;
