import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";
import { assembleTeams } from "@/services/assembleTeam";

// TODO: these three need to get teamActivities and activities in a join, them assemble a complete team
export const getTeamByCode = async (code: string): Promise<Team> => {
  const rows = await db
    .select()
    .from(teamsTable)
    .innerJoin(
      teamActivitiesTable,
      eq(teamsTable.id, teamActivitiesTable.teamId),
    )
    .innerJoin(
      activitiesTable,
      eq(teamActivitiesTable.activityId, activitiesTable.id),
    )
    .where(eq(teamsTable.code, code));

  if (rows.length === 0) {
    throw new Error(`Team with id '${code}' not found`);
  }

  const team = assembleTeams(rows);

  return parseZod(TeamSchema, team);
};
