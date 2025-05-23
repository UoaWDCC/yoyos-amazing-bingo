import { z } from "zod";

import { BoardSchema } from "./Board";
import { CodeSchema, IdSchema } from "./common";

export const TeamSchema = z.object(
  {
    id: IdSchema,
    name: z
      .string()
      .nonempty({ message: "Team name must be a non-empty string" }),
    code: CodeSchema,
    board: BoardSchema,
    specialActivity: z
      .number()
      .int()
      .min(0)
      .max(15, { message: "Team special activity must be between 0 and 15" }), // The index of the team's special square on the board (extra points)
  },
  {
    message:
      "Team must contain an id, name, code, points, board, and specialActivity",
  },
);

export type Team = z.infer<typeof TeamSchema>;
