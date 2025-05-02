import { getGameStatusAction } from "@/actions/getGameStatusAction";
import { useSWRWithZod } from "@/lib/swr";
import { gameStatusSchema } from "@/models/GameStatus";

/** @see getGameStatusAction */
export default function useGetGameStatus() {
  return useSWRWithZod({
    cacheKey: `getGameStatus`,
    fetcher: () => getGameStatusAction(),
    zodSchema: gameStatusSchema,
    thisFile: "queries/useGetGameStatus.ts",
  });
}
