import { getChallenge } from "@/actions/mockChallenge";
import { ChallengeSchema } from "@/models/Challenge";
import { useSWRWithZod } from "@/utils/swr";

export default function useChallengeQuery(id: number) {
  // i don't think you're suppose to use the key like this, someone lmk

  return useSWRWithZod({
    cacheKey: `time${id}`,
    fetcher: () => getChallenge(id),
    zodSchema: ChallengeSchema,
    thisFile: "queries/mockChallengeQuery.ts",
  });
}
