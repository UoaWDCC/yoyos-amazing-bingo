"use server";




import "server-only";



import { auth } from "@/actions/auth";
import { sendInvalidationCodes } from "@/revalidation/sendInvalidationCode";
import { completeActivityAndUpdateBoard } from "@/services/activityServices";





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

  await completeActivityAndUpdateBoard({ teamId, activityId, answer });

  //TODO: Send invalidation codes
  sendInvalidationCodes([
    `getBoard/${teamId}`,
    `getTeam/${teamId}`,
    `getAllTeams`,
  ]);
}