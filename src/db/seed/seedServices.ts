import { db } from "@/db/connection";
import { activitiesTable, teamActivitiesTable, teamsTable } from "@/db/schema";

export async function generateAllActivities(
  activities: (typeof activitiesTable.$inferInsert)[],
) {
  const promises = activities.map(
    ({ id, name, code, basePoints, boardOrder, description }) => {
      return db.insert(activitiesTable).values({
        id,
        name,
        code,
        basePoints,
        boardOrder,
        description,
      });
    },
  );
  await Promise.all(promises);
  console.log("generating activity table");
}

export async function generateAllTeams(
  teams: (typeof teamsTable.$inferInsert)[],
) {
  const promises = teams.map(({ id, name, code }) => {
    return db.insert(teamsTable).values({
      id,
      name,
      code,
    });
  });
  await Promise.all(promises);
  console.log("generating teams table");
}

export async function generateSquaresTable(
  teamIds: string[],
  activityIds: string[],
) {
  const promises = teamIds.map((teamId: string) => {
    const nestedPromises = activityIds.map((activityId: string) => {
      return db.insert(teamActivitiesTable).values({
        teamId,
        completed: false,
        activityId,
      });
    });
    return Promise.all(nestedPromises);
  });

  await Promise.all(promises);
  console.log("generating squares table");
}
