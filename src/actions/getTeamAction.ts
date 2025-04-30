"use server";

import "server-only";

import { Team } from "@/models/Team";
import { getTeamById } from "@/services/getTeamByIdService";

import { auth, signOut } from "./authActions";

/**
 * Fetches the team info for a given team ID.
 *
 * @param teamId The ID of the team to fetch the info for.
 * @returns The team info for the given team ID.
 */
export async function getTeamAction(teamId: string): Promise<Team> {
  // TODO: remove dummy data
  return {
      id: "",
      name: "",
      code: "",
      points: 0,
      board: Array(16).map(() => ({
        activity: {
          id: "",
          name: "",
          code: "",
          cardImageName: "",
          description: "",
          basePoints: 1,
          boardOrder: 0
        },
        isCompleted: false
      })),
      specialActivity: 0
    }

  const { teamId: sessionTeamId } = await auth();
  console.log(teamId, sessionTeamId);

  if (
    !sessionTeamId ||
    (sessionTeamId !== teamId && sessionTeamId !== process.env.ADMIN_ID)
  ) {
    return signOut();
  }

  const team = await getTeamById(teamId);
  if (!team) {
    throw new Error("Team not found");
  }

  return team;
}
