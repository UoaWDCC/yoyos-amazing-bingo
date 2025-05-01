"use server";

import "server-only";

import { Team } from "@/models/Team";
import { getTeamById } from "@/services/getTeamByIdService";

import { auth, signOut } from "./authActions";
import { Board } from "@/models/Board";

/**
 * Fetches the team info for a given team ID.
 *
 * @param teamId The ID of the team to fetch the info for.
 * @returns The team info for the given team ID.
 */
export async function getTeamAction(teamId: string): Promise<Team> {
  // TODO: remove dummy data
  const board: Board = Array.from({ length: 16 }, (_, i) => ({
      activity: {
        id: `ACT-${i}`,
        name: "Sample Activity",
        code: "act123",
        cardImageName: "image.png",
        description: "This is a sample activity.",
        basePoints: Math.floor(Math.random() * 3) + 1,
        boardOrder: i,
      },
      isCompleted: false,
    }));
  const dummyTeam: Team = {
    id: "test",
    name: "Test Team",
    code: "abc123",
    points: 0,
    board,
    specialActivity: 0,
  };
  return dummyTeam;

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
