/**
 * Removes all codes from teams/activities sent to the frontend.
 *
 * Hotfix so a bit of a hack!
 */
import { Team } from "@/models/Team";
import { TeamActivity } from "@/models/TeamActivity";

export function cleanTeam(team: Team): Team {
  return {
    ...team,
    code: "X".repeat(team.code.length),
    board: team.board.map((teamActivity: TeamActivity) => ({
      ...teamActivity,
      activity: {
        ...teamActivity.activity,
        code: "X".repeat(teamActivity.activity.code.length),
      },
    })),
  };
}
