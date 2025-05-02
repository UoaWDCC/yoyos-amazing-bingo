"use client";

import { useMemo } from "react";

import { TeamActivityClient } from "@/models/TeamCollection";

import { ActivityDrawer } from "./ActivityDrawer";

type BingoBoardProps = {
  teamActivities: TeamActivityClient[];
};

export function BingoBoard({ teamActivities }: BingoBoardProps) {
  const sortedSquares = useMemo(() => {
    return teamActivities?.sort((a, b) => {
      return a.order - b.order;
    });
  }, [teamActivities]);

  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {sortedSquares.map((square, index) => (
        <ActivityDrawer
          key={square.order}
          teamActivity={square}
          index={index}
        />
      ))}
    </div>
  );
}
