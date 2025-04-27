"use server";

import { Team } from "@/models/Team";
import { getSquares } from "@/services/getSquares";
import { getTeamSerivce } from "@/services/getTeam";

/**
 * Fetches the team info (including board) for a given team ID.
 *
 *
 * @param teamId The ID of the team to fetch the board for.
 * @returns The team info (including board) for the given team ID.
 */
export async function getTeam(teamId: string): Promise<Team> {
  const team = await getTeamSerivce(teamId);
  const teamSquare = await getSquares(teamId);
  const res = { ...team, board: teamSquare };
  return res;
}
