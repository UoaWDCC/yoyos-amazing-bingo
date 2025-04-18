import { parse as getStackTrace } from "stack-trace";
import { z, ZodSchema } from "zod";

/** Pretty-print zod errors */
export function parseZod<T>(
  schema: ZodSchema<T>,
  object: unknown,
  message?: string,
): T {
  try {
    return schema.parse(object);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const originFile = getStackTrace(error);
      console.error(`[${originFile}] ${message || "Error parsing:"}`);
      error.errors.forEach((err) => {
        console.error(err.message);
      });
    }
    throw error;
  }
}
