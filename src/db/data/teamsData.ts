import { teamsTable } from "@/db/schema";
import generateRandomCode from "@/db/data/generateRandomCode";


export const teams: (typeof teamsTable.$inferInsert)[] = [
  { id: "vps", name: "VPS", code: generateRandomCode(), specialActivity: 0 },
  { id: "web3", name: "WEB3UOA", code: generateRandomCode(), specialActivity: 1 },
  { id: "lug", name: "LUG", code: generateRandomCode(), specialActivity: 2 },
  { id: "medr", name: "Med Revue", code: generateRandomCode(), specialActivity: 3 },
  { id: "uoavc", name: "UOAVC", code: generateRandomCode(), specialActivity: 4 },
  { id: "rap", name: "RAP", code: generateRandomCode(), specialActivity: 5 },
  { id: "wphd", name: "WPHD", code: generateRandomCode(), specialActivity: 6 },
  { id: "oce", name: "OCE", code: generateRandomCode(), specialActivity: 7 },
  { id: "kac", name: "KAC", code: generateRandomCode(), specialActivity: 8 },
  { id: "ssa", name: "SSA", code: generateRandomCode(), specialActivity: 9 },
  { id: "uaic", name: "UAIC", code: generateRandomCode(), specialActivity: 10 },
  { id: "umsa", name: "UMSA", code: generateRandomCode(), specialActivity: 11 },
  { id: "aucc", name: "AUCC", code: generateRandomCode(), specialActivity: 12 },
  { id: "ayo", name: "AYO", code: generateRandomCode(), specialActivity: 13 },
];

export const teamIds: string[] = teams.map((t) => t.id);
