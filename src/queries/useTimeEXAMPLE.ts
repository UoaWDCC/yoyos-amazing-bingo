import { z } from "zod";

import { getTime } from "@/actions/getTimeEXAMPLE";
import { useSWRWithZod } from "@/utils/swr";

/** @see getTime */
export default function useGetTime() {
  // "time" is a cache key, it can be anything you want
  return useSWRWithZod({
    cacheKey: "getTime",
    fetcher: () => getTime(),
    zodSchema: z.string(), // Assuming the response is a string, adjust as needed
    thisFile: "queries/useTimeEXAMPLE.ts",
  });
}