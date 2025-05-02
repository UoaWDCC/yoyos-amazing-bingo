import { Team } from "@/models/Team";

import {
  isColumnComplete,
  isDiagonalComplete,
  isRowComplete,
} from "./boardComboChecks";
import { getPointsOfActivityForTeam } from "./getPointsOfActivityForTeam";

export function getTeamTotalPoints(team: Team): number {
  const board = team.board;
  let totalPoints = 0;

  // Sum up all completed squares' points (factors in +1 point for special activity)
  for (const teamActivity of board) {
    if (teamActivity.isCompleted) {
      totalPoints += getPointsOfActivityForTeam(teamActivity.activity, team);
    }
  }

  // +1 point per row
  for (let i = 0; i < 4; i++) {
    if (isRowComplete(board, i)) {
      totalPoints++;
    }
  }

  // +1 point per column
  for (let i = 0; i < 4; i++) {
    if (isColumnComplete(board, i)) {
      totalPoints++;
    }
  }

  // +1 point per diagonal
  if (isDiagonalComplete(board, "backslash")) totalPoints++; // \
  if (isDiagonalComplete(board, "forwardslash")) totalPoints++; // /

  return totalPoints;
}
