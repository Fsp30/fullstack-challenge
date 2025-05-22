import { ReactNode } from "react";
import { MenuPopover } from "../components/ui/MenuPopoverIndex";

interface LandingLayoutProps {
    children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-primary">
            <header className="p-6 flex justify-between items-center border-b">
                <h1 className="text-xl font-bold">Professional Manager</h1>
                <div>  
                    <MenuPopover/>
                </div>
            </header>
            <main className="p-6">{children}</main>
        </div>
    )
}