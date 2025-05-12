import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateProfessionalDto } from "../../features/professionals/types";
import { createProfessionals } from "../../features/professionals/api/createProfessionals";

export function useCreateProfessionals() {
        const queryClient = useQueryClient()
      
        const mutation = useMutation({
          mutationFn: (data: CreateProfessionalDto) => createProfessionals(data),
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["Professional"]
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
      