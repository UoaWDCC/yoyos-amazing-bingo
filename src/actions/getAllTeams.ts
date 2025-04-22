"use server";

import { Team } from "@/models/Team";

/**
 * Fetches the team info (including board) for a given team ID.
 *
 * @param code The team auth code. Teams have access to their own team/board only. Admins can access all teams/boards.
 * @param teamId The ID of the team to fetch the board for.
 */
export async function getAllTeams(code: string): Promise<Team[]> {
  // TODO: STUB
  console.log(code);

  const dummyBoard = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ];

  const dummyTeam = {
    id: "dummyId",
    name: "Dummy Team",
    code: "dummyCode",
    board: dummyBoard.concat(),
  };

  const secondDummyTeam = {
    id: "dummyId2",
    name: "Second Dummy Team",
    code: "dummyCode2",
    board: dummyBoard.concat(),
  };

  return [dummyTeam, secondDummyTeam];
}
