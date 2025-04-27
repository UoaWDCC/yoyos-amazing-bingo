import {db} from "@/db/connection";
import { teamsTable } from "@/db/schema";

export const getTeams = async () => {
    const res = await db.select().from(teamsTable);
    return res;
}