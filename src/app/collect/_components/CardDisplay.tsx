"use client";

import React, { useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import WebsterCard from "./WebsterCard";

const CardDisplay = ({ delay = 1.25 }: { delay?: number }) => {
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
      style={{ "--delay": delay } as React.CSSProperties}
      className="slide-up aspect-square size-full"
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
          minPolarAngle={Math.PI / 2 - Math.PI / 8}
          maxPolarAngle={Math.PI / 2 + Math.PI / 8}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 2.1]} />
        <WebsterCard />
      </Canvas>
    </div>
  );
};

export default CardDisplay;
