"use client";

import React, { useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import WebsterCard from "./WebsterCard";

const CardDisplay = () => {
  const [interacting, setInteracted] = useState(false);

  // debounce
  const timer = useRef<number | null>(null);

  const handleInteraction = () => {
    // clear respin timeout
    if (timer.current) clearTimeout(timer.current);
    setInteracted(true);
  };

  const handleEndInteraction = () => {
    // set respin timeout
    timer.current = window.setTimeout(() => {
      setInteracted(false);
      timer.current = null;
    }, 1000);
  };

  return (
    <div
      className="aspect-square size-full"
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
      onMouseOut={handleEndInteraction}
      onMouseUp={handleEndInteraction}
      onTouchEnd={handleEndInteraction}
    >
      <Canvas>
        <OrbitControls
          autoRotate={!interacting}
          autoRotateSpeed={Math.PI}
          dampingFactor={0.02}
          enableZoom={false}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 1.9]} />
        <WebsterCard />
      </Canvas>
    </div>
  );
};

export default CardDisplay;
