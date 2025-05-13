import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchByTypeProfessionals } from "../../features/professionals/api/fetchByTypeProfessionals";

type Props = {
        typeId: number,
        page: number,
        limit:number
}


export function useProfessionalsByType({typeId,page, limit}: Props){
        const {data, isLoading, isError, error, refetch} = useQuery({
                queryKey: ['professional',typeId, page, limit],
                queryFn: () => fetchByTypeProfessionals({typeId ,page, limit}),
                enabled: !!typeId,
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