import { useState } from "react";
import { useTypeProfessionals } from "../../../hooks/TypeProfessionalsHooks/useTypeProfessionals";

export function TypeProfessionalsList() {
        const [page, setPage] = useState(1)
        const [limit] = useState(10)

        const { data, total, isLoading, isError, error} = useTypeProfessionals(page, limit)
        const totalPages = Math.ceil(total / limit)

        if (isLoading) return <p className="text-zinc-500">Carregando...</p>

        if (isError)
                return (
                        <div className="text-red-500">
                                <p>Erro ao buscar dados.</p>
                                <pre>{String(error)}</pre>
                        </div>
                )
        return (
                <div className="p-4 max-w-2xl mx-auto">
                        <h2 className="text-xl font-bold mb-4">Tipos de Profissionais</h2>

                        <ul className="space-y-2 mb-6">
                                {data.map((type) => (
                                        <li key={type.id} className="border rounded p-2 shadow-sm">
                                                {type.describe}
                                        </li>
                                ))}
                        </ul>
                        <div className="flex items-center justify-between">
                                <button
                                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                        disabled={page === 1}
                                        className="px-3 py-1 border rounded disabled:opacity-50"
                                >
                                        Anterior
                                </button>

                                <span>
                                        Página {page} de {totalPages}
                                </span>
                                <button
                                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                        disabled={page === totalPages}
                                        className="px-3 py-1 border rounded disabled:opacity-50"
                                >
                                        Próxima
                                </button>
                        </div>
                </div>
        )
}