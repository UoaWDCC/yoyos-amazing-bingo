import { z } from "zod";

import { completeActivity } from "@/actions/completeActivity";
import { useSWRWithZod } from "@/utils/swr";

/** @see completeActivity */
export default function useCompleteActivity(code: string, activityId: string) {
  return useSWRWithZod({
    cacheKey: `completeActivity/${code}/${activityId}`,
    fetcher: () => completeActivity(code, activityId),
    zodSchema: z.void(),
    thisFile: "queries/useCompleteActivity.ts",
  });
}