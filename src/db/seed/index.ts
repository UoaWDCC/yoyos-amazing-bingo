import { ask } from "stdio";

import { activitiesTable, teamsTable } from "@/db/schema";
import {
  nukeActivityDb,
  nukeSquareDb,
  nukeTeamDb,
} from "@/db/seed/nukeServices";
import {
  generateAllActivities,
  generateAllTeams,
  generateSquaresTable as generateTeamActivitiesTable,
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
  await nukeSquareDb();
  await nukeTeamDb();
  await nukeActivityDb();

  const activities: (typeof activitiesTable.$inferInsert)[] = [];
  for (let i: number = 0; i < 16; i++) {
    const index = i.toString();
    activities.push({
      id: `activity-${index}`,
      name: `Activity ${index}`,
      code: `${index}`,
      description: `Description for activity-${index}`,
      boardOrder: i,
      basePoints: 1,
    });
  }

  const teams: (typeof teamsTable.$inferInsert)[] = [
    { id: "esports", name: "esports", code: "code-1" },
    { id: "esa", name: "esa", code: "code-2" },
    { id: "reng", name: "rainbow engineering", code: "code-3" },
    { id: "uabc", name: "uabc", code: "code-4" },
    { id: "ausa", name: "ausa", code: "code-5" },
    { id: "ausco", name: "ausco", code: "code-6" },
    { id: "vps", name: "vps", code: "code-7" },
    { id: "aspa", name: "aspa", code: "code-8" },
    { id: "aucc", name: "aucc", code: "code-9" },
    { id: "fsae", name: "fsae", code: "code10" },
    { id: "motorsports", name: "motorsports", code: "code11" },
    { id: "tansa", name: "tansa", code: "code12" },
    { id: "uaic", name: "uaic", code: "code13" },
    { id: "medr", name: "med revue", code: "code14" },
    { id: "hidd", name: "hidden treasures", code: "code15" },
    { id: "volu", name: "volunteers", code: "code16" },
  ];

  console.log("Running seed script...");
  console.log("Number of activities: ", activities.length);
  console.log("Number of teams: ", teams.length);

  console.log("\nInserting Teams...");
  await generateAllTeams(teams);
  const teamIds = teams.map((team) => team.id);
  console.log(teamIds);

  console.log("\nInserting Activities...");
  await generateAllActivities(activities);
  const activityIds = activities.map((activity) => activity.id);
  console.log(activityIds);

  console.log("\nGenerating TeamActivities...");
  await generateTeamActivitiesTable(teamIds, activityIds);

  console.log("Seed script completed successfully!");
  process.exit(0);
}

main();
