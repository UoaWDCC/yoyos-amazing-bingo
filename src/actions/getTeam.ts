"use server";

import { Team } from "@/models/Team";

/**
 * Fetches the team info (including board) for a given team ID.
 *
 * @param code The team auth code. Teams have access to their own team/board only. Admins can access all teams/boards.
 * @param teamId The ID of the team to fetch the board for.
 * @returns The team info (including board) for the given team ID.
 */
export async function getTeam(code: string, teamId: string): Promise<Team> {
  // TODO: STUB
  console.log(code, teamId);

  const dummyTeam = {
    id: teamId,
    name: "Dummy Team",
    code: "dummyCode",
    board: dummyBoard,
  };

  return dummyTeam;
}
