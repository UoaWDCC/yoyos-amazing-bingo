import { getTeamAction } from "@/actions/getTeamAction";
import { useSWRWithZod } from "@/lib/swr";
import { TeamSchema } from "@/models/Team";

/** @see getTeamAction */
export default function useGetTeam(teamId: string | null) {
  return useSWRWithZod({
    cacheKey: teamId ? `getTeam/${teamId}` : null, // Don't fetch if no teamId
    fetcher: () => {
      if (!teamId) throw new Error("No teamId provided");
      return getTeamAction(teamId);
    },
    zodSchema: TeamSchema,
    thisFile: "queries/useGetTeam.ts",
  });
}
