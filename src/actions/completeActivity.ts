"use server";
import "server-only";

import { auth } from "@/actions/auth";
import { updateTeamSquare } from "@/services/activity";

/**
 * Complete the activity for a given team auth code and activity ID.
 *
 * @param activityId Activity ID to complete.
 * @param answer The 6-character answer code to validate.
 */
export async function completeActivity(activityId: string): Promise<void> {
  // TODO: STUB
  console.log(`completeActivity() called with activityId: ${activityId}`);

  const { teamId } = await auth();
  console.log(teamId);
  await updateTeamSquare(teamId || "", activityId);
}
