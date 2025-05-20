import { z } from "zod";

import { getAllActivitiesAction } from "@/actions/getAllActivitiesAction";
import { useSWRWithZod } from "@/lib/swr";
import { ActivitySchema } from "@/models/Activity";

export default function useGetAllActivities() {
  return useSWRWithZod({
    cacheKey: `getAllActivities`,
    fetcher: () => getAllActivitiesAction(),
    zodSchema: z.array(ActivitySchema),
    thisFile: "queries/useGetAllActivities.ts",
  });
}
