"use server";

import "server-only";

import { getTeamPoints } from "@/actions/getTeamPoints";
import { Team } from "@/models/Team";
import { getAllTeams as getAllTeamsFromDb } from "@/services/old/teamServices";

/**
 * Fetches all teams with their points.
 *
 * @returns All teams with their points.
 */
export async function getAllTeams(): Promise<Team[]> {
  const teams = await getAllTeamsFromDb();

  return Promise.all(
    teams.map(async (team) => {
      const points = await getTeamPoints(team.id);
      return { ...team, points };
    }),
  );
}