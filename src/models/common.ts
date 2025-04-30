import { z } from "zod";

export const IdSchema = z.string().min(1).max(255);
export type Id = z.infer<typeof IdSchema>;

export const CodeSchema = z.string().min(1).max(6);
export type Code = z.infer<typeof CodeSchema>;
