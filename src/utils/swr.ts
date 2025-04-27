import useSWR, { SWRConfiguration } from "swr";
import { ZodSchema } from "zod";

import { parseZod } from "./zod";

type ExtendedSWROptions<T, E> = SWRConfiguration<T, E> & {
  cacheKey: string;
  fetcher: () => Promise<T>;
  zodSchema: ZodSchema<T>;
  thisFile: string;
};

/** useSWR with Zod Schema */
export const useSWRWithZod = <T, E = unknown>(
  extendedSWROptions: ExtendedSWROptions<T, E>,
) => {
  const { cacheKey, fetcher, zodSchema, thisFile, ...options } =
    extendedSWROptions;
  const { data, ...rest } = useSWR<T, E>(cacheKey, fetcher, options);

  let parsedData: T | undefined = undefined;
  if (data) {
    parsedData = parseZod(zodSchema, data, thisFile);
  }

  return { data: parsedData, ...rest };
};