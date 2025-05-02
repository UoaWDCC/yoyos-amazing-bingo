import { Board } from "@/models/Board";

import { ActivityDrawer } from "./ActivityDrawer";

type BingoBoardProps = {
  board: Board;
  specialActivity: number;
};

export function BingoBoard({ board, specialActivity }: BingoBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {board.map((teamActivity, i) => (
        <ActivityDrawer
          key={teamActivity.activity.boardOrder}
          teamActivity={teamActivity}
          index={i}
          isSpecialActivity={i === specialActivity}
        />
      ))}
    </div>
  );
}
