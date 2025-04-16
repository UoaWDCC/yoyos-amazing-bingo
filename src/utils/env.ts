/**
 * This file reads environment variables from an .env file and validates them with zod
 * It exports the validated environment variables as an object to be used throughout the application
 */

import dotenv from "dotenv";
import { z } from "zod";

// .env schema
const envSchema = z.object({
  DB_URL: z.string({ message: "DB_URL must be a string" }).trim(),
});
export type Env = z.infer<typeof envSchema>;

// Read .env, validate and export it
dotenv.config();
const env = parseEnv(process.env);
export default env;

// Validation function
function parseEnv(env: unknown): Env {
  try {
    return envSchema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(
        "Error parsing environment variables (check your .env file):",
      );
      error.errors.forEach((err) => {
        console.error(err.message);
      });
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}
