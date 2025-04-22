import { getChallange } from "@/actions/mockChallenge";
import { ChallangeSchema } from "@/models/Challenge";
import { useSWRWithZod } from "@/utils/swr";

export default function useChallengeQuery(id: number) {
  // i don't think you're suppose to use the key like this, someone lmk

  return useSWRWithZod(
    `time${id}`,
    () => getChallange(id),
    ChallangeSchema,
    "queries/mockChallengeQuery.ts",
  );
}
