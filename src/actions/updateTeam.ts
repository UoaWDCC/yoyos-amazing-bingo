"use server";

import { Team } from "@/models/Team";

import "server-only";

/**
 * Allow a team to update itself.
 *
 * @param team New team.
 */
export async function updateTeam(team: Team): Promise<void> {
  // TODO: Implement the update logic here
  console.log(`updateTeam() called with team: ${team.name}`);
}
