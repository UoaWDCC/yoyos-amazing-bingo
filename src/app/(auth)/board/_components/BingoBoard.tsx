"use client";

import useGetBoard from "@/queries/useGetBoard";

import { ActivityDrawer } from "./ActivityDrawer";

export function BingoBoard() {
  const { data: squares } = useGetBoard();

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
