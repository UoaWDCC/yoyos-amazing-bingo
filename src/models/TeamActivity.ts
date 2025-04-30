import { z } from "zod";

import { ActivitySchema } from "./Activity";

/**
 * A team-specific activity, recording a team's completion status
 * Has an embedded activity object as a helper to avoid having to look it up
 *
 * On the frontend, this corresponds to a single square in the team's board
 */
export const TeamActivitySchema = z.object({
  activity: ActivitySchema,
  isCompleted: z.boolean(),
  points: z.number(),
});

export type TeamActivity = z.infer<typeof TeamActivitySchema>;