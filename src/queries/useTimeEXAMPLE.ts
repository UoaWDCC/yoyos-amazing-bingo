import { z } from "zod";

import { getTime } from "@/actions/getTimeEXAMPLE";
import { useSWRWithZod } from "@/utils/swr";

/** @see getTime */
export default function useTime() {
  // "time" is a cache key, it can be anything you want
  return useSWRWithZod("time", getTime, z.string(), "queries/testQuery.ts");
}
