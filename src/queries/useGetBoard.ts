import { z } from "zod";

import { getSquares } from "@/actions/getSquares";
import { SquareSchema } from "@/models/Square";
import { useSWRWithZod } from "@/utils/swr";

export default function useGetBoard() {
  return useSWRWithZod({
    cacheKey: `useGetSquares`, //TODO: somehow get the teamid in here
    fetcher: getSquares,
    zodSchema: z.array(SquareSchema),
    thisFile: "queries/useGetSquares.ts",
  });
}
