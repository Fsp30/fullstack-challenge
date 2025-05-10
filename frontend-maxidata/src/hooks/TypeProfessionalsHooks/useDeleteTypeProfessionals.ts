import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTypeProfessionals } from "../../features/typeProfessionals/api/deleteTypeProfessionals";

type Params = {
        id :number
}

export function useDeleteTypeProfessional() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (id: Params) => deleteTypeProfessionals(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["typeProfessional"],
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
