import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Activity, ActivitySchema } from "@/models/Activity";

export const getActivityById = async (activityId: string) => {
  const rawActivity = await db.query.activitiesTable.findFirst({
    where: eq(activitiesTable.id, activityId),
  });

  if (!rawActivity) {
    throw new Error(`Activity with id ${activityId} not found`);
  }

  const activity: Activity = rawActivity;
  return parseZod(ActivitySchema, activity);
};
