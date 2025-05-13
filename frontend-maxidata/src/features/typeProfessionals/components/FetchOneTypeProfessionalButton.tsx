import { useState } from "react";
import { useFetchOneTypeProfessional } from "../../../hooks/TypeProfessionalsHooks/useFetchOneTypeProfessionals";

interface Props {
        id: number
}

export function FetchOneTypeProfessionalButton({id} : Props){
        const [visible, setVisible] = useState(false)
        const {data, isLoading, isError} = useFetchOneTypeProfessional({id})

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
                          <li><strong>Descrição:</strong> {data.describe}</li>
                          <li><strong>Ativo:</strong> {data.situation ? "Sim" : "Não"}</li>
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )
}