"use server";

import "server-only";

import { Team } from "@/models/Team";

/**
 * Fetches all teams with their points.
 *
 * @returns All teams with their points.
 */
export async function getAllTeamsAction(): Promise<Team[]> {
  // TODO: remove dummy data
  return Array(16).map((_, i) => ({
    id: i.toString(),
    name: "Wow",
    code: "Code" + i,
    points: 1,
    board: Array(16).map(() => ({
      activity: {
        id: "ACT-1",
        name: "Activity",
        code: "Code" + i,
        cardImageName: "image" + i + ".png",
        description: "Description for activity " + i,
        basePoints: 1,
        boardOrder: 0,
      },
      isCompleted: false,
    })),
    specialActivity: 0,
  }));
}