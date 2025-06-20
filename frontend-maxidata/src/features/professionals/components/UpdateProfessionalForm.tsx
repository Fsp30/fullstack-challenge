import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProfessionalDto, CreateProfissionalSchema } from "../types";
import { useUpdateProfessionals } from "../../../hooks/Professionals/useUpdateProfessionals";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetchOneProfessional } from "../../../hooks/Professionals/useFetchOneProfessionals";
import { TypeProfessionalSelect } from "../../../components/shared/TypeProfessionalSelect";

export function UpdateProfessionalForm() {
  const { stringId } = useParams<{ stringId: string }>()
  const id: number = Number(stringId)

  const { data: existingData, isLoading } = useFetchOneProfessional({ id: id! })
  const { mutate, isPending, isSuccess, isError, error } = useUpdateProfessionals()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<UpdateProfessionalDto>({
    resolver: zodResolver(CreateProfissionalSchema)
  })

  useEffect(() => {
    if (existingData) {
      reset({
        name: existingData.name,
        email: existingData.email,
        situation: existingData.situation,
        telephone: existingData.telephone,
        typeOfProfessionalId: existingData.typeOfProfessionalId,
      })
    }
  }, [existingData, reset])

  const onSubmit = (data: UpdateProfessionalDto) => {
    if (!id) return mutate(
      { id, data }
    )
  }

  if (isLoading) {
    return (
      <div role="status" className="flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-amber-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 
              0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 
              100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 
              27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 
              90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 
              50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 
              97.0079 33.5539C95.2932 28.8227 92.871 24.3692 
              89.8167 20.348C85.8452 15.1192 80.8826 10.7238 
              75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 
              56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 
              41.7345 1.27873C39.2613 1.69328 37.813 4.19778 
              38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 
              44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 
              55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 
              70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 
              82.5849 25.841C84.9175 28.9121 86.7997 32.2913 
              88.1811 35.8758C89.083 38.2158 91.5421 39.6781 
              93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="max-w-auto mx-auto mt-10 p-8 bg-whiteCard dark:bg-zinc-700 rounded-2xl shadow-md space-y-6 items-center justify-center">
      <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white">
        Atualizar Profissional
      </h2>

      <form
        key={existingData?.id} 
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Nome do Profissional
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Digite o nome completo"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Email do Profissional
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Digite o e-mail"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Telefone do Profissional
          </label>
          <input
            type="tel"
            {...register("telephone")}
            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="(xx) xxxxx-xxxx"
          />
          {errors.telephone && (
            <p className="text-sm text-red-500 mt-1">{errors.telephone.message}</p>
          )}
        </div>
        <TypeProfessionalSelect
          register={register("typeOfProfessionalId", { valueAsNumber: true })}
          error={errors.typeOfProfessionalId?.message}
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="situation"
            {...register("situation")}
            className="w-5 h-5 text-amber-600 border-zinc-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600"
          />
          <label htmlFor="situation" className="text-sm text-zinc-700 dark:text-zinc-300">
            Está ativo?
          </label>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-6 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-all duration-200 disabled:opacity-50"
        >
          {isPending ? "Atualizando..." : "Atualizar"}
        </button>
        {isSuccess && (
          <p className="text-green-600 text-center text-sm font-medium">
            Profissional atualizado com sucesso!
          </p>
        )}

        {isError && (
          <p className="text-red-600 text-center text-sm font-medium">
            Erro: {(error as Error).message}
          </p>
        )}
      </form>
    </div>
  )
}