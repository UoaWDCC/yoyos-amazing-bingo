import { getBoard } from "@/actions/getSquares";
import { BoardSchema } from "@/models/Board";
import { useSWRWithZod } from "@/utils/swr";

export default function useGetBoard() {
  return useSWRWithZod({
    cacheKey: `useGetSquares`, //TODO: somehow get the teamid in here
    fetcher: getBoard,
    zodSchema: BoardSchema,
    thisFile: "queries/useGetSquares.ts",
  });
}
