import { redirect } from "next/navigation";

import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

import { ActivityDrawer } from "./ActivityDrawer";

export function BingoBoard() {
  const { data: teamId } = useAuth();
  const { data: team } = useGetTeam(teamId ?? null);

  if (teamId === "admin") redirect("/admin");
  if (team === "NONE") redirect("/");
  if (team === undefined) return <div>Loading...</div>;

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
