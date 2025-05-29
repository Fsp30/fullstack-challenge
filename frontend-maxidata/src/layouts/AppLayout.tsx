import { ReactNode } from "react"
import { ThemeToggle } from "../components/shared/ThemeToggle"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen bg-background text-primary dark:bg-bgdark dark:text-textdark flex flex-col transition-colors duration-800">
      
      <header className="p-6 flex justify-between items-center bg-white dark:bg-bgdark shadow z-10">
        <h1 className="text-xl font-bold">Professional Manager</h1>
        <ThemeToggle />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-52 p-6 bg-zinc-100 dark:bg-bgdark shrink-0 overflow-y-auto border-r border-zinc-200 dark:border-zinc-800">
          <div>
                <p>menu dropdown</p>
          </div>
          <div>
                <p>menu dropdown</p>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-6 bg-white dark:bg-bgdark shadow-inner">
          {children}
        </main>
      </div>
    </div>
  )
}
