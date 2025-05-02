import { getTeamAction } from "@/actions/getTeamAction";
import { useSWRWithZod } from "@/lib/swr";
import { TeamSchema } from "@/models/Team";
import { z } from "zod";

/** @see getTeamAction */
export default function useGetTeam(teamId: string | null) {
  return useSWRWithZod({
    cacheKey: teamId ? `getTeam/${teamId}` : null, // Don't fetch if no teamId
    fetcher: async () => {
      const a = await getTeamAction(teamId ?? "NEVER-USED");
      if (a === null) {
        return "NONE";
      }
      return a;
    },
    zodSchema: z.literal("NONE").or(TeamSchema),
    thisFile: "queries/useGetTeam.ts",
  });
}
