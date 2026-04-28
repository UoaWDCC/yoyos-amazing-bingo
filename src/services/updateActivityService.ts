import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable } from "@/db/schema";
import { Activity } from "@/models/Activity";

export async function updateActivity(activity: Activity) {
  await db
    .update(activitiesTable)
    .set({
      name: activity.name,
      code: activity.code,
      cardImageName: activity.cardImageName,
      description: activity.description,
      basePoints: activity.basePoints,
      boardOrder: activity.boardOrder,
    })
    .where(eq(activitiesTable.id, activity.id));
}
