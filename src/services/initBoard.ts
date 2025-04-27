import { db } from "@/db/connection";
import { squaresTable, activitiesTable, teamsTable } from "@/db/schema";

export function generateAllActivities(activities: (typeof activitiesTable.$inferInsert)[]) {
    activities.forEach(async ({ id, name, slug, points, x, y, description }) => {
        await db.insert(activitiesTable).values({
            id,
            name,
            slug,
            points,
            x,
            y,
            description
        })
    })
    console.log("generating table")
}

export function generateAllTeams(teams: (typeof teamsTable.$inferInsert)[]) {
    teams.forEach(async ({ id, name, code }) => {
        await db.insert(teamsTable).values({
            id,
            name,
            code
        })
    })
    console.log("generating table")
}

export function generateSquaresTable(teamIds: string[], activityIds: string[]) {
    teamIds.forEach(async (teamId: string) => {
        activityIds.forEach(async (activityId: string) => {
            await db.insert(squaresTable).values({
                teamId,
                completed: false,
                activityId,
            })
        })
    })
    console.log("generating table")
}
