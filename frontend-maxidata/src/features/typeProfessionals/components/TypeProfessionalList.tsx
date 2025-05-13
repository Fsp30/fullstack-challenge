import { useState } from "react";
import { useTypeProfessionals } from "../../../hooks/TypeProfessionalsHooks/useTypeProfessionals";
import { DeleteTypeProfessionalButton } from "./DeleteTypeProfessionalButton";
import { FetchOneTypeProfessionalButton } from "./FetchOneTypeProfessionalButton";


export function TypeProfessionalsList() {
        const [page, setPage] = useState(1)
        const [limit] = useState(10)

        const {data, total, isLoading, isError, error, refetch } = useTypeProfessionals(page, limit)

        const totalPages = Math.ceil(total / limit)

        const handleDeleteSuccess = () => {
               
                if (data.length === 1 && page > 1) {
                        setPage(page - 1)
                } else {
                        refetch()
                }
        }

        if (isLoading) return <p className="text-zinc-500">Carregando...</p>

        if (isError) {
                return (
                        <div className="text-red-500">
                                <p>Erro ao buscar dados.</p>
                                <pre>{String(error)}</pre>
                                <button
                                        onClick={() => refetch()}
                                        className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
                                >
                                        Tentar novamente
                                </button>
                        </div>
                )
        }

        return (
                <div className="p-4 max-w-2xl mx-auto">
                        <h2 className="text-xl font-bold mb-4">Tipos de Profissionais</h2>

                        <ul className="space-y-2 mb-6">
                                {data.map((type) => (
                                        <li key={type.id} className="border rounded p-2 shadow-sm">
                                                <div className="flex justify-between items-center">
                                                        <div>
                                                                <p className="font-medium">{type.describe}</p>
                                                                <p className="text-sm text-gray-500">ID: {type.id}</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                                <FetchOneTypeProfessionalButton id={type.id} />
                                                                <DeleteTypeProfessionalButton
                                                                        id={type.id}
                                                                        onDeleted={handleDeleteSuccess}
                                                                />
                                                        </div>
                                                </div>
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