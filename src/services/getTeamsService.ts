import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { BoardSchema } from "@/models/Board";
import { Team, TeamSchema } from "@/models/Team";

export async function getAllTeams(): Promise<Team[]> {
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

  const teamsMap = new Map<
    string,
    {
      id: string;
      code: string;
      name: string;
      board: {
        isCompleted: boolean;
        points: number;
        activity: typeof activitiesTable.$inferSelect;
      }[];
      specialActivity: number;
    }
  >();

  for (const row of rows) {
    const { teams, team_activities, activities } = row;

    if (!teamsMap.has(teams.id)) {
      teamsMap.set(teams.id, {
        id: teams.id,
        code: teams.code,
        name: teams.name,
        board: [],
        specialActivity: teams.specialActivity,
      });
    }

    teamsMap.get(teams.id)!.board.push({
      isCompleted: team_activities.isCompleted,
      points: activities.basePoints,
      activity: activities,
    });
  }

  const teams: Team[] = [];

  for (const teamData of teamsMap.values()) {
    const board = teamData.board.sort(
      (a, b) => a.activity.boardOrder - b.activity.boardOrder,
    );

    const points = board
      .filter((entry) => entry.isCompleted)
      .reduce((sum, entry) => sum + entry.points, 0);

    teams.push(
      parseZod(TeamSchema, {
        id: teamData.id,
        code: teamData.code,
        name: teamData.name,
        board: parseZod(BoardSchema, board),
        points,
        specialActivity: teamData.specialActivity,
      }),
    );
  }

  return parseZod(z.array(TeamSchema), teams, "services/getTeamsService.ts");
}
