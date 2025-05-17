import { useTypeProfessionals } from "../../hooks/TypeProfessionalsHooks/useTypeProfessionals";
import { UseFormRegisterReturn } from "react-hook-form";

interface TypeProfessionalSelectProps {
        register: UseFormRegisterReturn,
        error?: string
}

export function TypeProfessionalSelect({ register, error }: TypeProfessionalSelectProps) {

        const { data: typeProfessionals, isLoading, isError } = useTypeProfessionals(1, 100)

        return (
                <div>
                        <label className="block font-medium mb-1">Tipo de Profissional</label>
                        {isLoading ? (
                                <p className="text-sm text-gray-500">Carregando tipos...</p>
                        ) : isError ? (
                                <p className="text-sm text-red-500">Erro ao carregar tipos</p>
                        ) : (
                                <select
                                        {...register}
                                        className="w-full border rounded px-3 py-2"
                                        defaultValue=""
                                >
                                        <option value="" disabled>Selecione um tipo</option>
                                        {typeProfessionals.map((type) => (
                                                <option key={type.id} value={type.id}>
                                                        {type.describe}
                                                </option>
                                        ))}
                                </select>
                        )}
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
        )
}
