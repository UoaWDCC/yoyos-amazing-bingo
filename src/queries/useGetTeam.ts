import { getTeamAction } from "@/actions/getTeamAction";
import { useSWRWithZod } from "@/lib/swr";
import { TeamSchema } from "@/models/Team";

/** @see getTeamAction */
export default function useGetTeam(teamId: string) {
  return useSWRWithZod({
    cacheKey: `getTeam/${teamId}`,
    fetcher: () => getTeamAction(teamId),
    zodSchema: TeamSchema,
    thisFile: "queries/useGetTeam.ts",
  });
}
