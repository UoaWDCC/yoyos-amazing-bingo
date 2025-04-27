import { db } from "@/db/connection";

export async function getBoardState() {
  return await db.query.squaresTable.findMany();
}
