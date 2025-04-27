import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { teamsTable } from "@/db/schema";

export const getTeamSerivce = async (teamID: string) => {
  const res = await db
    .select()
    .from(teamsTable)
    .where(eq(teamsTable.code, teamID))
    .limit(1);
  return res[0];
};
