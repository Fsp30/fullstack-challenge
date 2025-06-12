import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function UpdateSelectorComponent() {
  const navigate = useNavigate()
  const [id, setId] = useState("")

  const handleSubmit = () => {
    if (id.trim()) {
      navigate(`/professionals/update/${id.trim()}`)
    }
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-whiteCard dark:bg-zinc-800 p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
          Atualizar Profissional
        </h1>

        <label className="block text-zinc-700 dark:text-zinc-300 mb-2 font-medium">
          Informe o ID do profissional:
        </label>
        <input
          type="text"
          placeholder="Ex: 123"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-4 py-2 border border-zinc-300 rounded-md dark:bg-zinc-700 dark:text-white dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Editar
        </button>
      </div>
    </div>
  )
}
