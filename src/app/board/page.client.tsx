"use client";

import "@/components/ui/drawer";

import { redirect } from "next/navigation";

import { BingoBoard } from "@/app/board/_components/BingoBoard";
import { Team } from "@/models/Team";

type BoardClientPageProps = {
  teamId: string;
  initialTeamData: Team;
  adminId: string;
};

export default function BoardClientPage({
  teamId,
  initialTeamData,
  adminId,
}: BoardClientPageProps) {
  if (!teamId) {
    redirect("/");
  }
  if (teamId === adminId) {
    redirect("/leaderboard");
  }

  // const { data: team = initialTeamData, isLoading } = useGetTeam(teamId);

  return (
    <>
      <div className="flex w-full justify-center gap-2">
        {/* <Pill>{team.points}pts</Pill> */}
      </div>
      <BingoBoard />
      {/* <div className="flex w-full justify-center gap-2">
          <Pill>4</Pill>
          <Pill>Webster&apos;s groceries</Pill>
      </div> */}
    </>
  );
}
