import { Link } from "react-router-dom"
import { LandingLayout } from "../layouts/LandingLayout"
import { motion } from "framer-motion"
import { House, UserCheck } from 'lucide-react'

const solutions = [
    { name: 'Home', description: 'Analise seus profissionais', href: '/Home', icon: House },
    { name: 'Login', description: 'Sign-up ou Sign-in', href: '/Login', icon: UserCheck }
]

export function Home() {
    return (
        <LandingLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full px-8 py-6 gap-8">
               
                <div className="flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-lg text-left"
                    >
                        <h1 className="text-4xl font-bold mb-4">
                            Bem-vindo à nossa plataforma
                        </h1>
                        <h2 className="text-xl text-muted-foreground">
                            Aqui temos ferramentas perfeitas para otimizar o seu desempenho
                        </h2>
                    </motion.div>
                </div>

                <div className="flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="w-full max-w-sm border-2 border-dotted border-gray-300 dark:border-gray-600 rounded-xl p-6 shadow-sm  bg-zinc-900" 
                    >
                        <div className="space-y-4">
                            {solutions.map((item) => (
                                <Link
                                    to={item.href}
                                    key={item.name}
                                    className="group flex gap-4 items-start rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                >
                                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                                        <item.icon className="size-5 text-gray-700 dark:text-gray-300" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900 dark:text-white block">
                                            {item.name}
                                        </span>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </LandingLayout>
    )
}
