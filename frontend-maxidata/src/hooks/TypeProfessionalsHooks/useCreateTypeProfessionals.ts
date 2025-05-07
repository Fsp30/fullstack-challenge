import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTypeProfessionalDto } from "../../features/typeProfessionals/types";
import { createTypeProfessionals } from "../../features/typeProfessionals/api/createTypeProfessionals";

export function useCreateTypeProfessionals(){
        const queryClient = useQueryClient()

        return useMutation({
                mutationFn: (data: CreateTypeProfessionalDto) => createTypeProfessionals(data),
                onSuccess: () => {
                        queryClient.invalidateQueries({
                                queryKey: ["typeProfessional"]
                        })
                }
        })
}