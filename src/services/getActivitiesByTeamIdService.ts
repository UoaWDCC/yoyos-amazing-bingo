"use server";

import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db/connection";
import { teamActivitiesTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import { TeamCollection, TeamCollectionSchema } from "@/models/TeamCollection";

export const getCollectionByTeamIdService = async (teamId: string) => {
  const rawActivities = await db.query.teamActivitiesTable.findMany({
    where: eq(teamActivitiesTable.teamId, teamId),
    with: { activity: true },
  });

  const rawCollection: TeamCollection[] = rawActivities.map((activity) => ({
    name: activity.activity.name,
    order: activity.activity.boardOrder,
    basePoints: activity.activity.basePoints,
    imageKey: activity.activity.cardImageName,
    isCompleted: activity.isCompleted,
  }));

  if (!rawActivities) {
    throw new Error(`teamActivity table with teamId ${teamId} not found`);
  }

  const teamCollection: TeamCollection[] = rawCollection;
  return parseZod(
    z.array(TeamCollectionSchema),
    teamCollection,
    "services/getActivitiesByTeamIdService.ts",
  );
};
