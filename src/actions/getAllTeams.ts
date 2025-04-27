"use server";

import { Team } from "@/models/Team";
import { getTeams } from "@/services/getTeams";

/**
 * Fetches all teams (including boards).
 *
 * @returns All teams (including boards).
 */
export async function getAllTeams(): Promise<Team[]> {
  const res = (await getTeams()) as Team[];
  const dummyBoard = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ];
  const newRes = res.map((row) => {
    return {
      id: row.id,
      name: row.name,
      code: row.code,
      board: dummyBoard,
    };
  });
  return newRes;
  // // TODO: STUB
  // console.log(code);
  //
  //
  // const dummyTeam = {
  //   id: "dummyId",
  //   name: "Dummy Team",
  //   code: "dummyCode",
  //   board: dummyBoard.concat(),
  // };
  //
  // const secondDummyTeam = {
  //   id: "dummyId2",
  //   name: "Second Dummy Team",
  //   code: "dummyCode2",
  //   board: dummyBoard.concat(),
  // };
  //
  // return [dummyTeam, secondDummyTeam];
}
