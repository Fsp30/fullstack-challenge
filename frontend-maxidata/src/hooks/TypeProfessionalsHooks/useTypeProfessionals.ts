import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchTypeProfessionals } from "../../features/typeProfessionals/api/fetchTypeProfessionals";

export function useTypeProfessionals(page: number, limit: number){
        const {data, isLoading, isError, error, refetch} = useQuery({
                queryKey: ['typeProfessional', page, limit],
                queryFn: () => fetchTypeProfessionals({page, limit}),
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