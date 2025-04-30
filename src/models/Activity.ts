import { z } from "zod";

import { CodeSchema, IdSchema } from "./common";

/** A global object, representing an activity everyone has access to */
export const ActivitySchema = z.object({
  id: IdSchema,
  name: z.string().min(1).max(255),
  code: CodeSchema,
  cardImageName: z.string().url(), // The URL of the card image for the activity
  description: z.string(),
  basePoints: z.number().int().min(0), // The base points for the activity, before team modifiers
  boardOrder: z.number().int().min(0).max(15), // The order in which the activity appears on the board (0-indexed, in reading order)
});

export type Activity = z.infer<typeof ActivitySchema>;
