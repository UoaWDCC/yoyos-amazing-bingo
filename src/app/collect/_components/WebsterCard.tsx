"use client";

import { useRef } from "react";
import { Float, useTexture } from "@react-three/drei";
import { Group } from "three";

import { cards } from "@/assets/pokecards";

const WebsterCard = () => {
  const cardRef = useRef<Group>(null);
  const texture = useTexture({
    alpha: cards.mask.src,
    map: cards.images[0].src,
  });
  const backside = useTexture({
    alpha: cards.mask.src,
    map: cards.back.src,
  });

  const size = [1, 1.4] as const;

  return (
    <Float speed={2}>
      <ambientLight intensity={(2 * Math.PI) / 3} />

      <group ref={cardRef}>
        <mesh>
          <planeGeometry args={size} />
          <meshStandardMaterial
            map={texture.map}
            alphaMap={texture.alpha}
            transparent
          />
        </mesh>
        <mesh rotation={[0, Math.PI, 0]}>
          <planeGeometry args={size} />
          <meshStandardMaterial
            map={backside.map}
            alphaMap={backside.alpha}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
};

export default WebsterCard;
