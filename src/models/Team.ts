import { z } from "zod";

import { CodeSchema, IdSchema } from "./common";
import { BoardSchema } from "./Board";

export const TeamSchema = z.object({
  id: IdSchema,
  name: z.string().min(1).max(255),
  code: CodeSchema,
  points: z.number().int().min(0),
  board: BoardSchema,
});

export type Team = z.infer<typeof TeamSchema>;
