import { and, eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable } from "@/db/schema";

export const completeTeamActivity = async (
  teamId: string,
  activityId: string,
): Promise<void> => {
  await db
    .update(teamActivitiesTable)
    .set({ isCompleted: true })
    .where(
      and(
        eq(teamActivitiesTable.teamId, teamId),
        eq(teamActivitiesTable.activityId, activityId),
      ),
    );
};

// Could merge this with the above function if you like
/**
 * Complete an activity for a given team
 * @param teamId The ID of the team
 * @param activityId The ID of the activity to complete
 * @param answer The answer to the activity
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function completeActivityAndUpdateBoard({
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

  await completeTeamActivity(teamId, activityId);
}
