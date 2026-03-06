import random from "random-string-generator";

import { teamsTable } from "@/db/schema";

function generateRandomCode() {
  return random(6, "alphanumeric");
}

export const teams: (typeof teamsTable.$inferInsert)[] = [
  { id: "volu", name: "Volunteers", code: generateRandomCode(), specialActivity: 0 },
  { id: "esports", name: "Esports", code: generateRandomCode(), specialActivity: 1 },
  { id: "esa", name: "ESA", code: generateRandomCode(), specialActivity: 2 },
  { id: "reng", name: "Rainbow Engineering", code: generateRandomCode(), specialActivity: 3 },
  { id: "uabc", name: "UABC", code: generateRandomCode(), specialActivity: 4 },
  { id: "ausa", name: "AUSA", code: generateRandomCode(), specialActivity: 5 },
  { id: "ausco", name: "AUSCO", code: generateRandomCode(), specialActivity: 6 },
  { id: "vps", name: "VPS", code: generateRandomCode(), specialActivity: 7 },
  { id: "aspa", name: "ASPA", code: generateRandomCode(), specialActivity: 8 },
  { id: "aucc", name: "AUCC", code: generateRandomCode(), specialActivity: 9 },
  { id: "fsae", name: "FSAE", code: generateRandomCode(), specialActivity: 10 },
  { id: "motorsports", name: "Motorsports", code: generateRandomCode(), specialActivity: 11 },
  { id: "tansa", name: "TANSA", code: generateRandomCode(), specialActivity: 12 },
  { id: "uaic", name: "UAIC", code: generateRandomCode(), specialActivity: 13 },
  { id: "medr", name: "Med Revue", code: generateRandomCode(), specialActivity: 14 },
  { id: "hidd", name: "Hidden Treasures", code: generateRandomCode(), specialActivity: 15 },
];

export const teamIds: string[] = teams.map((t) => t.id);
