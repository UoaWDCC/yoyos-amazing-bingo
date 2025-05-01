import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Board, BoardSchema } from "@/models/Board";

// TODO: merge this with team
export async function getBoardByTeamId(teamId: string): Promise<Board> {
  const TeamActivityAndActivityRows = await db
    .select()
    .from(teamActivitiesTable)
    .innerJoin(
      activitiesTable,
      eq(teamActivitiesTable.activityId, activitiesTable.id),
    )
    .where(eq(teamActivitiesTable.teamId, teamId));

  const unSortedboard = TeamActivityAndActivityRows.map((row) => ({
    isCompleted: row.team_activities.completed,
    points: row.activities.basePoints,
    activity: row.activities,
  }));

  const board = unSortedboard.sort(
    (a, b) => a.activity.boardOrder - b.activity.boardOrder,
  );

  return parseZod(BoardSchema, board, "services/old/boardServices.ts");
}
