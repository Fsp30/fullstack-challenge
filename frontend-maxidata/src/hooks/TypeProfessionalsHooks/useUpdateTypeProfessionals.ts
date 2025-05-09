import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTypeProfessionalDto } from "../../features/typeProfessionals/types";
import { updateTypeProfessionals } from "../../features/typeProfessionals/api/updateTypeProfessionals";

type UpdateParams = {
  id: string;
  data: UpdateTypeProfessionalDto
}

export function useUpdateTypeProfessionals() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: ({ id, data }: UpdateParams) => updateTypeProfessionals(data, id),
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
