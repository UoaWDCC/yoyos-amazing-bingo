"use client";

import { useMemo } from "react";

import { ActivityDrawer } from "@/app/board-old/_components/ActivityDrawer";

type BingoBoardProps = {
  teamId: string;
};

export function BingoBoard({ teamId }: BingoBoardProps) {
  // mock data
  const squares = Array.from({ length: 16 }).map((_, index) => ({
    completed: Math.random() > 0.8,
    points: 1 + Math.floor(Math.random() * 3),
    activity: {
      id: `${index}`,
      name: `Activity ${index}`,
      description: `Description ${index}`,
      x: index % 4,
      y: Math.floor(index / 4),
    },
  }));

  const sortedSquares = useMemo(() => {
    return squares?.sort((a, b) => {
      if (a.activity.y === b.activity.y) {
        return a.activity.x - b.activity.x;
      }
      return a.activity.y - b.activity.y;
    });
  }, [squares]);

  // TODO: add loading skeleton back
  // if (isLoading || !sortedSquares) {
  //   return <BingoBoardSkeleton />;
  // }

  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {sortedSquares.map((square, index) => (
        <ActivityDrawer
          key={`${square.activity.x}-${square.activity.y}`}
          square={square}
          index={index}
        />
      ))}
    </div>
  );
}