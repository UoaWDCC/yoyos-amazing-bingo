import { Team } from "@/models/Team";

type rawTeam = {
  teams: {
    id: string;
    name: string;
    code: string;
    specialActivity: number;
  };
  activities: {
    id: string;
    name: string;
    code: string;
    cardImageName: string;
    description: string;
    basePoints: number;
    boardOrder: number;
  };
  team_activities: {
    teamId: string;
    activityId: string;
    isCompleted: boolean;
  };
};

/** Takes a list of rawTeams (a join) and assembles a Team domain object from it. */
export const assembleTeams = (rawTeams: rawTeam[]): Team => {
  // Since this is a join, all rows will have the same team
  const rawTeam = rawTeams[0].teams;

  // Build the board
  const board = rawTeams
    .map((row) => ({
      isCompleted: row.team_activities.isCompleted,
      activity: row.activities,
    }))
    .sort((a, b) => a.activity.boardOrder - b.activity.boardOrder);

  return { ...rawTeam, board };
};
