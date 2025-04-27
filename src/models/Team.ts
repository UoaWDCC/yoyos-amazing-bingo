import { z } from "zod";

import { BoardSchema } from "./Square";

export const TeamSchema = z.object({
  id: z.string().min(1).max(255),
  name: z.string().min(1).max(255),
  code: z.string().min(1).max(20),
  points: z.number().int().min(0),
  board: BoardSchema,
});

export type Team = z.infer<typeof TeamSchema>;
