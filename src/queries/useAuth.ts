import { auth } from "@/actions/authActions";
import { useSWRWithZod } from "@/lib/swr";
import { z } from "zod";

/** @see getTeam */
export default function useAuth(code: string) {
  return useSWRWithZod({
    cacheKey: `auth/${code}`,
    fetcher: async () => (await auth()).teamId,
    zodSchema: z.string(),
    thisFile: "queries/useGetTeam.ts",
  });
}
