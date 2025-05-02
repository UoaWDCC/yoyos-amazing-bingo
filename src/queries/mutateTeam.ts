import { mutate } from "swr";

import { updateTeamAction } from "@/actions/updateTeamNameAction";
import { Team } from "@/models/Team";

/** @see updateTeamAction */
export default async function mutateTeam(team: Team) {
  // Invalidate the cache for the team and all teams
  mutate(`getTeam/${team.id}`, team);
  await updateTeamAction(team);
  mutate(`getAllTeams`);
}
