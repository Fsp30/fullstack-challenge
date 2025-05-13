import { useState } from "react";
import { useFetchOneProfessional } from "../../../hooks/Professionals/useFetchOneProfessionals";

interface Props {
        id: number
}

export function FetchOneProfessionalButton({ id }: Props) {
        const [visible, setVisible] = useState(false)
        const { data, isLoading, isError } = useFetchOneProfessional({ id })
        return (
                <div>
                        <button onClick={() => setVisible(!visible)} className="text-blue-600 underline">
                                Ver detalhes
                        </button>

                        {visible && (
                                <div className="mt-2 border p-2 rounded bg-gray-50">
                                        {isLoading && <p>Carregando...</p>}
                                        {isError && <p className="text-red-600">Erro ao buscar dados</p>}
                                        {data && (
                                                <ul className="text-sm">
                                                        <li><strong>ID:</strong> {data.id}</li>
                                                        <li><strong>Nome:</strong> {data.name}</li>
                                                        <li><strong>email:</strong> {data.email}</li>
                                                        <li><strong>Telefone:</strong> {data.telephone}</li>
                                                        <li><strong>Criado em:</strong> {data.createdAt}</li>
                                                        <li><strong>Nº do tipo de Profissional:</strong> {data.typeOfProfessionalId}</li>
                                                        <li><strong>Ativo:</strong> {data.situation ? "Sim" : "Não"}</li>
                                                </ul>
                                        )}
                                </div>
                        )}
                </div>
        )
}