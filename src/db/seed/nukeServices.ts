import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";

export async function nukeActivityDb() {
  await db.delete(activitiesTable);
  console.log("activity db has been nuked!");
}

export async function nukeTeamDb() {
  await db.delete(teamsTable);
  console.log("teams db has been nuked!");
}

export async function nukeTeamActivitiesDb() {
  await db.delete(teamActivitiesTable);
  console.log("teamActivities db has been nuked!");
}
