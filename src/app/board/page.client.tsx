"use client";

import "@/components/ui/drawer";

import { BingoBoard } from "@/app/board/_components/BingoBoard";
import { Pill } from "@/components/ui/pill";
import { Team } from "@/models/Team";
import useGetTeam from "@/queries/useGetTeam";
import env from "@/lib/env";
import { redirect } from "next/navigation";

type BoardClientPageProps = {
  teamId: string;
  initialTeamData: Team;
};

export default function BoardClientPage({
  teamId,
  initialTeamData,
}: BoardClientPageProps) {
  if (!teamId) {
    redirect("/");
  }
  if (teamId === env.ADMIN_ID) {
    redirect("/leaderboard");
  }

  const { data: team = initialTeamData, isLoading } = useGetTeam(teamId);

  return (
    <>
      <div className="flex w-full justify-center gap-2">
        <Pill>{team.points}pts</Pill>
      </div>
      <BingoBoard board={team.board} isLoading={isLoading} />
      <div className="flex w-full justify-center gap-2">
        <>
          <Pill>4</Pill>
          <Pill>Webster&apos;s groceries</Pill>
        </>
      </div>
    </>
  );
}
