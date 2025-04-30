import { and, eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable } from "@/db/schema";

export const getTeamSquare = async (id: string) => {
  return await db.query.teamActivitiesTable.findFirst({
    where: eq(teamActivitiesTable.teamId, id),
  });
};

export const updateTeamSquare = async (teamId: string, activityId: string) => {
  await db
    .update(teamActivitiesTable)
    .set({ completed: true })
    .where(
      and(
        eq(teamActivitiesTable.teamId, teamId),
        eq(teamActivitiesTable.activityId, activityId),
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

  if (activity.code !== answer) {
    throw new Error("Incorrect answer");
  }

  updateTeamSquare(teamId, activityId);
}
