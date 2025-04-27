import { z } from "zod";

/** A single square in the board */
export const SquareSchema = z.boolean({ message: "Invalid square" }); // This schema will need to be added to

/** 4x4 board */
export const BoardSchema = z
  .array(z.array(SquareSchema).length(4, { message: "Invalid board" }))
  .length(4, { message: "Invalid board" });

export type Square = z.infer<typeof SquareSchema>;
export type Board = z.infer<typeof BoardSchema>;
