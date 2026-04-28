"use server";

import "server-only";

import { auth } from "@/actions/authActions";
import env from "@/lib/env";
import { Activity } from "@/models/Activity";
import { sendInvalidationCode } from "@/revalidation/sendInvalidationCode";
import { updateActivity } from "@/services/updateActivityService";

export async function updateActivityAction(activity: Activity): Promise<void> {
  const { teamId } = await auth();
  if (teamId !== env.ADMIN_ID) throw new Error("Unauthorized");

  await updateActivity(activity);

  sendInvalidationCode(`getActivity/${activity.id}`);
  sendInvalidationCode("getAllActivities");
}
