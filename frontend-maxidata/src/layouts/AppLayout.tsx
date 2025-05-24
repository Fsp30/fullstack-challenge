import { ReactNode } from "react";

interface AppLayoutProps {
        children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
        return (
                <div className="h-screen overflow-hidden bg-background text-primary dark:bg-bgdark dark:text-textdark flex flex-col transition-colors duration-500">
                        <header className="p-6 flex justify-between items-center shrink-0">
                                <h1 className="text-xl font-bold">Professional Manager</h1>
                                
                        </header>
                        <aside className="w-8 gap-2 ml-4 p-6">
                                <p>menu dropdown</p>
                        </aside>
                        <main className="flex-1 flex items-center justify-center overflow-hidden">
                                {children}
                        </main>
                </div>
        )
}