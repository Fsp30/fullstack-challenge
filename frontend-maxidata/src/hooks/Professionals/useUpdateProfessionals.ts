import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfessionals } from "../../features/professionals/api/updateProfessionals";
import { UpdateProfessionalDto } from "../../features/professionals/types";

type UpdateParams = {
        id: number,
        data: UpdateProfessionalDto
}

export function useUpdateProfessionals() {
        const queryClient = useQueryClient()

        const mutation = useMutation({
                mutationFn: ({ id, data }: UpdateParams) => updateProfessionals(data, id),
                onSuccess: () => {
                        queryClient.invalidateQueries({
                                queryKey: ['professionals']
                        })
                }
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