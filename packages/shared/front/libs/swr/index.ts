import SWR, { SWRConfiguration } from "swr";

export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export const useSWR = <T>(
  key: string | string[] | null,
  fetcher: () => Promise<T>,
  config?: SWRConfiguration
) => SWR<T>(key, fetcher, { ...swrConfig, ...config });
