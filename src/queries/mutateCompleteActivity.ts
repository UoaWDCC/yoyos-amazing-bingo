import { mutate } from "swr";

import { completeActivity } from "@/actions/completeActivity";

/** @see completeActivity */
export default async function mutateCompleteActivity(
  teamId: string,
  activityId: string,
) {
  await completeActivity(activityId);

  // Invalidate the cache for the team and all teams
  mutate(`getTeam/${teamId}`);
  mutate(`getAllTeams`);
}
