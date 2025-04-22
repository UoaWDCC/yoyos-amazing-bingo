import { z } from "zod";

import { completeActivity } from "@/actions/completeActivity";
import { useSWRWithZod } from "@/utils/swr";

/** @see completeActivity */
export default function useCompleteActivity(code: string, activityId: string) {
  return useSWRWithZod(
    `completeActivity/${code}/${activityId}`,
    () => completeActivity(code, activityId),
    z.void(),
    "queries/useCompleteActivity.ts",
  );
}
