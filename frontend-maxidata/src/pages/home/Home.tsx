import { Link } from "react-router-dom"
import { User, Users } from "lucide-react"
import { AppLayout } from "../../layouts/AppLayout"

export function Home() {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 group dark:text-primary h-full">
        {/* Card 1 */}
        <Link
          to="/Professional"
          className="bg-whiteCard dark:bg-zinc-800 p-6 rounded-xl shadow-md transition-all duration-300
            group-hover:blur-sm group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <User className="w-10 h-10 text-amber-700 dark:text-amber-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Profissionais</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Acesse e gerencie seus profissionais de forma prática e organizada.
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          to="/TypeProfessional"
          className="bg-whiteCard dark:bg-zinc-800 p-6 rounded-xl shadow-md transition-all duration-300
            group-hover:blur-sm group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <Users className="w-10 h-10 text-amber-700 dark:text-amber-400" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Tipos de Profissionais</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Defina e mantenha os tipos de profissionais disponíveis em seu sistema.
            </p>
          </div>
        </Link>
      </div>
    </AppLayout>
  )
}
