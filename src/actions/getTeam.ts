"use server";

import { Board } from "@/models/Board";
import { Team } from "@/models/Team";
import "server-only";

/**
 * Fetches the team info (including board) for a given team ID.
 *
 * @param teamId The ID of the team to fetch the board for.
 * @returns The team info (including board) for the given team ID.
 */
export async function getTeam(teamId: string): Promise<Team> {
  // TODO: STUB
  console.log(teamId);

  const dummyBoard: Board = [
    [
      { completed: false, activity: { id: "1", name: "Activity 1", slug: "activity-1", points: 0, x: 0, y: 0, description: "Description of Activity 1" }, points: 0 },
      { completed: false, activity: { id: "2", name: "Activity 2", slug: "activity-2", points: 0, x: 0, y: 0, description: "Description of Activity 2" }, points: 0 },
      { completed: false, activity: { id: "3", name: "Activity 3", slug: "activity-3", points: 0, x: 0, y: 0, description: "Description of Activity 3" }, points: 0 },
      { completed: false, activity: { id: "4", name: "Activity 4", slug: "activity-4", points: 0, x: 0, y: 0, description: "Description of Activity 4" }, points: 0 },
    ],
    [
      { completed: false, activity: { id: "5", name: "Activity 5", slug: "activity-5", points: 0, x: 0, y: 0, description: "Description of Activity 5" }, points: 0 },
      { completed: false, activity: { id: "6", name: "Activity 6", slug: "activity-6", points: 0, x: 0, y: 0, description: "Description of Activity 6" }, points: 0 },
      { completed: false, activity: { id: "7", name: "Activity 7", slug: "activity-7", points: 0, x: 0, y: 0, description: "Description of Activity 7" }, points: 0 },
      { completed: false, activity: { id: "8", name: "Activity 8", slug: "activity-8", points: 0, x: 0, y: 0, description: "Description of Activity 8" }, points: 0 },
    ],
    [
      { completed: false, activity: { id: "9", name: "Activity 9", slug: "activity-9", points: 0, x: 0, y: 0, description: "Description of Activity 9" }, points: 0 },
      { completed: false, activity: { id: "10", name: "Activity 10", slug: "activity-10", points: 0, x: 0, y: 0, description: "Description of Activity 10" }, points: 0 },
      { completed: false, activity: { id: "11", name: "Activity 11", slug: "activity-11", points: 0, x: 0, y: 0, description: "Description of Activity 11" }, points: 0 },
      { completed: false, activity: { id: "12", name: "Activity 12", slug: "activity-12", points: 0, x: 0, y: 0, description: "Description of Activity 12" }, points: 0 },
    ],
    [
      { completed: false, activity: { id: "13", name: "Activity 13", slug: "activity-13", points: 0, x: 0, y: 0, description: "Description of Activity 13" }, points: 0 },
      { completed: false, activity: { id: "14", name: "Activity 14", slug: "activity-14", points: 0, x: 0, y: 0, description: "Description of Activity 14" }, points: 0 },
      { completed: false, activity: { id: "15", name: "Activity 15", slug: "activity-15", points: 0, x: 0, y: 0, description: "Description of Activity 15" }, points: 0 },
      { completed: false, activity: { id: "16", name: "Activity 16", slug: "activity-16", points: 0, x: 0, y: 0, description: "Description of Activity 16" }, points: 0 },
    ],
  ];

  const dummyTeam = {
    id: teamId,
    name: "Dummy Team",
    code: "dummyCode",
    points: 48,
    board: dummyBoard,
  };

  return dummyTeam;
}
