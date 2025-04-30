import { getTeam } from "@/actions/getTeamAction";
import { useSWRWithZod } from "@/lib/swr";
import { TeamSchema } from "@/models/Team";

/** @see getTeam */
export default function useGetTeam(teamId: string) {
  return useSWRWithZod({
    cacheKey: `getTeam/${teamId}`,
    fetcher: () => getTeam(teamId),
    zodSchema: TeamSchema,
    thisFile: "queries/useGetTeam.ts",
  });
}
