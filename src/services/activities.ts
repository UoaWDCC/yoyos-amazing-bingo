import "server-only";

import { db } from "@/db/connection";

export async function getActivities() {
  return await db.query.activitiesTable.findMany();
}
