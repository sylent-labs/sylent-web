"use client";

import Scene from "@/components/scene/Scene";
import Header from "@/components/Header";

export default function Hero() {
    return (
        <section className="relative min-h-svh overflow-hidden">
            {/* 3D background */}
            <div className="absolute inset-0 z-0">
                <Scene />
            </div>

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/60 to-black/85" />

            {/* UI */}
            <div className="relative z-20 px-4 py-6 sm:px-6 sm:py-10">
                <div className="mx-auto max-w-6xl">
                    <Header />

                    {/* Hero content */}
                    <div className="mt-12 max-w-2xl sm:mt-16">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                            Crafting custom digital solutions
                        </div>

                        <h1 className="mt-5 text-3xl font-semibold leading-tight sm:mt-6 sm:text-4xl md:text-6xl">
                            Powering the Future in{" "}
                            <span className="text-red-500">Silence</span>
                        </h1>

                        <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base">
                            Mobile apps, web apps, AI solutions, and integrations—built
                            to fit your needs. We don’t talk loudly. We ship.
                        </p>

                        <div className="mt-6 flex gap-3 sm:mt-8">
                            <button className="rounded-xl bg-red-500 px-4 py-3 text-sm font-medium shadow-[0_0_24px_rgba(255,27,45,0.35)] transition-all hover:brightness-110 sm:px-5 sm:text-base">
                                Book a Free Call
                            </button>

                            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 transition-colors hover:bg-white/10 sm:px-5 sm:text-base">
                                See Projects
                            </button>
                        </div>

                        <div className="mt-8 text-xs text-white/50 sm:mt-10">
                            Scroll down ↓
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
