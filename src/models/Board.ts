import { z } from "zod";

/** A single square in the board */
export const SquareSchema = z.object({
  completed: z.boolean({ message: "Square has invalid completed" }),
  activity: z.string({message: "Square has invalid activity"}),
  points: z.number({ message: "Square has invalid points" }),
});

/** 4x4 board */
export const BoardSchema = z
  .array(z.array(SquareSchema).length(4, { message: "Invalid board" }))
  .length(4, { message: "Invalid board" });

export type Square = z.infer<typeof SquareSchema>;
export type Board = z.infer<typeof BoardSchema>;
