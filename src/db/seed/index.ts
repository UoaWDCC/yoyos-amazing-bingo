import { ask } from "stdio";



import { activitiesTable, teamsTable } from "@/db/schema";
import { nukeActivityDb, nukeTeamActivitiesDb, nukeTeamDb } from "@/db/seed/nukeServices";
import {
  generateAllActivities,
  generateAllTeams,
  generateRandomCode,
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

  const imageNames = [
    "snorelax",
    "bulbasour",
    "jigglybuff",
    "pikachoo",
    "pokewebster",
    "psyweb",
    "warill",
    "warizard",
    "webbykarp",
    "wengar",
    "wewtwo",
    "witto",
    "worterra",
    "weowth",
    "wiglet",
    "wogepi",
  ] as const;

  const activities: (typeof activitiesTable.$inferInsert)[] = [];
  for (let i: number = 0; i < 16; i++) {
    const index = (i + 1).toString();
    const id = String(index).padStart(2, "0");
    activities.push({
      id,
      name: `Activity ${index}`,
      code: generateRandomCode(),
      description: `Description for activity-${index}`,
      boardOrder: i,
      basePoints: 1,
      cardImageName: imageNames[i],
    });
  }

  const teams: (typeof teamsTable.$inferInsert)[] = [
    {
      id: "volu",
      name: "Volunteers",
      code: generateRandomCode(),
      specialActivity: 0,
    },
    {
      id: "esports",
      name: "Esports",
      code: generateRandomCode(),
      specialActivity: 1,
    },
    {
      id: "esa",
      name: "ESA",
      code: generateRandomCode(),
      specialActivity: 2,
    },
    {
      id: "reng",
      name: "Rainbow Engineering",
      code: generateRandomCode(),
      specialActivity: 3,
    },
    {
      id: "uabc",
      name: "UABC",
      code: generateRandomCode(),
      specialActivity: 4,
    },
    {
      id: "ausa",
      name: "AUSA",
      code: generateRandomCode(),
      specialActivity: 5,
    },
    {
      id: "ausco",
      name: "AUSCO",
      code: generateRandomCode(),
      specialActivity: 6,
    },
    {
      id: "vps",
      name: "VPS",
      code: generateRandomCode(),
      specialActivity: 7,
    },
    {
      id: "aspa",
      name: "ASPA",
      code: generateRandomCode(),
      specialActivity: 8,
    },
    {
      id: "aucc",
      name: "AUCC",
      code: generateRandomCode(),
      specialActivity: 9,
    },
    {
      id: "fsae",
      name: "FSAE",
      code: generateRandomCode(),
      specialActivity: 10,
    },
    {
      id: "motorsports",
      name: "Motorsports",
      code: generateRandomCode(),
      specialActivity: 11,
    },
    {
      id: "tansa",
      name: "TANSA",
      code: generateRandomCode(),
      specialActivity: 12,
    },
    {
      id: "uaic",
      name: "UAIC",
      code: generateRandomCode(),
      specialActivity: 13,
    },
    {
      id: "medr",
      name: "Med Revue",
      code: generateRandomCode(),
      specialActivity: 14,
    },
    {
      id: "hidd",
      name: "Hidden Treasures",
      code: generateRandomCode(),
      specialActivity: 15,
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