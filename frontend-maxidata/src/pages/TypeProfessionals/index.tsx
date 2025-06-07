import { AppLayout } from "../../layouts/AppLayout";
import { Link } from "react-router-dom";
import {
        ClipboardList,
        UserSearch,
        UserPen,
        UserRoundPlus,
        UserRoundMinus
} from "lucide-react";

const TypeProfessionallinks = [
        {
                to: '/type-professionals/findAll',
                label: "Ver todos",
                description: 'Visualize todos os tipos de profissionais cadastrados.',
                icon: ClipboardList
        },
        {
                to: '/type-professionals/create',
                label: 'Criar novo',
                decription: 'Adicione um novo tipo de profissional à base de dados.',
                icon: UserRoundPlus
        },
        {
                to: '/type-professionals/fetchOne',
                label: 'Analisar um',
                decription: 'Encontre e analise um tipo de profissional específico.',
                icon: UserSearch
        },
        {
                to: "/type-professionals/update",
                label: "Atualizar",
                description: "Atualize os dados de um tipo de profissional existente.",
                icon: UserPen,
        },
        {
                to: "/type-professionals/delete",
                label: "Deletar",
                description: "Remova um tipo de profissional do sistema.",
                icon: UserRoundMinus,
        }
]

export function TypeProfessionalsPage() {
        return (
                <AppLayout>
                        <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Serviços para Tipos de Profissionais
                        </h2>
                        <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group">
                                        {TypeProfessionallinks.map(({ to, label, description, icon: Icon }) => (
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
