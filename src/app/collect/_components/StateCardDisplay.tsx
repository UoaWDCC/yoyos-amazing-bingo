import React from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Pill } from "@/components/ui/pill";

import CardDisplay from "./CardDisplay";

const StateCardDisplay = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Heading.h2>You&apos;ve Collected</Heading.h2>
          <Pill>SNORELAX</Pill>
          <CardDisplay />
          <Button className="w-min rounded-full px-8">Go back</Button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default StateCardDisplay;
