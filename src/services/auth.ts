import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { teamsTable } from "@/db/schema";

export const getTeamByCode = async (code: string) => {
  return await db.query.teamsTable.findFirst({
    where: eq(teamsTable.code, code),
  });
};
