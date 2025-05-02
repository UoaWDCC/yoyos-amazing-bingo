import { Activity } from "@/models/Activity";

/**
 * Helper to get the points of an activity for a team.
 * Factors in the +1 point for the special activity.
 *
 * @returns number - The total points for the activity for the specific team.
 */
export function getPointsOfActivityForTeam(
  activity: Activity,
  isSpecialActivity: boolean,
): number {
  const basePoints = activity.basePoints;
  return isSpecialActivity ? basePoints + 1 : basePoints;
}
