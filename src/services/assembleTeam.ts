import {Team} from "@/models/Team";
import {parseZod} from "@/lib/zod";
import {BoardSchema} from "@/models/Board";

type rawTeam = {
    teams: {
        id: string;
        name: string;
        code: string
    },
    activities: {
        id: string
        name: string
        code: string
        description: string
        basePoints: number
        boardOrder: number
    },
    team_activities: {
        teamId: string
        activityId: string
        completed: boolean
    }
}

export const assembleTeams = (rawTeams: rawTeam[]) => {
    const { teams } = rawTeams[0];

    // Build the board
    const unSortedBoard = rawTeams.map((row) => ({
        isCompleted: row.team_activities.completed,
        points: row.activities.basePoints,
        activity: row.activities,
    }));

    const board = unSortedBoard.sort(
        (a, b) => a.activity.boardOrder - b.activity.boardOrder
    );

    // Calculate points (e.g. sum of completed activity points)
    const points = board
        .filter((entry) => entry.isCompleted)
        .reduce((sum, entry) => sum + entry.points, 0);

    const team: Team = {
        id: teams.id,
        code: teams.code,
        name: teams.name,
        points,
        board: parseZod(BoardSchema, board),
    };

    return team;
}