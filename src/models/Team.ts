import { z } from "zod";

import { BoardSchema } from "./Board";

export const TeamSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(255),
  code: z.string().min(1).max(20),
  board: BoardSchema,
});

export type Team = z.infer<typeof TeamSchema>;
