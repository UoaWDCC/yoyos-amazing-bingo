"use server";
import { getTeamBoard } from "@/services/teamBoard";

export async function getTeamPoints(teamId: string) {
    const board = await getTeamBoard(teamId)

    let points = 0;
    board.forEach(row => {
        row.forEach(square => {
            if (square.completed) {
                points += square.points;
            }
        });
    });

    return points;

}