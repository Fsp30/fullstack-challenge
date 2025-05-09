import { useQuery } from "@tanstack/react-query";
import { fetchOneTypeProfessionals } from "../../features/typeProfessionals/api/fetchOneTypeProfessionals";

type Params = {
        id: string
}

export function useFetchOneTypeProfessional(id: Params){
        const query = useQuery({
                queryKey: ["typeProfessional", id],
                queryFn: () => { return fetchOneTypeProfessionals(id) },
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