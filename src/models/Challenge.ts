import { z } from "zod";

import { pokeDifficulty } from "@/components/ui/pokeball/Pokeball";

const ChallangeSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1),
  description: z.string().min(1),
  difficulty: z.enum(pokeDifficulty),
});

type ChallengeDTO = z.infer<typeof ChallangeSchema>;

export { ChallangeSchema };
export type { ChallengeDTO };
