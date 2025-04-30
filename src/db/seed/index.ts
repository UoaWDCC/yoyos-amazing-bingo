import { ask } from "stdio";

import { activitiesTable, teamsTable } from "@/db/schema";
import {
  nukeActivityDb,
  nukeTeamActivitiesDb,
  nukeTeamDb,
} from "@/db/seed/nukeServices";
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
      cardImageName: "",
    });
  }

  const teams: (typeof teamsTable.$inferInsert)[] = [
    {
      id: "esports",
      name: "Esports",
      code: "code-1",
      specialActivity: 1,
    },
    {
      id: "esa",
      name: "ESA",
      code: "code-2",
      specialActivity: 2,
    },
    {
      id: "reng",
      name: "Rainbow Engineering",
      code: "code-3",
      specialActivity: 3,
    },
    {
      id: "uabc",
      name: "UABC",
      code: "code-4",
      specialActivity: 4,
    },
    {
      id: "ausa",
      name: "AUSA",
      code: "code-5",
      specialActivity: 5,
    },
    {
      id: "ausco",
      name: "AUSCO",
      code: "code-6",
      specialActivity: 6,
    },
    {
      id: "vps",
      name: "VPS",
      code: "code-7",
      specialActivity: 7,
    },
    {
      id: "aspa",
      name: "ASPA",
      code: "code-8",
      specialActivity: 8,
    },
    {
      id: "aucc",
      name: "AUCC",
      code: "code-9",
      specialActivity: 9,
    },
    {
      id: "fsae",
      name: "FSAE",
      code: "code10",
      specialActivity: 10,
    },
    {
      id: "motorsports",
      name: "Motorsports",
      code: "code11",
      specialActivity: 11,
    },
    {
      id: "tansa",
      name: "TANSA",
      code: "code12",
      specialActivity: 12,
    },
    {
      id: "uaic",
      name: "UAIC",
      code: "code13",
      specialActivity: 13,
    },
    {
      id: "medr",
      name: "Med Revue",
      code: "code14",
      specialActivity: 14,
    },
    {
      id: "hidd",
      name: "Hidden Treasures",
      code: "code15",
      specialActivity: 15,
    },
    {
      id: "volu",
      name: "Volunteers",
      code: "code16",
      specialActivity: 16,
    },
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
