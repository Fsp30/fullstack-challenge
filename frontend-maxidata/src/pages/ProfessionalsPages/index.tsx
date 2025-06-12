import { AppLayout } from "../../layouts/AppLayout";
import { Link } from "react-router-dom";
import {
        ClipboardList,
        UserRoundPlus,
        UserSearch,
        UserCog,
        UserPen,
        UserRoundMinus,
} from "lucide-react";

const professionalLinks = [
        {
                to: "/professionals/findAll",
                label: "Ver todos",
                description: "Visualize todos os profissionais cadastrados.",
                icon: ClipboardList,
        },
        {
                to: "/professionals/create",
                label: "Criar novo",
                description: "Adicione um novo profissional à base de dados.",
                icon: UserRoundPlus,
        },
        {
                to: "/professionals/fetchBytype",
                label: "Analisar por tipo",
                description: "Filtre os profissionais por seu tipo específico.",
                icon: UserCog,
        },
        {
                to: "/professionals/fetchOne",
                label: "Analisar um",
                description: "Encontre e analise um profissional específico.",
                icon: UserSearch,
        },
        {
                to: "/professionals/update",
                label: "Atualizar",
                description: "Atualize os dados de um profissional existente.",
                icon: UserPen,
        },
        {
                to: "/professionals/delete",
                label: "Deletar",
                description: "Remova um profissional do sistema.",
                icon: UserRoundMinus,
        },
]

export function ProfessionalsPage() {
        return (
                <AppLayout>
                        <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Serviços para Profissionais
                        </h2>
                        <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group">
                                        {professionalLinks.map(({ to, label, description, icon: Icon }) => (
                                                <Link
                                                        to={to}
                                                        key={to}
                                                        className="bg-whiteCard dark:bg-zinc-800 p-6 rounded-xl shadow-md transition-all duration-300
              group-hover:blur-sm group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105"
                                                >
                                                        <div className="flex flex-col items-center text-center gap-4">
                                                                <Icon className="w-8 h-8 text-amber-700 dark:text-amber-400" />
                                                                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                                                        {label}
                                                                </h2>
                                                                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                                                        {description}
                                                                </p>
                                                        </div>
                                                </Link>
                                        ))}
                                </div>
                        </div>
                </AppLayout>
        )
}
