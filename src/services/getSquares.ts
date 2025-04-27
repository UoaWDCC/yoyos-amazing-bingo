"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { squaresTable } from "@/db/schema";

/**
 * Fetches all squares for a given teamId.
 *
 * @param teamId The ID of the team to fetch squares for.
 * @returns Array of squares for the team.
 */
export async function getSquares(teamId: string) {
  const squares = await db
    .select({
      x: squaresTable.x,
      y: squaresTable.y,
      completed: squaresTable.completed,
    })
    .from(squaresTable)
    .where(eq(squaresTable.teamId, teamId));

  return squares;
}
