import { z, ZodSchema } from "zod";

/** Pretty-print zod errors */
export function parseZod<T>(
  schema: ZodSchema<T>,
  object: unknown,
  fileName?: string,
): T {
  try {
    return schema.parse(object);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(`[${fileName || "Unknown"}] Error parsing:`);
      error.errors.forEach((err) => {
        console.error(err.message);
      });
    }
    throw error;
  }
}
