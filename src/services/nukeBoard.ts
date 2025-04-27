import { db } from "@/db/connection";
import { activitiesTable, squaresTable, teamsTable } from "@/db/schema";

export async function nukeActivityDb() {
  await db.delete(activitiesTable);
  console.log("activity db has been nuked!");
}

export async function nukeTeamDb() {
  await db.delete(teamsTable);
  console.log("teams db has been nuked!");
}

export async function nukeSquareDb() {
  await db.delete(squaresTable);
  console.log("squares db has been nuked!");
}
