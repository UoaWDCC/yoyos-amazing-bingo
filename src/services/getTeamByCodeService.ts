import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import {activitiesTable, teamActivitiesTable, teamsTable} from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";

import {BoardSchema} from "@/models/Board";

// TODO: these three need to get teamActivities and activities in a join, them assemble a complete team
export const getTeamByCode = async (code: string): Promise<Team> => {

  const rows = await db
      .select()
      .from(teamsTable)
      .innerJoin(teamActivitiesTable, eq(teamsTable.id, teamActivitiesTable.teamId))
      .innerJoin(activitiesTable, eq(teamActivitiesTable.activityId, activitiesTable.id))
      .where(eq(teamsTable.code, code));

  if (rows.length === 0) {
    throw new Error(`Team with id '${code}' not found`);
  }

  const { teams } = rows[0];

  // Build the board
  const unSortedBoard = rows.map((row) => ({
    isCompleted: row.team_activities.completed,
    points: row.activities.basePoints,
    activity: row.activities,
  }));

  const board = unSortedBoard.sort(
      (a, b) => a.activity.boardOrder - b.activity.boardOrder
  );

  // Calculate points (e.g. sum of completed activity points)
  const points = board
      .filter((entry) => entry.isCompleted)
      .reduce((sum, entry) => sum + entry.points, 0);

  const team: Team = {
    id: teams.id,
    code: teams.code,
    name: teams.name,
    points,
    board: parseZod(BoardSchema, board),
  };

  return parseZod(TeamSchema, team);
};
