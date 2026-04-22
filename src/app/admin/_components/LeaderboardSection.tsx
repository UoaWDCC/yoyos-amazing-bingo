"use client";

import useGetAllTeams from "@/queries/useGetAllTeams";

import LeaderboardListItem from "../../leaderboard/_components/LeaderboardListItem";

export function LeaderboardSection() {
  const { data: teams } = useGetAllTeams();

  if (!teams) return null;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Leaderboard</h2>
      <ul className="divide-foreground/15 flex flex-col gap-0 divide-y-2">
        {teams.map((team, i) => (
          // This is located under leader/_components
          <LeaderboardListItem key={team.id} rank={i + 1} team={team} isYou={false} />
        ))}
      </ul>
    </div>
  );
}
