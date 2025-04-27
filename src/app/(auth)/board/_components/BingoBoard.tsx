"use client";

import { useMemo } from "react";

import { useRevalidationSocket } from "@/hooks/useRevalidationSocket";
import useGetBoard from "@/queries/useGetBoard";

import { ActivityDrawer } from "./ActivityDrawer";
import { BingoBoardSkeleton } from "./BingoBoardSkeleton";

type BingoBoardProps = {
  teamId: string;
};

export function BingoBoard({ teamId }: BingoBoardProps) {
  const { data: squares, isLoading } = useGetBoard(teamId);
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

  if (isLoading || !sortedSquares) {
    return <BingoBoardSkeleton />;
  }

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
