import { getTeam } from "@/actions/getTeam";
import { TeamSchema } from "@/models/Team";
import { useSWRWithZod } from "@/utils/swr";

export default function useGetTeam(code: string, teamId: string) {
  return useSWRWithZod(
    `team/${code}/${teamId}`,
    () => getTeam(code, teamId),
    TeamSchema,
    "queries/useGetTeam.ts",
  );
}
