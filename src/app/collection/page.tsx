"use client";

import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";
import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

import { UnknownCard } from "./_components/Card";
import ViewCardDrawer from "./_components/ViewCardDrawer";

export default function CodePage() {
  const { data: teamId } = useAuth();
  const { data: team } = useGetTeam(teamId ?? null);

  if (!team) return null;
  const board = team.board;

  return (
    <NormalLayout title="Collection">
      <Back />
      <div className="flex w-full justify-center">
        <Pill>
          {board.filter((teamActivity) => teamActivity.isCompleted).length}
          /16 cards
        </Pill>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-y-auto px-2">
        {board.map((teamActivity, index) =>
          teamActivity.isCompleted ? (
            <ViewCardDrawer
              teamActivity={teamActivity}
              isSpecialActivity={
                team.specialActivity === teamActivity.activity.boardOrder
              }
              key={index}
            />
          ) : (
            <UnknownCard key={index} />
          ),
        )}
      </div>
    </NormalLayout>
  );
}
