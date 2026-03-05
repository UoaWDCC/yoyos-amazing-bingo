import { ask } from "stdio";

import {
  nukeActivityDb,
  nukeTeamActivitiesDb,
  nukeTeamDb,
} from "@/db/seed/nukeServices";
import { activities, activityIds } from "@/db/data/activitiesData";
import { teams, teamIds } from "@/db/data/teamsData";
import {
  generateAllActivities,
  generateAllTeams,
  generateTeamActivitiesTable,
} from "@/db/seed/seedServices";

async function main() {
  const confirmation = await ask(
    "Are you sure you want to nuke the database? (y/n)",
  );
  if (confirmation !== "y") {
    console.log("Aborting seed script...");
    process.exit(0);
  }

  console.log("Nuking all tables...");
  await nukeTeamActivitiesDb();
  await nukeTeamDb();
  await nukeActivityDb();

  console.log("Running seed script...");
  console.log("Number of activities: ", activities.length);
  console.log("Number of teams: ", teams.length);

  console.log("\nInserting Teams...");
  await generateAllTeams(teams);
  console.log(teamIds);

  console.log("\nInserting Activities...");
  await generateAllActivities(activities);
  console.log(activityIds);

  console.log("\nGenerating TeamActivities...");
  await generateTeamActivitiesTable(teamIds, activityIds);

  console.log("Seed script completed successfully!");
  process.exit(0);
}

main();
