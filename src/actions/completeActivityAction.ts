"use server";

import "server-only";

import { redirect } from "next/navigation";

import { auth } from "@/actions/authActions";
import { sendInvalidationCodes } from "@/revalidation/sendInvalidationCode";
import { completeTeamActivity } from "@/services/completeActivityService";
import { getActivityById } from "@/services/getActivityByIdService";

/**
 * Complete the activity for a given team auth code and activity ID.
 *
 * @param activityId Activity ID to complete.
 * @param activityCode The 6-character answer code to validate.
 */
export async function completeActivityAction(
  activityId: string,
  activityCode: string,
): Promise<void> {
  const { teamId } = await auth();

  if (!teamId) {
    redirect("/");
  }

  if (!activityCode || activityCode.length !== 6) {
    throw new Error("Incorrect activity code");
  }

  const correctCode = (await getActivityById(activityId)).code;
  if (correctCode !== activityCode) {
    console.log(
      `Team ${teamId} made incorrect attempt ${activityCode} for activity ${activityId}`,
    );
    throw new Error("Incorrect activity code");
  }

  console.log(`Team ${teamId} completed activity ${activityId}`);
  await completeTeamActivity(teamId, activityId);

  // TODO: Send invalidation codes
  sendInvalidationCodes([
    `getBoard/${teamId}`,
    `getTeam/${teamId}`,
    `getAllTeams`,
  ]);
}