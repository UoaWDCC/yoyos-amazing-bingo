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
  return Array.from({length: 16}, (_, i) => ({
    id: i.toString(),
    name: "Wow",
    code: "Code" + i,
    points: 1,
    board: Array.from({length: 16}, (_, j) => ({
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
