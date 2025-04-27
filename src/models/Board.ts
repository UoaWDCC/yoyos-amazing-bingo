import { z } from "zod";

export const SquareSchema = z.object({
  x: z.number().int().min(0).max(3), // for 4x4 board
  y: z.number().int().min(0).max(3),
  completed: z.boolean(),
});

/** 4x4 board */
export const BoardSchema = z.array(SquareSchema);

export type Square = z.infer<typeof SquareSchema>;
export type Board = z.infer<typeof BoardSchema>;
