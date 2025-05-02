import { Activity } from "@/models/Activity";
import { Team } from "@/models/Team";

/**
 * Helper to get the points of an activity for a team.
 * Factors in the +1 point for the special activity.
 *
 * @returns number - The total points for the activity for the specific team.
 */
export function getPointsOfActivityForTeam(activity: Activity, team?: Team): number {
  const basePoints = activity.basePoints;
  const isSpecialActivity = team?.specialActivity === activity.boardOrder;
  return isSpecialActivity ? basePoints + 1 : basePoints;
}
