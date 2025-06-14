import { useState } from "react";
import { useFetchOneProfessional } from "../../../../hooks/Professionals/useFetchOneProfessionals";
import { ClipboardList, X } from "lucide-react";
import { DeleteProfessionalButton } from "./DeleteProfessionalButton";
import { ProfessionalResponse } from "../../types";

interface Props {
  id: number;
  onSuccess?: (data:ProfessionalResponse) => void;
}

export function FetchOneProfessionalButton({ id, onSuccess }: Props) {
  const [visible, setVisible] = useState(false)
  const { data, isLoading, isError } = useFetchOneProfessional({ id })

  const handleClick = () => {
    setVisible(true)
    if (data && onSuccess) {
      onSuccess(data)
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="hover:dark:bg-zinc-600 hover:bg-whiteCard w-8 h-8 items-center justify-center flex rounded-lg transition-transform duration-200 hover:scale-105"
      >
        <ClipboardList />
      </button>

      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-2 right-2 text-red-700"
            >
              <X />
            </button>

            <h2 className="text-lg font-semibold mb-4">Detalhes do Profissional</h2>

            {isLoading && <p>Carregando...</p>}
            {isError && <p className="text-red-600">Erro ao buscar dados</p>}
            {data && (
              <>
                <ul className="text-sm space-y-1 mb-4">
                  <li><strong>ID:</strong> {data.id}</li>
                  <li><strong>Nome:</strong> {data.name}</li>
                  <li><strong>Email:</strong> {data.email}</li>
                  <li><strong>Telefone:</strong> {data.telephone}</li>
                  <li><strong>Criado em:</strong> {new Date(data.createdAt).toLocaleString()}</li>
                  <li><strong>Tipo Profissional:</strong> {data.typeOfProfessionalId}</li>
                  <li><strong>Ativo:</strong> {data.situation ? "Sim" : "Não"}</li>
                </ul>
              </>
            )}
            {data && (
              <div className="absolute bottom-4 right-4">
                <DeleteProfessionalButton 
                  id={data.id} 
                  onDeleted={() => setVisible(false)} 
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

