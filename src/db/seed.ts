import { activitiesTable, teamsTable } from "@/db/schema";
import { generateAllActivities, generateAllTeams, generateSquaresTable } from "@/services/initBoard";

import "dotenv/config";

async function main() {
    const activities: (typeof activitiesTable.$inferInsert)[] = []

    for (let i: number = 0; i < 16; i++) {
        const index = i.toString()
        activities.push({
            "id": index,
            "name": `activity ${index}`,
            "slug": index,
            "description": `desc ${index}`,
            "x": i % 4,
            "y": Math.floor(i / 4),
            "points": 1,
        })
    }

    const teams: (typeof teamsTable.$inferInsert)[] = [
        { id: "esports", name: "esports", code: "test" },
        { id: "esa", name: "esa", code: "test" },
        { id: "reng", name: "rainbow engineering", code: "test" },
        { id: "uabc", name: "uabc", code: "test" },
        { id: "ausa", name: "ausa", code: "test" },
        { id: "ausco", name: "ausco", code: "test" },
        { id: "vps", name: "vps", code: "test" },
        { id: "aspa", name: "aspa", code: "test" },
        { id: "aucc", name: "aucc", code: "test" },
        { id: "fsae", name: "fsae", code: "test" },
        { id: "motorsports", name: "motorsports", code: "test" },
        { id: "tansa", name: "tansa", code: "test" },
        { id: "uaic", name: "uaic", code: "test" },
        { id: "medr", name: "med revue", code: "test" },
        { id: "hidd", name: "hidden treasures", code: "test" },
        { id: "volu", name: "volunteers", code: "test" },
    ]

    console.log("Running seed script...")
    console.log("Number of activities: ", activities.length)
    console.log("Number of teams: ", teams.length)

    console.log("\nInserting Teams...")
    generateAllTeams(teams)
    console.log("\nInserting Activities...")
    generateAllActivities(activities)

    const teamIds = teams.map((team) => team.id)
    const activityIds = activities.map((activity) => activity.id)
    console.log(teamIds)
    console.log(activityIds)

    console.log("\nGenerating Squares...")
    generateSquaresTable(teamIds, activityIds)

    process.exit(0);
    // const users = await db.select().from(usersTable);
    // console.log("Getting all users from the database: ", users);
}

main();
