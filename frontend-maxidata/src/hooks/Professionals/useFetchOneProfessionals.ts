import { useQuery } from "@tanstack/react-query";
import { fetchOneProfessionals } from "../../features/professionals/api/fetchOneProfessionals";

type Params = {
        id: number
}

export function useFetchOneProfessional(id: Params){
        const query = useQuery({
                queryKey: ["Professional", id],
                queryFn: () => { return fetchOneProfessionals(id) },
                enabled: !!id, 
              });
            
              return {
                data: query.data,
                isLoading: query.isLoading,
                isError: query.isError,
                isSuccess: query.isSuccess,
                error: query.error,
              }
}