import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { teamsTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";

import { getBoardByTeamId } from "./old/boardServices";

export const getTeamById = async (id: string): Promise<Team> => {
  const rawTeam = await db.query.teamsTable.findFirst({
    where: eq(teamsTable.id, id),
  });

  if (!rawTeam) {
    throw new Error(`Team with id '${id}' not found`);
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
