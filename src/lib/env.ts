/**
 * This file reads environment variables from an .env file and validates them with zod
 * It exports the validated environment variables as an object to be used throughout the application
 */

import dotenv from "dotenv";
import { z } from "zod";

import { parseZod } from "./zod";

// Node.js check
if (typeof window !== "undefined") {
  throw new Error(
    "env.ts should only be used in Node.js environment, not in the browser"
  );
}

// .env schema
const envSchema = z.object({
  APP_URL: z.string({ message: "APP_URL must be a string" }).url().trim(),
  DB_URL: z.string({ message: "DB_URL must be a string" }).trim(),
  COOKIE_SECRET: z
    .string({ message: "COOKIE_SECRET must be a string" })
    .min(32, "COOKIE_SECRET must be at least 32 characters long"),
  ADMIN_ID: z.string({ message: "ADMIN_ID must be a string" }).trim(),
  ADMIN_CODE: z.string().length(6, {
    message: "ADMIN_CODE must be exactly 6 characters long",
  }),
});
export type Env = z.infer<typeof envSchema>;

// Read .env, validate and export it
dotenv.config();
const env = parseZod(envSchema, process.env, "utils/env.ts");
export default env;
