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
                return <p className="text-center">Carregando dados...</p>
        }

        return (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                        <div>
                                <label className="block font-medium mb-1">Nome do Profissional</label>
                                <input
                                        type="text"
                                        {...register("name")}
                                        className="w-full border rounded px-3 py-2"
                                />
                                {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                        </div>
                        <div>
                                <label className="block font-medium mb-1">Email do Profissional</label>
                                <input
                                        type="text"
                                        {...register("email")}
                                        className="w-full border rounded px-3 py-2"
                                />
                                {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                        </div>
                        <div>
                                <label className="block font-medium mb-1">Telefone do Profissional</label>
                                <input
                                        type="text"
                                        {...register("telephone")}
                                        className="w-full border rounded px-3 py-2"
                                />
                                {errors.telephone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>
                                )}
                        </div>
                        <TypeProfessionalSelect
                                register={register("typeOfProfessionalId", { valueAsNumber: true })}
                                error={errors.typeOfProfessionalId?.message}
                        />
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