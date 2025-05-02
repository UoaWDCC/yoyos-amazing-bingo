"use server";

import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db/connection";
import { teamActivitiesTable } from "@/db/schema";
import { parseZod } from "@/lib/zod";
import {
  TeamActivityClient,
  TeamActivityClientSchema,
} from "@/models/TeamActivityClientSchema";

export const getActivitiesByTeamIdService = async (teamId: string) => {
  const rawActivities = await db.query.teamActivitiesTable.findMany({
    where: eq(teamActivitiesTable.teamId, teamId),
    with: { activity: true },
  });

  const rawCollection: TeamActivityClient[] = rawActivities.map((activity) => ({
    id: activity.activityId,
    name: activity.activity.name,
    description: activity.activity.description,
    order: activity.activity.boardOrder,
    basePoints: activity.activity.basePoints,
    imageKey: activity.activity.cardImageName,
    isCompleted: activity.isCompleted,
  }));

  if (!rawActivities) {
    throw new Error(`teamActivity table with teamId ${teamId} not found`);
  }

  const teamCollection: TeamActivityClient[] = rawCollection;
  return parseZod(
    z.array(TeamActivityClientSchema),
    teamCollection,
    "services/getActivitiesByTeamIdService.ts",
  );
};
