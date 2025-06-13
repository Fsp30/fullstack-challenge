import { useState } from "react"
import { Link } from "react-router-dom"
import { User, Users, ArrowDownWideNarrow } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const professionalLinks = [
  { to: "/professionals/findAll", label: "Ver todos" },
  { to: "/professionals/create", label: "Criar novo" },
  { to: "/professionals/fetchBytype", label: "Analisar por tipo" },
  { to: "/professionals/fetchOne", label: "Analisar um" },
  { to: "/professionals/update", label: "Atualizar" },
  { to: "/professionals/delete", label: "Deletar" },
]

const typeLinks = [
  { to: "/Type-professionals/findAll", label: "Ver todos" },
  { to: "/Type-professionals/create", label: "Criar novo" },
  { to: "/Type-professionals/fetchOne", label: "Analisar um" },
  { to: "/Type-professionals/update", label: "Atualizar" },
  { to: "/Type-professionals/delete", label: "Deletar" },
]

export default function PrincipalMenu() {
  const [isOpenProfessionals, setIsOpenProfessionals] = useState(true)
  const [isOpenTypeProfessionals, setIsOpenTypeProfessionals] = useState(true)

  const toggleMenuProfessionals = () => setIsOpenProfessionals(prev => !prev)
  const toggleMenuTypeProfessionals = () => setIsOpenTypeProfessionals(prev => !prev)

  const renderLinks = (links: { to: string; label: string }[]) => (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
      }}
      className="pl-6 flex flex-col gap-1 text-primary dark:text-textdark text-xs border-l border-amber-500"
    >
      {links.map(link => (
        <motion.div
          key={link.to}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <Link to={link.to} className="hover:underline hover:text-sm">
            {link.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )

  const renderHeader = (
    label: string,
    icon: JSX.Element,
    isOpen: boolean,
    toggleFn: () => void
  ) => (
    <button
      className="flex items-center justify-between cursor-pointer w-full"
      onClick={toggleFn}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center w-6 h-6 rounded-sm hover:bg-zinc-300 dark:hover:bg-zinc-800"
      >
        <ArrowDownWideNarrow size={16} />
      </motion.div>
    </button>
  )

  return (
    <div className="flex flex-col gap-2">
      {renderHeader("Profissionais", <User size={18} />, isOpenProfessionals, toggleMenuProfessionals)}
      <AnimatePresence>
        {isOpenProfessionals && renderLinks(professionalLinks)}
      </AnimatePresence>

      {renderHeader("Tipos de Profissionais", <Users size={18} />, isOpenTypeProfessionals, toggleMenuTypeProfessionals)}
      <AnimatePresence>
        {isOpenTypeProfessionals && renderLinks(typeLinks)}
      </AnimatePresence>
    </div>
  )
}
