import { pingApi } from "../../../apis/ping";
import { useQuery } from '@tanstack/react-query';

export default function usePing() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['ping'],  
    queryFn: pingApi,
    staleTime: 10000,
  });

  return {
    isLoading,
    isError,
    data,
    error
  };
}
