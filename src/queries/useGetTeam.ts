import { getTeam } from "@/actions/getTeam";
import { TeamSchema } from "@/models/Team";
import { useSWRWithZod } from "@/utils/swr";

/** @see getTeam */
export default function useGetTeam(code: string, teamId: string) {
  return useSWRWithZod({
    cacheKey: `getTeam/${code}/${teamId}`,
    fetcher: () => getTeam(teamId),
    zodSchema: TeamSchema,
    thisFile: "queries/useGetTeam.ts",
  });
}
