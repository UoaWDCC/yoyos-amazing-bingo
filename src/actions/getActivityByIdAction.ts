// src/actions/getActivityByIdAction.ts
"use server";

import "server-only";

import { getActivityById } from "@/services/getActivityByIdService";

export async function getActivityByIdAction(activityId: string) {
  return getActivityById(activityId);
}
