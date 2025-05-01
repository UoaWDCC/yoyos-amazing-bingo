import { z } from "zod";

export const IdSchema = z
  .string()
  .nonempty({ message: "Id must be a non-empty string" });
export type Id = z.infer<typeof IdSchema>;

export const CodeSchema = z
  .string()
  .length(6, { message: "Code must be a 6 character string" });
export type Code = z.infer<typeof CodeSchema>;
