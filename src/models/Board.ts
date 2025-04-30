import { z } from "zod";

import { TeamActivitySchema } from "./TeamActivity";

/** A team's board, consisting on 16 squares */
export const BoardSchema = z.array(TeamActivitySchema).length(16);

export type Board = z.infer<typeof BoardSchema>;
