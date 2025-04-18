import { z } from "zod";

import { getTime } from "@/actions/test";
import { useSWRWithZod } from "@/utils/swr";

export default function useTestQuery() {
  // "time" is a cache key, it can be anything you want
  return useSWRWithZod("time", getTime, z.string(), "queries/testQuery.ts");
}