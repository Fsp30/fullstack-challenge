import { useQuery } from "@tanstack/react-query";
import { fetchOneTypeProfessionals } from "../../features/typeProfessionals/api/fetchOneTypeProfessionals";

type Params = {
        id: string
}

export function useFetchOneTypeProfessional(id: Params){
        return useQuery({
                queryKey: ["typeProfessional", id],
                queryFn: () => fetchOneTypeProfessionals(id),
                enabled: !!id,
              })
}