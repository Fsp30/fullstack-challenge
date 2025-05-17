import { useState } from "react"
import { useProfessionalsByType } from "../../../hooks/Professionals/useFetchByTypeProfessionals"
import { DeleteProfessionalButton } from "./DeleteProfessionalButton"
import { FetchOneProfessionalButton } from "./FetchOneProfessionalButton"

interface ProfessionalsListByTypeProps {
        typeId: number
}

export function ProfessionalsListByType({ typeId }: ProfessionalsListByTypeProps) {
        const [page, setPage] = useState(1)
        const [limit] = useState(10)

        const { data, total, isLoading, isError, error, refetch } = useProfessionalsByType({ typeId, page, limit })

        const totalPages = Math.ceil(total / limit)

        const handleDeleteSuccess = () => {
                if (data?.length === 1 && page > 1) {
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
                                <pre>{error?.message || String(error)}</pre>
                                <button
                                        onClick={() => refetch()}
                                        className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                >
                                        Tentar novamente
                                </button>
                        </div>
                )
        }

        if (!data || data.length === 0) {
                return (
                        <div className="p-4 max-w-2xl mx-auto">
                                <h2 className="text-xl font-bold mb-4">Profissionais</h2>
                                <p className="text-gray-500">Nenhum profissional encontrado para este tipo.</p>
                        </div>
                )
        }

        return (
                <div className="p-4 max-w-2xl mx-auto">
                        <h2 className="text-xl font-bold mb-4">Profissionais</h2>

                        <ul className="space-y-2 mb-6">
                                {data.map((professional) => (
                                        <li key={professional.id} className="border rounded p-4 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                        <div className="space-y-1">
                                                                <p className="text-sm text-gray-500">ID: {professional.id}</p>
                                                                <p className="font-medium">{professional.name}</p>
                                                                <p className={`text-sm ${professional.situation ? 'text-green-600' : 'text-red-600'}`}>
                                                                        {professional.situation ? 'Ativo' : 'Inativo'}
                                                                </p>
                                                                <p className="text-sm text-gray-600">
                                                                        Tipo: {professional.typeProfessional?.describe || 'Não especificado'}
                                                                </p>
                                                                <p className="text-sm text-gray-600">Email: {professional.email}</p>
                                                                <p className="text-sm text-gray-600">Telefone: {professional.telephone}</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                                <FetchOneProfessionalButton id={professional.id} />
                                                                <DeleteProfessionalButton
                                                                        id={professional.id}
                                                                        onDeleted={handleDeleteSuccess}
                                                                />
                                                        </div>
                                                </div>
                                        </li>
                                ))}
                        </ul>

                        {totalPages > 1 && (
                                <div className="flex items-center justify-between">
                                        <button
                                                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                                disabled={page === 1}
                                                className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
                                        >
                                                Anterior
                                        </button>

                                        <span className="text-sm text-gray-600">
                                                Página {page} de {totalPages}
                                        </span>

                                        <button
                                                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                                disabled={page === totalPages}
                                                className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
                                        >
                                                Próxima
                                        </button>
                                </div>
                        )}
                </div>
        )
}