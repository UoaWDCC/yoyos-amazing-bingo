"use client";

import useGetBoard from "@/queries/useGetBoard";

import { ActivityDrawer } from "./ActivityDrawer";
import { useRevalidationSocket } from "@/hooks/useRevalidationSocket";

interface BingoBoardProps {
  teamId: string;
}

export function BingoBoard({ teamId }: BingoBoardProps) {
  const { data: squares } = useGetBoard(teamId);
  useRevalidationSocket({
    onInvalidation: (codes) => {
      console.log("Invalidation codes", codes);
    },
  });

  if (!squares) return null;

  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {squares.map((square) => (
        <ActivityDrawer
          key={`${square.activity.x}-${square.activity.y}`}
          square={square}
        />
      ))}
    </div>
  );
}
