import { z } from "zod";

export const IdSchema = z
  .string()
  .nonempty({ message: "Id must be a non-empty string" });
export type Id = z.infer<typeof IdSchema>;

export const CodeSchema = z
  .string()
  .min(1, { message: "Code must be a non-empty string" })
  .max(6, { message: "Code must be at most 6 characters" });
export type Code = z.infer<typeof CodeSchema>;
