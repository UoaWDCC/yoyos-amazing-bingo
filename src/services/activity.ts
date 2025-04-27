import { and, eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, squaresTable } from "@/db/schema";

export const getTeamSquare = async (id: string) => {
  return await db.query.squaresTable.findFirst({
    where: eq(squaresTable.teamId, id),
  });
};

export const updateTeamSquare = async (teamId: string, activityId: string) => {
  await db
    .update(squaresTable)
    .set({ completed: true })
    .where(
      and(
        eq(squaresTable.teamId, teamId),
        eq(squaresTable.activityId, activityId),
      ),
    );
};

/**
 * Complete an activity for a given team
 * @param activityId The ID of the activity to complete
 * @param answer The answer to the activity
 */
export async function completeActivityAndUpdateBoard({
  teamId,
  activityId,
  answer,
}: {
  teamId: string;
  activityId: string;
  answer: string;
}) {
  const activity = await db.query.activitiesTable.findFirst({
    where: eq(activitiesTable.id, activityId),
  });

  if (!activity) {
    throw new Error("Activity not found");
  }

  if (activity.slug !== answer) {
    throw new Error("Incorrect answer");
  }

  updateTeamSquare(teamId, activityId);
}
