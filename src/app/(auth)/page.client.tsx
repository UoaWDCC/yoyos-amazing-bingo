"use client";

import useGetAllTeams from "@/queries/useGetAllTeams";
import useGetTeam from "@/queries/useGetTeam";
import useGetTime from "@/queries/useTimeEXAMPLE";

export default function Home() {
  // High-quality integration testing
  const { data: time, isLoading: timeIsLoading } = useGetTime();
  const { data: allTeams, isLoading: allTeamsIsLoading } = useGetAllTeams();
  const { data: team, isLoading: teamIsLoading } = useGetTeam("ausa");

  return (
    <>
      <div>
        {" "}
        {timeIsLoading ? (
          <p className="bg-red-200">Time is loading</p>
        ) : (
          <h1 className="bg-red-200">{time}</h1>
        )}
      </div>
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
