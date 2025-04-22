import { z } from "zod";

import { getAllTeams } from "@/actions/getAllTeams";
import { TeamSchema } from "@/models/Team";
import { useSWRWithZod } from "@/utils/swr";

/** @see getAllTeams */
export default function useGetAllTeams(code: string) {
  return useSWRWithZod(
    `getAllTeams/${code}`,
    () => getAllTeams(code),
    z.array(TeamSchema),
    "queries/useGetAllTeams.ts",
  );
}
