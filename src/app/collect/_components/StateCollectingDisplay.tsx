import React from "react";

import BlindBall from "@/app/collect/_components/BlindBall";
import Darkball from "@/app/collect/_components/Darkball";
import { Pill } from "@/components/ui/pill";
import { Pokeball } from "@/components/ui/pokeball";

import { useCard } from "./Provider";

const StateCollectingDisplay = ({
  handleAnimating,
}: {
  handleAnimating: () => void;
}) => {
  const { title } = useCard();
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <BlindBall />
        <Pill className="darkout">{title}</Pill>
        <p className="darkout">You have solved the challenge</p>
        <div className="darkout-center relative">
          <Darkball className="absolute inset-0" />
          <Pokeball variant="normal" className="size-32 animate-pulse" />
        </div>
        <button className="cursor-pointer" onClick={handleAnimating}>
          <Pill className="darkout">Collect</Pill>
        </button>
      </div>
    </>
  );
};

export default StateCollectingDisplay;
