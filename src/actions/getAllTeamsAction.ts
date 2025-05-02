"use server";

import "server-only";

import { Team } from "@/models/Team";
import { getAllTeams } from "@/services/getTeamsService";

import { auth } from "./authActions";
import env from "@/lib/env";
import { getTeamTotalPoints } from "@/logic/points/getTeamTotalPoints";

/**
 * Fetches a list of teams with their points.
 *
 * @returns All teams with their points if admin, or the all teams except the top 5 teams if not admin.
 */
export async function getAllTeamsAction(): Promise<Team[]> {
  try {
    const teams = await getAllTeams();
    const { teamId } = await auth();
    const isAdmin = teamId === env.ADMIN_ID;
    teams.sort((a, b) => getTeamTotalPoints(b) - getTeamTotalPoints(a));
    return isAdmin ? teams : teams.slice(5);
  } catch (error) {
    console.log("Error getting all teams in action, returning none", error);
    return [];
  }
}

// --- DUMMY DATA ---

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDummyData() {
  return Array.from({ length: 16 }, (_, i) => ({
    id: i.toString(),
    name: "Wow",
    code: "Code" + i,
    points: 1,
    board: Array.from({ length: 16 }, (_, j) => ({
      activity: {
        id: "ACT-" + j,
        name: "Activity " + j,
        code: j + "-code",
        cardImageName: "image" + j + ".png",
        description: "Description for activity " + j,
        basePoints: 1,
        boardOrder: 0,
      },
      isCompleted: false,
    })),
    specialActivity: 0,
  }));
}
