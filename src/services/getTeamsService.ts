import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";
import { assembleTeams } from "@/services/assembleTeam";

export async function getAllTeams(): Promise<Team[]> {
  // Team <16-1> Team Activities <1-16> Activities (x16 teams)
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
        );

    if (rows.length === 0) return [];

    // Group rows by team ID
    const groupedRows = new Map<string, typeof rows>();

    for (const row of rows) {
        const teamId = row.teams.id;
        if (!groupedRows.has(teamId)) {
            groupedRows.set(teamId, []);
        }
        groupedRows.get(teamId)!.push(row);
    }

    // Assemble each team
    const teams: Team[] = [];
    for (const group of groupedRows.values()) {
        const team = assembleTeams(group);
        teams.push(parseZod(TeamSchema, team));
    }

    return parseZod(z.array(TeamSchema), teams, "services/getTeamsService.ts");
}
