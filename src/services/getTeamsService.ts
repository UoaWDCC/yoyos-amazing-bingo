import { db } from "@/db/connection";
import { parseZod } from "@/lib/zod";
import { Team, TeamSchema } from "@/models/Team";
import { z } from "zod";

export async function getAllTeams(): Promise<Team[]> {
  const rawTeams = await db.query.teamsTable.findMany();

  const teams: Team[] = []; // TODO: get teams correctly

  return parseZod(z.array(TeamSchema), teams);
}