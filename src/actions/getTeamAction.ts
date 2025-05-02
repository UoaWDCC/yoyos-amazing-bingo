"use server";

import "server-only";

import env from "@/lib/env";
import { Board } from "@/models/Board";
import { Team } from "@/models/Team";
import { getTeamById } from "@/services/getTeamByIdService";

import { auth } from "./authActions";

/**
 * Fetches the team info for a given team ID.
 *
 * @param teamId The ID of the team to fetch the info for.
 * @returns The team info for the given team ID.
 */
export async function getTeamAction(teamId: string): Promise<Team | null> {
  try {
    const { teamId: sessionId } = await auth();
    if (!sessionId || (sessionId !== teamId && sessionId !== env.ADMIN_ID)) {
      return null;
    }

    return await getTeamById(teamId);
  } catch (error) {
    console.log("Error getting team in action, assuming session issue", error);
    return null;
  }
}

// --- DUMMY DATA ---

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDummyData() {
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
    board,
    specialActivity: 0,
  };
  return dummyTeam;
}
