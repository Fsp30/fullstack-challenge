import { ReactNode } from "react";
import { MenuPopover } from "../components/ui/MenuPopoverIndex";

interface LandingLayoutProps {
    children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="h-screen overflow-hidden bg-background text-primary flex flex-col">
            <header className="p-6 flex justify-between items-center shrink-0">
                <h1 className="text-xl font-bold">Professional Manager</h1>
                <div>  
                    <MenuPopover />
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center overflow-hidden">
                {children}
            </main>
        </div>
    )
}
