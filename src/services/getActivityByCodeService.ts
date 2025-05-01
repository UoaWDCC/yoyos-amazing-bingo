"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Activity, ActivitySchema } from "@/models/Activity";

export const getActivityByCode = async (activityCode: string) => {
  const rawActivity = await db.query.activitiesTable.findFirst({
    where: eq(activitiesTable.code, activityCode),
  });

  if (!rawActivity) {
    throw new Error(`Activity with id ${activityCode} not found`);
  }

  const activity: Activity = rawActivity;
  return parseZod(
    ActivitySchema,
    activity,
    "services/getActivityByIdService.ts",
  );
};
