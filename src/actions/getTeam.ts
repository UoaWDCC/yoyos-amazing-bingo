"use server";

import { Team } from "@/models/Team";
import "server-only";

/**
 * Fetches the team info (including board) for a given team ID.
 *
 * @param teamId The ID of the team to fetch the board for.
 * @returns The team info (including board) for the given team ID.
 */
export async function getTeam(teamId: string): Promise<Team> {
  // TODO: STUB
  console.log(teamId);

  const dummyBoard = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ];

  const dummyTeam = {
    id: teamId,
    name: "Dummy Team",
    code: "dummyCode",
    points: 48,
    board: dummyBoard,
  };

  return dummyTeam;
}
