"use server";

import { getTeamPoints } from "@/actions/getTeamPoints";
import { Team } from "@/models/Team";
import { getTeamById } from "@/services/team";

/**
 * Fetches the team info for a given team ID.
 *
 * @param teamId The ID of the team to fetch the info for.
 * @returns The team info for the given team ID.
 */
export async function getTeam(teamId: string): Promise<Team> {
  const team = await getTeamById(teamId);

  if (!team) {
    throw new Error("Team not found");
  }

  const points = await getTeamPoints(teamId);

  return { ...team, points };
}
