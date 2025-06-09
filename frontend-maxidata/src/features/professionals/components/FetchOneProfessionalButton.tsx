import { useState } from "react";
import { useFetchOneProfessional } from "../../../hooks/Professionals/useFetchOneProfessionals";
import { ClipboardList } from "lucide-react";
interface Props {
        id: number
}

export function FetchOneProfessionalButton({ id }: Props) {
        const [visible, setVisible] = useState(false)
        const { data, isLoading, isError } = useFetchOneProfessional({ id })
        return (
                <div>
                        <button
                                onClick={() => setVisible(!visible)}
                                className="hover:dark:bg-zinc-600 hover:bg-whiteCard w-8 h-8 items-center justify-center flex rounded-lg transition-transform duration-200 hover:scale-105"
                        >
                                <ClipboardList />
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