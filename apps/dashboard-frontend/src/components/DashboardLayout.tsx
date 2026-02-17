import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Key,
    Coins,
    Zap,
    LogOut,
} from "lucide-react";

const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "API Keys", href: "/api-keys", icon: Key },
    { label: "Credits", href: "/credits", icon: Coins },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    return (
        <div className="dark min-h-screen bg-background flex">
            {/* Comic Halftone Background */}
            <div 
                className="fixed inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #FFE135 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            />
            {/* Sidebar */}
            <aside className="w-64 border-r-4 border-[#1a1a1a] flex flex-col bg-[#FFE135] relative z-10">
                {/* Brand */}
                <div className="px-5 h-16 flex items-center gap-2.5 border-b-4 border-[#1a1a1a]">
                    <div className="flex items-center justify-center size-9 rounded-lg bg-[#FF3B30] border-[3px] border-[#1a1a1a]" style={{ transform: 'rotate(-3deg)' }}>
                        <Zap className="size-4 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-wide text-[#1a1a1a]" style={{ fontFamily: "'Bangers', cursive" }}>
                        OneAPI
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all border-[3px]",
                                    isActive
                                        ? "bg-[#FF3B30] text-white border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
                                        : "text-[#1a1a1a] border-transparent hover:bg-white/50 hover:border-[#1a1a1a]"
                                )}
                            >
                                <item.icon className="size-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="px-3 py-4 border-t-4 border-[#1a1a1a]">
                    <Link
                        to="/signin"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold text-[#1a1a1a] hover:bg-white/50 transition-colors border-[3px] border-transparent hover:border-[#1a1a1a]"
                    >
                        <LogOut className="size-4" />
                        Sign out
                    </Link>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto relative z-10">
                <div className="max-w-5xl mx-auto px-8 py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
