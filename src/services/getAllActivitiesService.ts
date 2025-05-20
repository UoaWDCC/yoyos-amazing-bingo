import { asc } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable } from "@/db/schema";

// need zod validation
export function getAllActivitiesService() {
  return db.query.activitiesTable.findMany({
    orderBy: [asc(activitiesTable.id)],
  });
}
