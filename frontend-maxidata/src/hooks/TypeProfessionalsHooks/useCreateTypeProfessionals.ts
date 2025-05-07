import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTypeProfessionalDto } from "../../features/typeProfessionals/types";
import { createTypeProfessionals } from "../../features/typeProfessionals/api/createTypeProfessionals";

export function useCreateTypeProfessionals() {
        const queryClient = useQueryClient()
      
        const mutation = useMutation({
          mutationFn: (data: CreateTypeProfessionalDto) => createTypeProfessionals(data),
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["typeProfessional"]
            })
          }
        })
      
        return {
          mutate: mutation.mutate,
          isPeding: mutation.isPending,
          isError: mutation.isError,
          isSuccess: mutation.isSuccess,
          error: mutation.error
        }
      }
      