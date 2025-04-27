import { getBoard } from "@/actions/getSquares";
import { BoardSchema } from "@/models/Board";
import { useSWRWithZod } from "@/utils/swr";

export default function useGetBoard() {
  return useSWRWithZod({
    // cacheKey: `useGetBoard/${teamId}`, //TODO: somehow get the teamid in here
    cacheKey: `useGetBoard`,
    fetcher: getBoard,
    zodSchema: BoardSchema,
    thisFile: "queries/useGetSquares.ts",
  });
}
