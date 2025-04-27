import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Pill } from "@/components/ui/pill";

import CardDisplay from "./CardDisplay";

const StateCardDisplay = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Heading.h2
            className="slide-up"
            style={{ "--delay": 0.5 } as React.CSSProperties}
          >
            You&apos;ve Collected
          </Heading.h2>
          <Pill
            className="slide-up"
            style={{ "--delay": 1.5 } as React.CSSProperties}
          >
            SNORELAX
          </Pill>
          <CardDisplay />
          <Link
            className="slide-up"
            style={{ "--delay": 2.5 } as React.CSSProperties}
            href="/board"
          >
            <Button className="w-min rounded-full px-8">Back to board</Button>
          </Link>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default StateCardDisplay;
