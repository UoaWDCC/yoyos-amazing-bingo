import { db } from "@/db/connection";
import { squaresTable } from "@/db/schema";

export function createEmptyBoard(teamIdArray: string[]) {
  try {
    teamIdArray.forEach(async (teamId: string) => {
      for (let i = 0; i < 16; i++) {
        await db.insert(squaresTable).values({
          teamId,
          x: i % 4,
          y: Math.floor(i / 4),
          points: 1, // logic to be added later
          completed: false,
          activityId: i.toString(),
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}
