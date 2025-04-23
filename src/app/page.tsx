"use client";

import useCompleteActivity from "@/queries/useCompleteActivity";
import useGetAllTeams from "@/queries/useGetAllTeams";
import useGetTeam from "@/queries/useGetTeam";
import useGetTime from "@/queries/useTimeEXAMPLE";

export default function Home() {
  // High-quality integration testing
  const { data: time, isLoading: timeIsLoading } = useGetTime();
  const { data: team, isLoading: teamIsLoading } = useGetTeam("code", "teamId");
  const { data: allTeams, isLoading: allTeamsIsLoading } = useGetAllTeams("code");

  return (
    <>
      <p>
        By default, this data is cached for 2s and refetched when you refocus
        the page. Try change tabs and back!
      </p>
      {timeIsLoading ? <p className="bg-red-200">Time is loading</p> : <h1 className="bg-red-200">{time}</h1>}
      {teamIsLoading ? <p className="bg-emerald-200">Loading team...</p> : <h2 className="bg-emerald-200">{team?.name}</h2>}
      {allTeamsIsLoading ? <p className="bg-amber-200">Loading teams...</p> : <div className="bg-amber-200">{allTeams?.map(team => <div key={team.id}>{team.name}</div>)}</div>}
    </>
  );
}