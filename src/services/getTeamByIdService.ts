import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";
import { assembleTeams } from "@/services/assembleTeam";

export const getTeamById = async (id: string): Promise<Team> => {
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
    .where(eq(teamsTable.id, id));

  if (rows.length === 0) {
    throw new Error(`Team with id '${id}' not found`);
  }

  const team = assembleTeams(rows);

  return parseZod(TeamSchema, team);
};
