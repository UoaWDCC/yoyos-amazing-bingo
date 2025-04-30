"use client";

import useGetAllTeams from "@/queries/useGetAllTeams";
import useGetTeam from "@/queries/useGetTeam";

export default function Home() {
  // High-quality integration testing
  const { data: allTeams, isLoading: allTeamsIsLoading } = useGetAllTeams();
  const { data: team, isLoading: teamIsLoading } = useGetTeam("ausa");

  return (
    <>
      {teamIsLoading ? (
        <p className="bg-emerald-200">Loading team...</p>
      ) : (
        <h2 className="bg-emerald-200">{team?.name}</h2>
      )}
      {allTeamsIsLoading ? (
        <p className="bg-amber-200">Loading teams...</p>
      ) : (
        <div className="bg-amber-200">
          {allTeams?.map((team) => <div key={team.id}>{team.name}</div>)}
        </div>
      )}
    </>
  );
}
