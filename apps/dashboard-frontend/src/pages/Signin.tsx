import { useElysiaClient } from "@/providers/Eden";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { ArrowRight, Mail, Lock, Loader2, AlertCircle, CheckCircle2, Zap } from "lucide-react";

export function Signin() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const elysiaClient = useElysiaClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async ({
            email,
            password,
        }: {
            email: string;
            password: string;
        }) => {
            const response = await elysiaClient.auth["sign-in"].post({
                email,
                password,
            });
            if (response.error) {
                const errValue = response.error.value as { message?: string } | undefined;
                throw new Error(errValue?.message || "Invalid credentials");
            }
            return response.data;
        },
        onSuccess: () => {
            setTimeout(() => navigate("/dashboard"), 1000);
        },
    });

    return (
        <div className="dark min-h-screen relative flex items-center justify-center bg-background overflow-hidden">
            {/* Comic Halftone Background */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #FFE135 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Starburst */}
            <div className="absolute top-10 right-10 w-[200px] h-[200px] opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <polygon 
                        points="100,0 115,70 185,50 130,100 185,150 115,130 100,200 85,130 15,150 70,100 15,50 85,70" 
                        fill="#FF3B30"
                        stroke="#1a1a1a"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[420px] px-6">
                {/* Brand */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <div className="flex items-center justify-center size-11 rounded-lg bg-[#FF3B30] border-[3px] border-[#1a1a1a]" style={{ transform: 'rotate(-3deg)' }}>
                        <Zap className="size-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold tracking-wide text-foreground" style={{ fontFamily: "'Bangers', cursive" }}>
                        OneAPI
                    </span>
                </div>

                <Card className="comic-card">
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-2xl tracking-wide" style={{ fontFamily: "'Bangers', cursive" }}>
                            Welcome Back!
                        </CardTitle>
                        <CardDescription className="text-muted-foreground font-bold">
                            Sign in to your OneAPI account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                mutation.mutate({
                                    email: emailRef.current!.value,
                                    password: passwordRef.current!.value,
                                });
                            }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/60" />
                                    <Input
                                        id="email"
                                        ref={emailRef}
                                        type="email"
                                        placeholder="you@example.com"
                                        className="pl-10 h-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/60" />
                                    <Input
                                        id="password"
                                        ref={passwordRef}
                                        type="password"
                                        placeholder="Enter your password"
                                        className="pl-10 h-10"
                                        required
                                    />
                                </div>
                            </div>

                            {mutation.isError && (
                                <div className="flex items-start gap-2.5 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3.5 py-3">
                                    <AlertCircle className="size-4 shrink-0 mt-0.5" />
                                    <span>
                                        {mutation.error?.message ||
                                            "Something went wrong. Please try again."}
                                    </span>
                                </div>
                            )}

                            {mutation.isSuccess && (
                                <div className="flex items-start gap-2.5 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3.5 py-3">
                                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
                                    <span>Signed in! Redirecting to dashboard...</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full h-11 mt-2 comic-btn bg-[#FF3B30] text-white hover:bg-[#FF3B30]"
                                disabled={mutation.isPending || mutation.isSuccess}
                            >
                                {mutation.isPending ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign in
                                        <ArrowRight className="size-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>

                    <CardFooter className="justify-center">
                        <p className="text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-foreground hover:underline underline-offset-4 font-medium transition-colors"
                            >
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
