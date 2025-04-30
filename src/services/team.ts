import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { BoardSchema } from "@/models/Board";

export const getTeamByCode = async (code: string) => {
  return await db.query.teamsTable.findFirst({
    where: eq(teamsTable.code, code),
  });
};

export const getTeamById = async (id: string) => {
  return await db.query.teamsTable.findFirst({
    where: eq(teamsTable.id, id),
  });
};

export async function getBoardByTeamId(teamId: string) {
  const result = await db
    .select()
    .from(teamActivitiesTable)
    .innerJoin(
      activitiesTable,
      eq(teamActivitiesTable.activityId, activitiesTable.id),
    )
    .where(eq(teamActivitiesTable.teamId, teamId));

  const board = result.map((row) => ({
    completed: row.team_activities.completed,
    points: row.activities.basePoints,
    activity: row.activities,
  }));

  return parseZod(BoardSchema, board);
}

export async function getAllTeams() {
  return await db.query.teamsTable.findMany();
}