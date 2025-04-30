"use server";

import { Team } from "@/models/Team";

import "server-only";

import { updateTeamName } from "@/services/updateTeamNameService";

import { auth, signOut } from "./authActions";

/**
 * Allow a team to update itself. Currently, this only allows the team to update its name.
 *
 * @param team New team.
 */
export async function updateTeamAction(team: Team): Promise<void> {
  const { teamId: sessionTeamId } = await auth();
  if (
    !sessionTeamId ||
    (sessionTeamId !== team.id && sessionTeamId !== process.env.ADMIN_ID)
  ) {
    return signOut();
  }

  await updateTeamName(team.id, team.name);
}
