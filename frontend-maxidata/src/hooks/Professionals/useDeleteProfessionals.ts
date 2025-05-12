import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProfessionals } from "../../features/professionals/api/deleteProfessionals";

type Params = {
        id: number
}

export function useDeleteProfessionals(){
        const queryClient = useQueryClient()
        
          const mutation = useMutation({
            mutationFn: (id: Params) => deleteProfessionals(id),
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["Professional"],
              })
            },
          })
        
          return {
            data: mutation.data,
            mutate: mutation.mutate,
            isPending: mutation.isPending,
            isError: mutation.isError,
            isSuccess: mutation.isSuccess,
            error: mutation.error,
          }
}