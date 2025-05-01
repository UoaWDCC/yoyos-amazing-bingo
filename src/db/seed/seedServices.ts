import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";
import random from "random-string-generator";

export async function generateAllActivities(
  activities: (typeof activitiesTable.$inferInsert)[],
) {
  const promises = activities.map(
    ({
      id,
      name,
      code,
      basePoints,
      boardOrder,
      description,
      cardImageName,
    }) => {
      return db.insert(activitiesTable).values({
        id,
        name,
        code,
        basePoints,
        boardOrder,
        description,
        cardImageName,
      });
    },
  );
  await Promise.all(promises);
  console.log("generating activity table");
}

export async function generateAllTeams(
  teams: (typeof teamsTable.$inferInsert)[],
) {
  const promises = teams.map(({ id, name, code, specialActivity }) => {
    return db.insert(teamsTable).values({
      id,
      name,
      code,
      specialActivity,
    });
  });
  await Promise.all(promises);
  console.log("generating teams table");
}

export async function generateTeamActivitiesTable(
  teamIds: string[],
  activityIds: string[],
) {
  const promises = teamIds.map((teamId: string) => {
    const nestedPromises = activityIds.map((activityId: string) => {
      return db.insert(teamActivitiesTable).values({
        teamId,
        isCompleted: false,
        activityId,
      });
    });
    return Promise.all(nestedPromises);
  });

  await Promise.all(promises);
  console.log("generating teamActivities table");
}

export function generateRandomCode() {
  return random(6, 'alphanumeric');
}
