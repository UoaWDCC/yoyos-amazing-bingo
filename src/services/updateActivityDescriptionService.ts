import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable } from "@/db/schema";

export async function updateActivityDescription(
  activityId: string,
  description: string,
) {
  await db
    .update(activitiesTable)
    .set({ description })
    .where(eq(activitiesTable.id, activityId));
}
