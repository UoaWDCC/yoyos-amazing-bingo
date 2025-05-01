import { z } from "zod";

import { CodeSchema, IdSchema } from "./common";

/** A global object, representing an activity everyone has access to */
export const ActivitySchema = z.object(
  {
    id: IdSchema,
    name: z
      .string()
      .nonempty({ message: "Activity name must be a non-empty string" }),
    code: CodeSchema,
    cardImageName: z.string().nonempty({
      message: "Activity card image name must be a non-empty string",
    }), // The URL of the card image for the activity
    description: z.string({ message: "Activity description must be a string" }),
    basePoints: z
      .number()
      .int()
      .min(0, {
        message: "Activity base points must be a non-negative integer",
      }), // The base points for the activity, before team modifiers
    boardOrder: z
      .number()
      .int()
      .min(0, {
        message: "Activity board order must be a non-negative integer",
      })
      .max(15, { message: "Activity board order must not exceed 15" }), // The order in which the activity appears on the board (0-indexed, in reading order)
  },
  {
    message:
      "Activity must contain an id, name, code, cardImageName, description, basePoints, and boardOrder",
  },
);

export type Activity = z.infer<typeof ActivitySchema>;
