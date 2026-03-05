import { activitiesTable } from "@/db/schema";
import { generateRandomCode } from "@/db/seed/seedServices";

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
