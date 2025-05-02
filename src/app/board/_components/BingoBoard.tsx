import { redirect } from "next/navigation";

import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

import { ActivityDrawer } from "./ActivityDrawer";

export function BingoBoard() {
  const { data: teamId } = useAuth();
  if (teamId === "admin") {
    redirect("/admin");
  }
  const { data: team } = useGetTeam(teamId ?? null);
  if (!team) return null;

  const squares = team.board;

  return (
    <div className="grid grid-cols-4 gap-2 px-8">
      {squares.map((square, index) => (
        <ActivityDrawer
          key={square.activity.boardOrder}
          teamActivity={square}
          index={index}
        />
      ))}
    </div>
  );
}
