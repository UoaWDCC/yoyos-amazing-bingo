import { getBoard } from "@/actions/getSquares";
import { useSWRWithZod } from "@/lib/swr";
import { BoardSchema } from "@/models/Board";





export default function useGetBoard(teamId: string) {
  return useSWRWithZod({
    cacheKey: `getBoard/${teamId}`,
    fetcher: getBoard,
    zodSchema: BoardSchema,
    thisFile: "queries/useGetBoard.ts",
  });
}