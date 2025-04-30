"use server";

import "server-only";

import { getSession } from "@/lib/auth";
import env from "@/lib/env";
import { Team } from "@/models/Team";
import { getAllTeams } from "@/services/getTeamsService";

/**
 * Fetches all teams with their points.
 *
 * @returns All teams with their points.
 */
export async function getAllTeamsAction(): Promise<Team[]> {
  const { teamId } = await getSession();
  const teams = await getAllTeams();

  if (teamId === env.ADMIN_ID) {
    return teams;
  } else {
    return teams.slice(5, -1); // Remove the first 5 teams
  }
}
