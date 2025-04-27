"use server";

import "server-only";

import { auth } from "@/actions/auth";
import { sendInvalidationCodes } from "@/actions/sendInvalidationCode";
import { updateTeamSquare } from "@/services/activity";

/**
 * Complete the activity for a given team auth code and activity ID.
 *
 * @param activityId Activity ID to complete.
 * @param answer The 6-character answer code to validate.
 */
export async function completeActivity(
  activityId: string,
  answer: string,
): Promise<void> {
  const { teamId } = await auth();
  if (!teamId) {
    throw new Error("Unauthorized");
  }

  if (!answer || answer.length !== 6) {
    throw new Error("Invalid answer format");
  }

  await updateTeamSquare(teamId || "", activityId);
  // TODO: Implement actual answer validation
  if (false) {
    throw new Error("Incorrect answer");
  }

  //TODO: Send invalidation codes
  sendInvalidationCodes([
    `getBoard/${teamId}`,
    `getTeam/${teamId}`,
    `getAllTeams`,
  ]);
}
