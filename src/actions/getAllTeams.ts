"use server";

import { Team } from "@/models/Team";
import { getSquares } from "@/services/getSquares";
import { getTeams } from "@/services/getTeams";

/**
 * Fetches all teams (including boards).
 *
 * @param code Auth code. Needs to be admin for now.
 * @returns All teams (including boards).
 */
export async function getAllTeams(): Promise<Team[]> {
  const res = await getTeams();

  const teamsWithBoards = await Promise.all(
    res.map(async (row) => {
      const squares = await getSquares(row.id);

      return {
        id: row.id,
        name: row.name,
        code: row.code,
        board: squares,
      };
    }),
  );

  return teamsWithBoards;
}
