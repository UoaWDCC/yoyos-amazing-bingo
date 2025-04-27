import { mutate } from "swr";

import { updateTeam } from "@/actions/updateTeam";
import { Team } from "@/models/Team";

/** @see updateTeam */
export default async function mutateTeam(team: Team) {
  await updateTeam(team);

  // Invalidate the cache for the team and all teams
  mutate(`getTeam/${team.id}`);
  mutate(`getAllTeams`);
}
