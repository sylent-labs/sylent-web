"use client";

import Scene from "@/components/scene/Scene";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* ✅ 3D BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Scene />
            </div>

            {/* ✅ TRANSPARENT overlay (keeps 3D visible) */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/60 to-black/85" />

            {/* ✅ UI */}
            <div className="relative z-20 px-6 py-10">
                {/* header */}
                <div className="mx-auto max-w-6xl">
                    <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-sm bg-red-500 shadow-[0_0_18px_rgba(255,27,45,0.8)]" />
                            <span className="font-semibold tracking-[0.22em]">SYLENT</span>
                        </div>

                        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
                            <a className="hover:text-white" href="">
                                Services
                            </a>
                            <a className="hover:text-white" href="">
                                Projects
                            </a>
                            <a className="hover:text-white" href="">
                                About
                            </a>
                            <a className="hover:text-white" href="">
                                Contact
                            </a>
                        </nav>

                        <button
                            data-cursor="magnet"
                            className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm hover:bg-red-500/20"
                        >
                            Get Started
                        </button>
                    </header>

                    {/* content */}
                    <div className="mt-16 max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                            Crafting custom digital solutions
                        </div>

                        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
                            Powering the Future in <span className="text-red-500">Silence</span>
                        </h1>

                        <p className="mt-4 text-white/70">
                            Mobile apps, web apps, AI solutions, and integrations—built to fit your
                            needs. We don’t talk loudly. We ship.
                        </p>

                        <div className="mt-8 flex gap-3">
                            <button
                                data-cursor="magnet"
                                className="rounded-xl bg-red-500 px-5 py-3 font-medium shadow-[0_0_24px_rgba(255,27,45,0.35)] hover:brightness-110"
                            >
                                Book a Free Call
                            </button>

                            <button
                                data-cursor="magnet"
                                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10"
                            >
                                See Projects
                            </button>
                        </div>

                        <div className="mt-10 text-xs text-white/50">Scroll down ↓</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
