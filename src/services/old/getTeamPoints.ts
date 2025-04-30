import { getBoardByTeamId } from "@/services/old/teamServices";

// TODO: merge this with team
export async function getTeamPoints(teamId: string) {
  const board = await getBoardByTeamId(teamId);

  let points = 0;
  board.forEach((square) => {
    if (square.completed) {
      points += square.points;
    }
  });

  return points;
}
