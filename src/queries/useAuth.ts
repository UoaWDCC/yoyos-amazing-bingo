import { z } from "zod";

import { auth } from "@/actions/authActions";
import { useSWRWithZod } from "@/lib/swr";

/** @see auth */
export default function useAuth() {
  return useSWRWithZod({
    cacheKey: "auth",
    fetcher: async () => (await auth()).teamId,
    zodSchema: z.string(),
    thisFile: "queries/useAuth.ts",
  });
}
