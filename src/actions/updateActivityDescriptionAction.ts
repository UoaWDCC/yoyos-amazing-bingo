"use server";

import "server-only";

import { auth } from "@/actions/authActions";
import { updateActivityDescription } from "@/services/updateActivityDescriptionService";

export async function updateActivityDescriptionAction(
  activityId: string,
  description: string,
): Promise<void> {
  const { teamId } = await auth();
  if (teamId !== "admin") throw new Error("Unauthorized");

  await updateActivityDescription(activityId, description);
}
