import { useState } from "react"
import { DeleteProfessionalButton } from "./buttons/DeleteProfessionalButton"

export function DeleteSelectorComponent() {
        const [id, setId] = useState("")
        const [validId, setValidId] = useState<number | null>(null)

        const handleSubmit = () => {
                const numericId = Number(id.trim())
                if (!isNaN(numericId) && numericId > 0) {
                        setValidId(numericId)
                } else {
                        setValidId(null)
                        alert("Informe um ID numérico válido")
                }
        }

        return (
                <div className="flex items-center justify-center p-4">
                        <div className="bg-whiteCard dark:bg-zinc-800 p-6 rounded-xl shadow-md w-full max-w-md">
                                <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
                                        Deletar Profissional
                                </h1>

                                <label className="block text-zinc-700 dark:text-zinc-300 mb-2 font-medium">
                                        Informe o ID numérico do profissional:
                                </label>
                                <input
                                        type="text"
                                        placeholder="Ex: 123"
                                        value={id}
                                        onChange={(e) => {
                                                setId(e.target.value)
                                                setValidId(null)
                                        }}
                                        className="w-full px-4 py-2 border border-zinc-300 rounded-md dark:bg-zinc-700 dark:text-white dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <div className="flex">

                                        <button
                                                onClick={handleSubmit}
                                                className=" w-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors mt-4"
                                        >
                                                Deletar
                                        </button>

                                        {validId !== null && (
                                                <div className="mt-4">
                                                        <DeleteProfessionalButton id={validId} />
                                                </div>
                                        )}
                                </div>
                        </div>
                </div>
        )
}
