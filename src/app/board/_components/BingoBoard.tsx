"use client";

import { useMemo } from "react";

import { ActivityDrawer } from "./ActivityDrawer";

type BingoBoardProps = {
  teamId: string;
};

export function BingoBoard({ teamId }: BingoBoardProps) {
  console.log(teamId);

  // mock data
  const squares = Array.from({ length: 16 }).map((_, index) => ({
    isCompleted: Math.random() > 0.8,
    points: 1 + Math.floor(Math.random() * 3),
    activity: {
      id: `${index}`,
      name: `Activity ${index}`,
      description: `Description ${index}`,
      code: `code-${index}`,
      cardImageName: `image-${index}.png`,
      basePoints: 1 + Math.floor(Math.random() * 3),
      boardOrder: index,
    },
  }));

  const sortedSquares = useMemo(() => {
    return squares?.sort((a, b) => {
      return a.activity.boardOrder - b.activity.boardOrder;
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
          key={square.activity.boardOrder}
          teamActivity={square}
          index={index}
        />
      ))}
    </div>
  );
}
