import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, squaresTable, teamsTable } from "@/db/schema";
import { BoardSchema } from "@/models/Board";
import { parseZod } from "@/utils/zod";

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
    .from(squaresTable)
    .innerJoin(activitiesTable, eq(squaresTable.activityId, activitiesTable.id))
    .where(eq(squaresTable.teamId, teamId));

  const board = result.map((row) => ({
    completed: row.squares.completed,
    points: row.activities.points,
    activity: row.activities,
  }));

  return parseZod(BoardSchema, board);
}

export async function getAllTeams() {
  return await db.query.teamsTable.findMany();
}
