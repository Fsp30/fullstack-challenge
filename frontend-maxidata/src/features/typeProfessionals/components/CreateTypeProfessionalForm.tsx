import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTypeProfessionalDto, CreateTypeProfessionalSchema } from '../types'
import { useCreateTypeProfessionals } from '../../../hooks/TypeProfessionalsHooks/useCreateTypeProfessionals'

export function CreateTypeProfessionalForm() {
        const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateTypeProfessionalDto>({
                resolver: zodResolver(CreateTypeProfessionalSchema)
        })
        const { mutate, isPeding, isSuccess, isError, error } = useCreateTypeProfessionals()

        const onSubmit = (data: CreateTypeProfessionalDto) => {
                mutate(data, {
                        onSuccess: () => {
                                reset()
                        }
                })
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
                                {errors.describe && <p className="text-red-500 text-sm mt-1">{errors.describe.message}</p>}
                        </div>

                        <div className="flex items-center gap-2">
                                <input
                                        type="checkbox"
                                        {...register("situation")}
                                        id="situation"
                                        className="w-4 h-4"
                                />
                                <label htmlFor="situation" className="text-sm">Está ativo?</label>
                        </div>

                        <button
                                type="submit"
                                disabled={isPeding}
                                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                        >
                                {isPeding ? "Salvando..." : "Salvar"}
                        </button>

                        {isSuccess && <p className="text-green-600 mt-2">Tipo de profissional criado com sucesso!</p>}
                        {isError && <p className="text-red-600 mt-2">Erro: {String(error)}</p>}
                </form>
        )
}