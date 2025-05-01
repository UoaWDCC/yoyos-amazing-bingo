"use client";

import { useMemo } from "react";

import { useRevalidationSocket } from "@/hooks/useRevalidationSocket";

import { ActivityDrawer } from "./ActivityDrawer";
import { BingoBoardSkeleton } from "./BingoBoardSkeleton";

type BingoBoardProps = {
  teamId?: string;
};

export function BingoBoard() {
  // const { data: squares, isLoading } = useGetBoard(teamId);

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

  useRevalidationSocket({
    onInvalidation: (codes) => {
      console.log("Invalidation codes", codes);
    },
  });

  const sortedSquares = useMemo(() => {
    return squares?.sort((a, b) => {
      if (a.activity.y === b.activity.y) {
        return a.activity.x - b.activity.x;
      }
      return a.activity.y - b.activity.y;
    });
  }, [squares]);

  // if (isLoading || !sortedSquares) {
  //   return <BingoBoardSkeleton />;
  // }

  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {sortedSquares.map((square) => (
        <ActivityDrawer
          key={`${square.activity.x}-${square.activity.y}`}
          square={square}
        />
      ))}
    </div>
  );
}
