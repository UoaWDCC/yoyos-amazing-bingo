"use server";

import { getTeamBoard } from "@/services/teamBoard";
import "server-only";

export async function getTeamPoints(teamId: string) {
  const board = await getTeamBoard(teamId);

  let points = 0;
  board.forEach((square) => {
    if (square.complete) {
      points += square.points;
    }
  });

  return points;
}
