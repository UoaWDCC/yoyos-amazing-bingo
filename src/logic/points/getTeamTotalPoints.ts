import { Team } from "@/models/Team";

import { getPointsOfActivityForTeam } from "./getPointsOfActivityForTeam";

export function getTeamTotalPoints(team: Team): number {
  const board = team.board;
  let totalPoints = 0;

  // Count each square (factors in special activity gives +1 point)
  for (const teamActivity of board) {
    totalPoints += getPointsOfActivityForTeam(teamActivity.activity, team);
  }

  // Rows, cols, diagonals todo

  return totalPoints;
}
