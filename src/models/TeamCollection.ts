import { z } from "zod";

/**
 * A team-specific completed activities, recording a team's completion status
 * Has an embedded activity object as a helper to avoid having to look it up
 *
 * On the frontend, this corresponds to the entire collection card board
 */
export const TeamCollectionSchema = z.object(
  {
    name: z.string(),
    imageKey: z.string(),
    order: z.number(),
    basePoints: z.number(),
    isCompleted: z.boolean({
      message: "Team activity must have a boolean completion status",
    }),
  },
  {
    message: "TeamCollection must contain an imageKey and a completion status",
  },
);

export type TeamCollection = z.infer<typeof TeamCollectionSchema>;
