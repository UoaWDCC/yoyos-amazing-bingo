/**
 * Removes all codes from teams/activities sent to the frontend.
 *
 * Hotfix so a bit of a hack!
 */
import { Team } from "@/models/Team";

export function cleanTeam(team: Team): Team {
  const cleanedTeam = { ...team, code: "XXXXXX" };
  cleanedTeam.board = cleanedTeam.board.map((teamActivity) => {
    const cleanedActivity = { ...teamActivity, code: "XXXXXX" };
    return cleanedActivity;
  });
  return cleanedTeam;
}
