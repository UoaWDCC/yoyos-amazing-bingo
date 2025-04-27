import { auth } from "@/actions/auth";
import { getTeamById } from "@/services/team";

import "server-only";

export async function getTeamName(): Promise<string | null> {
  const { teamId } = await auth();

  if (!teamId) {
    return null;
  }

  const team = await getTeamById(teamId);

  if (!team) {
    return null;
  }

  return team.name;
}
