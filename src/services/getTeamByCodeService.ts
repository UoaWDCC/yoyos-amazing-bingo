import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";

import { getBoardByTeamId } from "./old/boardServices";

// TODO: these three need to get teamActivities and activities in a join, them assemble a complete team
export const getTeamByCode = async (code: string): Promise<Team> => {
  const rawTeam = await db.query.teamsTable.findFirst({
    where: eq(teamsTable.code, code),
  });

  if (!rawTeam) {
    throw new Error(`Team with code '${code}' not found`);
  }

  const team: Team = {
    id: rawTeam.id,
    code: rawTeam.code,
    name: rawTeam.name,
    points: -1, // TODO: Calculate points
    board: await getBoardByTeamId(rawTeam.id), // Don't do this, use a join
  };

  return parseZod(TeamSchema, team);
};
