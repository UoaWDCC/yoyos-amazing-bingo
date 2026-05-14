import React from "react";

import { JailImage } from "@/components/ui/jailImage/JailImage";
import { Pill } from "@/components/ui/pill";

import { useCard } from "./Provider";

const StateCollectingDisplay = ({
  handleAnimating,
}: {
  handleAnimating: () => void;
}) => {
  const { title, imageKey } = useCard();
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <Pill className="darkout">{title}</Pill>
        <p className="darkout">You have solved the challenge</p>
        <div className="darkout-center">
          <JailImage
            cardImageName={imageKey}
            size="lg"
            className="animate-pulse"
          />
        </div>
        <button className="cursor-pointer" onClick={handleAnimating}>
          <Pill className="darkout">Rescue</Pill>
        </button>
      </div>
    </>
  );
};

export default StateCollectingDisplay;
