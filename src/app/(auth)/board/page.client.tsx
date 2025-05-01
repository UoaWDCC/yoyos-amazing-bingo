"use client";

import "@/components/ui/drawer";

import { BingoBoard } from "@/app/(auth)/board/_components/BingoBoard";
import { Pill } from "@/components/ui/pill";

export default function BoardClientPage() {
  // const { data: team = initialTeamData } = useGetTeam("aspa");

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
