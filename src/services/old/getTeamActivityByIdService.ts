import { and, eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { TeamActivity, TeamActivitySchema } from "@/models/TeamActivity";

// Whoops I accidentally wrote this, just commiting it to version control in case it's needed
export const getTeamActivity = async (teamId: string, activityId: string) => {
  const teamActivityAndActivityRows = await db
    .select()
    .from(teamActivitiesTable)
    .innerJoin(
      activitiesTable,
      eq(activitiesTable.id, teamActivitiesTable.activityId),
    )
    .where(
      and(
        eq(teamActivitiesTable.teamId, teamId),
        eq(teamActivitiesTable.activityId, activityId),
      ),
    );

  if (teamActivityAndActivityRows.length === 0) {
    throw new Error("No teamActivity found for the given team and activity ID");
  }

  const rawTeamActivity = teamActivityAndActivityRows[0].team_activities;
  const activity = teamActivityAndActivityRows[0].activities;
  const teamActivity: TeamActivity = { ...rawTeamActivity, activity };
  return parseZod(
    TeamActivitySchema,
    teamActivity,
    "services/old/getTeamActivityByIdService.ts",
  );
};
