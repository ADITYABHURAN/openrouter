import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useElysiaClient } from "@/providers/Eden";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Zap,
    Globe,
    Shield,
    BarChart3,
    Code2,
    Layers,
    Sparkles,
} from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "200+ Models",
        description: "Access GPT-4, Claude, Llama, Gemini, and hundreds more through a single endpoint.",
        color: "bg-[#FF3B30]",
    },
    {
        icon: Layers,
        title: "Unified API",
        description: "One integration, every model. Switch providers without changing your code.",
        color: "bg-[#007AFF]",
    },
    {
        icon: BarChart3,
        title: "Usage Analytics",
        description: "Track spending, monitor usage, and optimize costs across all your API keys.",
        color: "bg-[#34C759]",
    },
    {
        icon: Shield,
        title: "Enterprise Ready",
        description: "SOC 2 compliant infrastructure with 99.9% uptime and global edge routing.",
        color: "bg-[#AF52DE]",
    },
    {
        icon: Code2,
        title: "Developer First",
        description: "OpenAI-compatible API. Drop-in replacement — just change the base URL.",
        color: "bg-[#FF9500]",
    },
    {
        icon: Zap,
        title: "Instant Routing",
        description: "Automatic failover and smart routing finds the fastest, cheapest provider.",
        color: "bg-[#FF3B30]",
    },
];

export function Landing() {
    const elysiaClient = useElysiaClient();

    const modelsQuery = useQuery({
        queryKey: ["models"],
        queryFn: async () => {
            const response = await elysiaClient.models.get();
            if (response.error) return null;
            return response.data;
        },
    });

    const modelCount = modelsQuery.data?.models?.length ?? 200;

    return (
        <div className="dark min-h-screen bg-background text-foreground overflow-hidden">
            {/* Comic Halftone Background */}
            <div 
                className="fixed inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #FFE135 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Navigation */}
            <header className="fixed top-0 inset-x-0 z-50 border-b-4 border-[#1a1a1a] bg-[#FFE135]">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 bg-[#FF3B30] border-[3px] border-[#1a1a1a] rounded-lg" style={{ transform: 'rotate(-3deg)' }}>
                            <Zap className="size-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-wide text-[#1a1a1a]" style={{ fontFamily: "'Bangers', cursive" }}>
                            OneAPI
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" asChild className="text-[#1a1a1a] font-bold hover:bg-white/50">
                            <Link to="/signin">Sign in</Link>
                        </Button>
                        <Button size="sm" asChild className="comic-btn bg-[#FF3B30] text-white hover:bg-[#FF3B30]">
                            <Link to="/signup">
                                Get started
                                <ArrowRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative pt-32 pb-24">
                {/* Starburst Background */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <polygon 
                            points="100,0 115,70 185,50 130,100 185,150 115,130 100,200 85,130 15,150 70,100 15,50 85,70" 
                            fill="#FFE135"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                        />
                    </svg>
                </div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    {/* POW Badge */}
                    <div className="inline-block mb-6">
                        <div className="pow-badge text-lg" style={{ transform: 'rotate(-5deg)' }}>
                            <Sparkles className="inline size-5 mr-2" />
                            {modelCount}+ MODELS AVAILABLE!
                        </div>
                    </div>

                    <h1 
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide leading-tight max-w-5xl mx-auto"
                        style={{ fontFamily: "'Bangers', cursive" }}
                    >
                        <span className="text-foreground">ONE API FOR </span>
                        <br />
                        <span 
                            className="text-[#FF3B30] inline-block"
                            style={{ 
                                textShadow: '3px 3px 0px #1a1a1a',
                                transform: 'rotate(-2deg)',
                                display: 'inline-block'
                            }}
                        >
                            EVERY AI MODEL!
                        </span>
                    </h1>

                    <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold">
                        Route to the best models from OpenAI, Anthropic, Google, Meta, and more.
                        <span className="text-[#007AFF]"> One integration, infinite possibilities!</span>
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
                        <Button size="lg" asChild className="comic-btn bg-[#FF3B30] text-white h-14 px-10 text-lg hover:bg-[#FF3B30]">
                            <Link to="/signup">
                                START BUILDING!
                                <ArrowRight className="size-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="comic-btn bg-[#FFE135] text-[#1a1a1a] h-14 px-10 text-lg hover:bg-[#FFE135]">
                            <Link to="/dashboard">View Dashboard</Link>
                        </Button>
                    </div>

                    {/* Code snippet - Comic Style */}
                    <div className="mt-16 max-w-2xl mx-auto">
                        <div className="comic-card rounded-xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b-[3px] border-[#1a1a1a] bg-[#FFE135]">
                                <span className="size-4 rounded-full bg-[#FF3B30] border-2 border-[#1a1a1a]" />
                                <span className="size-4 rounded-full bg-[#FFE135] border-2 border-[#1a1a1a]" />
                                <span className="size-4 rounded-full bg-[#34C759] border-2 border-[#1a1a1a]" />
                                <span className="ml-2 text-sm text-[#1a1a1a] font-bold">request.ts</span>
                            </div>
                            <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto text-left bg-[#1a1a2e]">
                                <code>
                                    <span className="text-[#a0a0a0]">{"// Just change the base URL — that's it!\n"}</span>
                                    <span className="text-[#007AFF]">{"const "}</span>
                                    <span className="text-white">{"response "}</span>
                                    <span className="text-[#a0a0a0]">{"= "}</span>
                                    <span className="text-[#007AFF]">{"await "}</span>
                                    <span className="text-[#FFE135]">{"fetch"}</span>
                                    <span className="text-white">{"(\n"}</span>
                                    <span className="text-[#34C759]">{'  "https://oneapi.dev/api/v1/chat"'}</span>
                                    <span className="text-white">{",\n  { "}</span>
                                    <span className="text-white">{"method: "}</span>
                                    <span className="text-[#34C759]">{'"POST"'}</span>
                                    <span className="text-white">{",\n    body: JSON."}</span>
                                    <span className="text-[#FFE135]">{"stringify"}</span>
                                    <span className="text-white">{"({\n"}</span>
                                    <span className="text-white">{"      model: "}</span>
                                    <span className="text-[#34C759]">{'"anthropic/claude-sonnet-4-5"'}</span>
                                    <span className="text-white">{",\n      messages: [{ role: "}</span>
                                    <span className="text-[#34C759]">{'"user"'}</span>
                                    <span className="text-white">{", content: "}</span>
                                    <span className="text-[#34C759]">{'"Hello!"'}</span>
                                    <span className="text-white">{" }]\n    })\n  }\n)"}</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features - Comic Panels */}
            <section className="py-24 border-t-4 border-[#1a1a1a]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="pow-badge text-xl inline-block mb-4">
                            SUPER POWERS!
                        </div>
                        <h2 
                            className="text-4xl sm:text-5xl font-bold tracking-wide"
                            style={{ fontFamily: "'Bangers', cursive" }}
                        >
                            Everything You Need to Ship AI
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto font-bold">
                            Built for developers who want to move fast without being locked into a single provider.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="comic-card rounded-xl p-6 hover:scale-105 transition-transform duration-200"
                                style={{ transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)` }}
                            >
                                <div className={`flex items-center justify-center size-14 rounded-lg ${feature.color} border-[3px] border-[#1a1a1a] mb-4`}>
                                    <feature.icon className="size-7 text-white" />
                                </div>
                                <h3 
                                    className="text-xl font-bold mb-2"
                                    style={{ fontFamily: "'Bangers', cursive" }}
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Models preview */}
            {modelsQuery.data?.models && modelsQuery.data.models.length > 0 && (
                <section className="py-24 border-t-4 border-[#1a1a1a]" style={{ background: 'rgba(255, 225, 53, 0.1)' }}>
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <div className="pow-badge text-xl inline-block mb-4 bg-[#007AFF] text-white">
                                ZAP!
                            </div>
                            <h2 
                                className="text-4xl sm:text-5xl font-bold tracking-wide"
                                style={{ fontFamily: "'Bangers', cursive" }}
                            >
                                Popular Models
                            </h2>
                            <p className="mt-4 text-muted-foreground text-lg font-bold">
                                Access the latest and greatest from every major provider.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {modelsQuery.data.models.slice(0, 9).map((model, index) => (
                                <div
                                    key={model.id}
                                    className="flex items-center gap-3 comic-card rounded-lg px-4 py-3 hover:scale-102 transition-transform"
                                    style={{ transform: `rotate(${index % 3 === 0 ? '-0.5' : index % 3 === 1 ? '0' : '0.5'}deg)` }}
                                >
                                    <div className="size-10 rounded-lg bg-[#FF3B30] border-2 border-[#1a1a1a] flex items-center justify-center text-sm font-bold text-white">
                                        {model.company.name.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold truncate">{model.name}</p>
                                        <p className="text-sm text-muted-foreground">{model.company.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-24 border-t-4 border-[#1a1a1a]">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="pow-badge text-2xl inline-block mb-6 bg-[#FF3B30] text-white" style={{ transform: 'rotate(-3deg)' }}>
                        BOOM!
                    </div>
                    <h2 
                        className="text-4xl sm:text-5xl font-bold tracking-wide"
                        style={{ fontFamily: "'Bangers', cursive" }}
                    >
                        Ready to Start Building?
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto font-bold">
                        Create a free account and start making API calls in minutes.
                    </p>
                    <Button size="lg" asChild className="comic-btn bg-[#FF3B30] text-white mt-8 h-14 px-10 text-lg hover:bg-[#FF3B30]">
                        <Link to="/signup">
                            CREATE FREE ACCOUNT!
                            <ArrowRight className="size-5" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4 border-[#1a1a1a] py-8 bg-[#FFE135]">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <Zap className="size-5 text-[#1a1a1a]" />
                        <span className="text-lg font-bold text-[#1a1a1a]" style={{ fontFamily: "'Bangers', cursive" }}>OneAPI</span>
                    </div>
                    <p className="text-sm font-bold text-[#1a1a1a]">
                        &copy; 2026 OneAPI. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
