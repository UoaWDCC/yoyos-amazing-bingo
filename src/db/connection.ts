import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import env from "../lib/env";
import * as schema from "./schema";

// This is the core database connection object - use as db.___()
export const db = drizzle({
  connection: {
    connectionString: env.DB_URL,
    ssl: true,
  },
  schema: {
    ...schema,
  },
});
