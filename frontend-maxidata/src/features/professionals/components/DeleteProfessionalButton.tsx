import { useDeleteProfessionals } from "../../../hooks/Professionals/useDeleteProfessionals";

interface Props {
        id: number
        onDeleted?: () => void
}

export function DeleteProfessionalButton({ id, onDeleted }: Props) {
        const { mutate, isPending, isSuccess, isError } = useDeleteProfessionals()

        const handleDelete = () => {
                if (confirm("Tem certeza que deseja excluir este tipo de profissional")) {
                        mutate({ id }, {
                                onSuccess: () => {
                                        onDeleted?.()
                                }
                        })
                }
        }

        return (
                <div>
                        <button onClick={handleDelete} disabled={isPending} className="text-red-600 underline">
                                {isPending ? "Excluindo..." : "Excluir"}
                        </button>

                        {isSuccess && <p className="text-green-600 text-sm">Excluído com sucesso!</p>}
                        {isError && <p className="text-red-600 text-sm">Erro ao excluir.</p>}
                </div>
        )
}
