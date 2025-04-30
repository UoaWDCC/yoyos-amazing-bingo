import { z } from "zod";

import { BoardSchema } from "./Board";
import { CodeSchema, IdSchema } from "./common";

export const TeamSchema = z.object({
  id: IdSchema,
  name: z.string().min(1).max(255),
  code: CodeSchema,
  points: z.number().int().min(0),
  board: BoardSchema,
  specialActivity: z.number().int().min(0).max(15), // The index of the team's special square on the board (extra points)
});

export type Team = z.infer<typeof TeamSchema>;
