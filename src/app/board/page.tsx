"use client";

import "@/components/ui/drawer";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Crown } from "lucide-react";

import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import CardStack from "@/components/ui/svg/CardStack";
import { getTeamTotalPoints } from "@/logic/points/getTeamTotalPoints";
import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

import { BingoBoard } from "./_components/BingoBoard";

export default function BoardPage() {
  const { data: teamId, isLoading } = useAuth();
  const { data: team } = useGetTeam(
    !isLoading && teamId && teamId !== "admin" ? teamId : null,
  );
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!teamId) router.replace("/");
    else if (teamId === "admin") router.replace("/admin");
  }, [isLoading, teamId, router]);

  if (isLoading || teamId === "admin" || !team) return null;

  return (
    <NormalLayout title="Board">
      <div className="flex w-full justify-center">
        <Pill>{getTeamTotalPoints(team)}pts</Pill>
      </div>
      <div className="flex flex-col gap-8">
        <BingoBoard board={team.board} specialActivity={team.specialActivity} />
      </div>
      <div className="flex w-full justify-center gap-4">
        <Link href="/leaderboard">
          <Pill size="large" variant="brand">
            <Crown color="white" />
          </Pill>
        </Link>
        <Link href="/collection">
          <Pill size="large" variant="brand">
            <CardStack />
          </Pill>
        </Link>
      </div>
    </NormalLayout>
  );
}
