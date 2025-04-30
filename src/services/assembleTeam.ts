import { parseZod } from "@/lib/zod";
import { BoardSchema } from "@/models/Board";
import { Team } from "@/models/Team";

type rawTeam = {
  teams: {
    id: string;
    name: string;
    code: string;
    specialActivity: number;
  };
  activities: {
    id: string;
    name: string;
    code: string;
    description: string;
    basePoints: number;
    boardOrder: number;
  };
  team_activities: {
    teamId: string;
    activityId: string;
    isCompleted: boolean;
  };
};

export const assembleTeams = (rawTeams: rawTeam[]): Team => {
  const { teams } = rawTeams[0];

  // Build the board
  const unSortedBoard = rawTeams.map((row) => ({
    isCompleted: row.team_activities.isCompleted,
    points: row.activities.basePoints,
    activity: row.activities,
  }));

  const board = unSortedBoard.sort(
    (a, b) => a.activity.boardOrder - b.activity.boardOrder,
  );

  // Calculate points (e.g. sum of completed activity points)
  const points = board
    .filter((entry) => entry.isCompleted)
    .reduce((sum, entry) => sum + entry.points, 0);

  return {
    id: teams.id,
    code: teams.code,
    name: teams.name,
    points,
    board: parseZod(BoardSchema, board),
    specialActivity: teams.specialActivity
  };
};
