import {db} from "@/db/connection";
import {and, eq} from "drizzle-orm";
import {squaresTable} from "@/db/schema";

export const getTeamSquare = async (id: string) => {
    return await db.query.squaresTable.findFirst({
        where: eq(squaresTable.teamId, id)
    })
}

export const updateTeamSquare = async (teamId: string, activityId: string) => {
    await db.update(squaresTable)
        .set({ completed: true })
        .where(and(eq(squaresTable.teamId, teamId), eq(squaresTable.activityId, activityId)))
}