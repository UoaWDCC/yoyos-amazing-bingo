import { getBoard } from "@/actions/getSquares";
import { BoardSchema } from "@/models/Board";
import { useSWRWithZod } from "@/utils/swr";

export default function useGetBoard(teamId: string) {
  return useSWRWithZod({
    cacheKey: `getBoard/${teamId}`,
    fetcher: getBoard,
    zodSchema: BoardSchema,
    thisFile: "queries/useGetBoard.ts",
  });
}
