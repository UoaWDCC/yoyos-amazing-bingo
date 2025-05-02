import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";
import { assembleTeams } from "@/services/assembleTeam";

export async function updateTeamName(
  teamId: string,
  name: string,
): Promise<Team> {
  // Update the team name
  await db.update(teamsTable).set({ name }).where(eq(teamsTable.id, teamId));

  // Refetch the team with all relations
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
    .where(eq(teamsTable.id, teamId));

  if (rows.length === 0) {
    throw new Error(`Team with ID '${teamId}' not found`);
  }

  const team: Team = assembleTeams(rows);
  return parseZod(TeamSchema, team, "services/updateTeamName.ts");
}
