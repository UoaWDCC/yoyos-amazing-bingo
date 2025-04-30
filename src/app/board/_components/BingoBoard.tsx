"use client";

import { useMemo } from "react";

import { Board } from "@/models/Board";

import { ActivityDrawer } from "./ActivityDrawer";
import { BingoBoardSkeleton } from "./BingoBoardSkeleton";

type BingoBoardProps = {
  board?: Board;
  isLoading?: boolean;
};

export function BingoBoard({ board, isLoading }: BingoBoardProps) {
  const sortedSquares = useMemo(() => {
    return board?.sort((a, b) => a.activity.boardOrder - b.activity.boardOrder);
  }, [board]);

  if (isLoading || !sortedSquares) {
    return <BingoBoardSkeleton />;
  }

  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {sortedSquares.map((square) => (
        <ActivityDrawer key={square.activity.boardOrder} square={square} />
      ))}
    </div>
  );
}
