/**
 * Removes all codes from teams/activities sent to the frontend.
 *
 * Hotfix so a bit of a hack!
 */
import { Team } from "@/models/Team";
import { TeamActivity } from "@/models/TeamActivity";

export function cleanTeam(team: Team): Team {
  const REDACTED_CODE = "XXXXXX";

  return {
    ...team,
    code: REDACTED_CODE,
    board: team.board.map((teamActivity: TeamActivity) => ({
      ...teamActivity,
      activity: {
        ...teamActivity.activity,
        code: REDACTED_CODE,
      },
    })),
  };
}
