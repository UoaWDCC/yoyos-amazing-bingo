import { teamsTable } from "@/db/schema";
import { generateRandomCode } from "@/db/seed/seedServices";
import { teamList } from "@/db/data/teamList";

export const teams: (typeof teamsTable.$inferInsert)[] = teamList.map((t) => ({
  ...t,
  code: generateRandomCode(),
}));

export const teamIds: string[] = teamList.map((t) => t.id);
