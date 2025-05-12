import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchProfessionals } from "../../features/professionals/api/fetchProfessionals";

export function useProfessionals(page: number, limit: number){
        const {data, isLoading, isError, error, refetch} = useQuery({
                queryKey: ['professional', page, limit],
                queryFn: () => fetchProfessionals({page, limit}),
                placeholderData: keepPreviousData,
                staleTime: 1000*60,
                retry: 1
        })

        return {
                data: data?.data ?? [],
                total: data?.total ?? 0,
                isLoading,
                isError,
                error,
                refetch
        }
}