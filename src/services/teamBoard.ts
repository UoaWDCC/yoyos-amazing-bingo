import { db } from "@/db/connection";
import { squaresTable, activitiesTable } from "@/db/schema";
import { BoardSchema } from "@/models/Board";
import { parseZod } from "@/utils/zod";
import { eq } from "drizzle-orm";

export async function getTeamBoard(teamId: string) {
    const board = await db
      .select()
      .from(squaresTable)
      .innerJoin(
        activitiesTable,
        eq(squaresTable.activityId, activitiesTable.id)
      )
      .where(eq(squaresTable.teamId, teamId));


    return parseZod(BoardSchema, board)
  }