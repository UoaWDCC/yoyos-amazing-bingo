"use client";

import "@/components/ui/drawer";

import { BingoBoard } from "@/app/(auth)/board/_components/BingoBoard";
import { Pill } from "@/components/ui/pill";
import { Team } from "@/models/Team";
import useGetTeam from "@/queries/useGetTeam";

interface BoardClientPageProps {
  teamId: string;
  initialTeamData: Team;
}

export default function BoardClientPage({
  teamId,
  initialTeamData,
}: BoardClientPageProps) {
  const { data: team = initialTeamData } = useGetTeam(teamId);

  return (
    <>
      <div className="flex w-full justify-center gap-2">
        <Pill>{team.points}pts</Pill>
      </div>
      <BingoBoard teamId={teamId} />
      <div className="flex w-full justify-center gap-2">
        <>
          <Pill>4</Pill>
          <Pill>Webster&apos;s groceries</Pill>
        </>
      </div>
    </>
  );
}
