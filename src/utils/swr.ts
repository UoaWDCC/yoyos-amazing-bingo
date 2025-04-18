import useSWR, { SWRConfiguration } from "swr";
import { ZodSchema } from "zod";

import { parseZod } from "./zod";

/** useSWR with Zod Schema */
export const useSWRWithZod = <T, E = unknown>(
  key: string,
  fetcher: () => Promise<T>,
  zodSchema: ZodSchema<T>,
  fileName: string,
  options?: SWRConfiguration<T, E>,
) => {
  const { data, ...rest } = useSWR<T, E>(key, fetcher, options);

  let parsedData: T | undefined = undefined;
  if (data) {
    parsedData = parseZod(zodSchema, data, fileName);
  }

  return { data: parsedData, ...rest };
};