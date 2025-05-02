"use client";

import Image from "next/image";

import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import PixelArrowL from "@/components/ui/svg/PixelArrowL";

import headingPic from "./_assets/headingPicture.png";
import LeaderboardListItem from "./_components/LeaderboardListItem";
import useAuth from "@/queries/useAuth";
import useGetAllTeams from "@/queries/useGetAllTeams";

export default function Leaderboard() {
  const { data: teamId } = useAuth();
  const { data: teams } = useGetAllTeams(); // Won't include top 5 if not admin

  if (!teams) return null;
  const isAdmin = teamId === "admin";
  const isInTop5 = !isAdmin && teams.findIndex((team) => team.id === teamId) === -1;

  return (
    <NormalLayout title="Leaderboard">
      {/* Questionably hardcoded spacing with margin because NormalLayout doesn't accept class override and I can't be bothered changing it */}
      <Back />
      <div className="flex flex-col gap-6 overflow-auto px-2">
        {!isAdmin && <div className="relative w-full">
          <Image
            src={headingPic}
            alt="Leaderboard"
            className="mask-center"
            width={680}
            height={240}
          />
        </div>}
        {isInTop5 && (
          <div className="flex w-full items-center justify-center gap-4">
            <PixelArrowL className="rotate-180 animate-[arrow-left_1s_infinite_ease-in-out]" />
            <Pill variant="gold">You&apos;re in the top 5!</Pill>
            <PixelArrowL className="animate-[arrow-left_1s_infinite_ease-in-out]" />
          </div>
        )}
        <ul className="divide-foreground/15 flex flex-col gap-0 divide-y-2">
          {teams.map((team, i) => {
            return (
              <LeaderboardListItem
                key={i}
                rank={isAdmin ? i + 1 : i + 6}
                team={team}
                isYou={teamId === team.id}
              />
            );
          })}
        </ul>
      </div>
    </NormalLayout>
  );
}
