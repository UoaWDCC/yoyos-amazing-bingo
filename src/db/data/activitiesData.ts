import { activitiesTable } from "@/db/schema";
import generateRandomCode from "@/db/data/generateRandomCode";

const imageNames = [
  "abbey_card",
  "andrew_card",
  "brandon_card",
  "chris_card",
  "deasy_card",
  "eshana_card",
  "henry_card",
  "kot_card",
  "kyle_card",
  "maternus_card",
  "matthew_card",
  "nancy_card",
  "nick_card",
  "sam_card",
  "shuaib_card",
  "tom_card",
] as const;

export const activities: (typeof activitiesTable.$inferInsert)[] = Array.from(
  { length: 16 },
  (_, i) => {
    const index = (i + 1).toString();
    const id = String(index).padStart(2, "0");
    return {
      id,
      name: `Activity ${index}`,
      code: generateRandomCode(),
      description: `Description for activity-${index}`,
      boardOrder: i,
      basePoints: 1,
      cardImageName: imageNames[i],
    };
  },
);

export const activityIds = activities.map((a) => a.id);
