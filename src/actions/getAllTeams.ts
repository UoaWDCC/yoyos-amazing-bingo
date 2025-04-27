"use server";

import { Team } from "@/models/Team";

/**
 * Fetches all teams (including boards).
 *
 * @param code Auth code. Needs to be admin for now.
 * @returns All teams (including boards).
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
    points: 24,
    board: dummyBoard.concat(),
  };

  const secondDummyTeam = {
    id: "dummyId2",
    name: "Second Dummy Team",
    code: "dummyCode2",
    points: 48,
    board: dummyBoard.concat(),
  };

  const thirdDummyTeam = {
    id: "dummyId3",
    name: "Third Dummy Team",
    code: "dummyCode3",
    points: 48,
    board: dummyBoard.concat(),
  };

  return [dummyTeam, secondDummyTeam, thirdDummyTeam];
}
