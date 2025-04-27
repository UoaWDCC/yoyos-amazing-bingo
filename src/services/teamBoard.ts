import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, squaresTable } from "@/db/schema";
import { BoardSchema } from "@/models/Board";
import { parseZod } from "@/utils/zod";

export async function getTeamBoard(teamId: string) {
  const result = await db
    .select()
    .from(squaresTable)
    .innerJoin(activitiesTable, eq(squaresTable.activityId, activitiesTable.id))
    .where(eq(squaresTable.teamId, teamId));

  const board = result.map((row) => ({
    complete: row.squares.completed,
    points: row.activities.points,
    activity: row.activities,
  }));

  return parseZod(BoardSchema, board);
}
