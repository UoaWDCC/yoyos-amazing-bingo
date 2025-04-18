import useSWR, { SWRConfiguration } from "swr";
import { ZodSchema } from "zod";

/** useSWR with Zod Schema */
export const useSWRWithZod = <T, E = unknown>(
  key: string,
  fetcher: () => Promise<T>,
  zodSchema: ZodSchema<T>,
  options?: SWRConfiguration<T, E>,
) => {
  const { data, ...rest } = useSWR<T, E>(key, fetcher, options);

  let parsedData: T | undefined = undefined;
  if (data) {
    parsedData = zodSchema.parse(data);
  }

  return { data: parsedData, ...rest };
};
