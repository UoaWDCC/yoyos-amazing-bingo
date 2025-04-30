import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { teamActivitiesTable } from "@/db/schema";

// TODO: should be merged into team
export const getTeamActivity = async (id: string) => {
  return await db.query.teamActivitiesTable.findFirst({
    where: eq(teamActivitiesTable.teamId, id),
  });
};
