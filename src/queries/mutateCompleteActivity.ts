import { mutate } from "swr";

import { completeActivity } from "@/actions/completeActivity";

/** @see completeActivity */
export default async function mutateCompleteActivity(
  code: string,
  teamId: string,
  activityId: string,
) {
  await completeActivity(code, activityId);

  // Invalidate the cache for the team and all teams
  mutate(`getTeam/${code}/${teamId}`);
  mutate(`getAllTeams/${code}`);
}
