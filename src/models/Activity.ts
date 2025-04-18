import {z } from "zod";

export const ActivitySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(255),
  slug: z.string().min(1).max(255),
  points: z.number().int().min(0),
  x: z.number().int().min(0).max(3),
  y: z.number().int().min(0).max(3),
});

export type Activity = z.infer<typeof ActivitySchema>;
