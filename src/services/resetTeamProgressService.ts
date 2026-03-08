import { inArray } from "drizzle-orm";

import { db } from "@/db/connection";
import { teamActivitiesTable } from "@/db/schema";

export async function resetTeamProgress(teamIds?: string[]) {
  if (teamIds && teamIds.length > 0) {
    await db
      .update(teamActivitiesTable)
      .set({ isCompleted: false })
      .where(inArray(teamActivitiesTable.teamId, teamIds));
    console.log(`Reset progression for teams: ${teamIds.join(", ")}`);
  } else {
    await db.update(teamActivitiesTable).set({ isCompleted: false });
    console.log("Reset progression for all teams");
  }
}
