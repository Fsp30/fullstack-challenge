import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateTypeProfessionalDto, CreateTypeProfessionalSchema } from "../types";
import { useUpdateTypeProfessionals } from "../../../hooks/TypeProfessionalsHooks/useUpdateTypeProfessionals";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetchOneTypeProfessional } from "../../../hooks/TypeProfessionalsHooks/useFetchOneTypeProfessionals";

export function UpdateTypeProfessionalForm() {
  const { id } = useParams<{ id: string }>()
  const numericId: number = Number(id)

  const { data: existingData, isLoading } = useFetchOneTypeProfessional({ id: numericId! })
  const { mutate, isPending, isSuccess, isError, error } =
    useUpdateTypeProfessionals()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateTypeProfessionalDto>({
    resolver: zodResolver(CreateTypeProfessionalSchema),
  })

  useEffect(() => {
    if (existingData) {
      reset({
        describe: existingData.describe,
        situation: existingData.situation,
      })
    }
  }, [existingData, reset])

  const onSubmit = (data: UpdateTypeProfessionalDto) => {
    if (!id) return

    mutate(
      { id, data }
    )
  }

  if (isLoading) {
    return <p className="text-center">Carregando dados...</p>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block font-medium mb-1">Descrição</label>
        <input
          type="text"
          {...register("describe")}
          className="w-full border rounded px-3 py-2"
        />
        {errors.describe && (
          <p className="text-red-500 text-sm mt-1">{errors.describe.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register("situation")}
          id="situation"
          className="w-4 h-4"
        />
        <label htmlFor="situation" className="text-sm">
          Está ativo?
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isPending ? "Atualizando..." : "Atualizar"}
      </button>

      {isSuccess && (
        <p className="text-green-600 mt-2">
          Tipo de profissional atualizado com sucesso!
        </p>
      )}
      {isError && <p className="text-red-600 mt-2">Erro: {String(error)}</p>}
    </form>
  )
}
