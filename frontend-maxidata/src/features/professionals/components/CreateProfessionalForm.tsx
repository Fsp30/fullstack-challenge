import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProfessionalDto, CreateProfissionalSchema } from "../types";
import { useCreateProfessionals } from "../../../hooks/Professionals/useCreateProfessionals";
import { TypeProfessionalSelect } from "../../../components/shared/TypeProfessionalSelect";

export function CreateProfessionalForm() {
        const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateProfessionalDto>({
                resolver: zodResolver(CreateProfissionalSchema)
        })

        const { mutate, isPeding, isSuccess, isError, error } = useCreateProfessionals()
        const onSubmit = (data: CreateProfessionalDto) => {
                mutate(data, {
                        onSuccess: () => {
                                reset()
                        }
                })
        }

        return (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">

                        <div>
                                <label className="block font-medium mb-1">Nome</label>
                                <input
                                        type="text"
                                        {...register("name")}
                                        className="w-full border rounded px-3 py-2"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                                <label className="block font-medium mb-1">Telefone</label>
                                <input
                                        type="text"
                                        {...register("telephone")}
                                        className="w-full border rounded px-3 py-2"
                                />
                                {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>}
                        </div>

                        <div>
                                <label className="block font-medium mb-1">Email</label>
                                <input
                                        type="email"
                                        {...register("email")}
                                        className="w-full border rounded px-3 py-2"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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
                                <label htmlFor="situation" className="text-sm">Está ativo?</label>
                        </div>

                        <button
                                type="submit"
                                disabled={isPeding}
                                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                        >
                                {isPeding ? "Salvando..." : "Salvar"}
                        </button>
                        {isSuccess && <p className="text-green-600 mt-2">Profissional criado com sucesso!</p>}
                        {isError && <p className="text-red-600 mt-2">Erro: {String(error)}</p>}
                </form>
        )
}