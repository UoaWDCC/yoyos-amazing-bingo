import { z } from "zod";

import { getAllTeamsAction } from "@/actions/getAllTeamsAction";
import { useSWRWithZod } from "@/lib/swr";
import { TeamSchema } from "@/models/Team";

/** @see getAllTeams */
export default function useGetAllTeams() {
  return useSWRWithZod({
    cacheKey: `getAllTeams`,
    fetcher: () => getAllTeamsAction(),
    zodSchema: z.array(TeamSchema),
    thisFile: "queries/useGetAllTeams.ts",
  });
}
