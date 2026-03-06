"use server";

import "server-only";

import { auth } from "@/actions/authActions";
import { sendInvalidationCode } from "@/revalidation/sendInvalidationCode";
import { resetTeamProgress } from "@/services/resetTeamProgressService";
import env from "@/lib/env";

/**
 * Resets the progression (activity completions) for one or more teams.
 * Can only be called by an admin.
 *
 * @param teamIds Optional list of team IDs to reset. If omitted, all teams are reset.
 * @throws {Error} If the caller is not authenticated as admin.
 */
export async function resetTeamProgressAction(
  teamIds?: string[],
): Promise<void> {
  const { teamId } = await auth();

  if (teamId !== env.ADMIN_ID) {
    throw new Error("Unauthorized");
  }

  await resetTeamProgress(teamIds);

  sendInvalidationCode("getAllTeams");
  if (Array.isArray(teamIds)) {
    for (const id of teamIds) {
      sendInvalidationCode(`getTeam/${id}`);
    }
  }
}
