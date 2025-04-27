import { z } from "zod";

import { getAllTeams } from "@/actions/getAllTeams";
import { TeamSchema } from "@/models/Team";
import { useSWRWithZod } from "@/utils/swr";

/** @see getAllTeams */
export default function useGetAllTeams(code: string) {
  return useSWRWithZod({
    cacheKey: `getAllTeams/${code}`,
    fetcher: () => getAllTeams(code),
    zodSchema: z.array(TeamSchema),
    thisFile: "queries/useGetAllTeams.ts",
  });
}