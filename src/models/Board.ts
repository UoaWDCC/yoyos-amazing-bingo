import { z } from "zod";

/** A single square in the board */
export const ActivitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  x: z.number(),
  y: z.number(),
});

export const SquareSchema = z.object({
  completed: z.boolean(),
  points: z.number(),
  activity: ActivitySchema,
});

export const BoardSchema = z.array(SquareSchema);

export type Activity = z.infer<typeof ActivitySchema>;
export type Square = z.infer<typeof SquareSchema>;
export type Board = z.infer<typeof BoardSchema>;
