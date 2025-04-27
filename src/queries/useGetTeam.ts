import { getTeam } from "@/actions/getTeam";
import { TeamSchema } from "@/models/Team";
import { useSWRWithZod } from "@/utils/swr";

/** @see getTeam */
export default function useGetTeam(teamId: string) {
  return useSWRWithZod({
    cacheKey: `getTeam/${teamId}`,
    fetcher: () => getTeam(teamId),
    zodSchema: TeamSchema,
    thisFile: "queries/useGetTeam.ts",
  });
}