import { Board } from "@/models/Board";

import { ActivityDrawer } from "./ActivityDrawer";

export function BingoBoard({ board }: { board: Board }) {
  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {board.map((teamActivity, index) => (
        <ActivityDrawer
          key={teamActivity.activity.boardOrder}
          teamActivity={teamActivity}
          index={index}
        />
      ))}
    </div>
  );
}
