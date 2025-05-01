import { useSWRWithZod } from "@/lib/swr";
import { ActivitySchema } from "@/models/Activity";
import { getActivityByCode } from "@/services/getActivityByCodeService";

/** @see getActivityByCode */
export default function useGetActivity(secret: string) {
  return useSWRWithZod({
    cacheKey: `collect/${secret}`,
    fetcher: () => getActivityByCode(secret),
    zodSchema: ActivitySchema,
    thisFile: "queries/useGetTeam.ts",
  });
}
