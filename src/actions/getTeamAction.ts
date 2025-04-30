"use server";

import "server-only";

import { Team } from "@/models/Team";
import { getTeamById } from "@/services/getTeamByIdService";

import { auth } from "./authActions";

/**
 * Fetches the team info for a given team ID.
 *
 * @param teamId The ID of the team to fetch the info for.
 * @returns The team info for the given team ID.
 */
export async function getTeamAction(teamId: string): Promise<Team> {
  const { teamId: sessionTeamId } = await auth();
  if (sessionTeamId !== teamId && sessionTeamId !== process.env.ADMIN_ID) {
    throw new Error("Unauthorized");
  }

  const team = await getTeamById(teamId);
  if (!team) {
    throw new Error("Team not found");
  }

  return team;
}
