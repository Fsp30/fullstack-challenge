import { ReactNode, useState } from "react"
import { ThemeToggle } from "../components/shared/ThemeToggle"
import PrincipalMenu from "../components/ui/PrincipalMenu"
import { Menu } from "lucide-react"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="h-screen bg-background text-primary dark:bg-bgdark dark:text-textdark flex flex-col transition-colors duration-800">
      
      <header className="p-6 flex justify-between items-center bg-white dark:bg-bgdark shadow z-10 relative">
        <h1 className="text-xl font-bold">Professional Manager</h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="lg:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <aside className="hidden lg:block w-52 p-6 bg-zinc-100 dark:bg-bgdark shrink-0 overflow-y-auto border-r border-zinc-200 dark:border-zinc-800">
          <PrincipalMenu />
        </aside>

        {isSidebarOpen && (
          <aside className="lg:hidden fixed inset-y-0 left-0 w-64 p-6 bg-zinc-100 dark:bg-bgdark z-20 overflow-y-auto border-r border-zinc-200 dark:border-zinc-800 shadow-lg transition-transform">
            <PrincipalMenu />
          </aside>
        )}

        <main className="flex-1 overflow-y-auto p-6 bg-white dark:bg-bgdark shadow-inner">
          {children}
        </main>
      </div>
    </div>
  )
}
