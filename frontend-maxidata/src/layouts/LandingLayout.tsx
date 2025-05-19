import { ReactNode } from "react";

export function LandingLayout({ children }: {children: ReactNode}){
        return (
                <div className="min-h-screen text-neutral-300 flex-col flex items-center justify-center px-4">
                        <header className="text-3x1">Professional Manager</header>
                        <main className="w-full max-w-3x1">{children}</main>
                </div>
        )
}