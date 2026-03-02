"use client";

import { useEffect, useRef } from "react";

const CAPABILITIES = [
    "Mobile Apps",
    "Web Platforms",
    "Backend Systems",
    "Integrations",
    "AI Tools",
    "Enterprise Solutions",
];

function useRevealOnScroll() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const items = Array.from(
            ref.current.querySelectorAll<HTMLElement>("[data-reveal]")
        );

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    e.target.classList.toggle("is-in", e.isIntersecting);
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return ref;
}

export default function About() {
    const wrapRef = useRevealOnScroll();

    return (
        <section id="about" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            {/* soft transition from hero */}
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-linear-to-b from-black to-transparent -z-10" />

            <div ref={wrapRef} className="mx-auto max-w-4xl space-y-24 sm:space-y-32 md:space-y-40">
                {/* ── Mission subsection ── */}
                <div id="mission">
                    <div
                        data-reveal
                        data-from="left"
                        style={{ "--d": "0ms", "--dur": "1000ms" } as React.CSSProperties}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Our Mission
                    </div>

                    <h2
                        data-reveal
                        data-from="left"
                        style={{ "--d": "100ms", "--dur": "1200ms" } as React.CSSProperties}
                        className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl"
                    >
                        To help businesses build and scale reliable digital systems through
                        focused engineering, thoughtful design and practical execution.
                    </h2>

                    <div className="mt-10 space-y-8 sm:mt-14 md:mt-16">
                        <p
                            data-reveal
                            data-from="left"
                            style={{ "--d": "200ms", "--dur": "1200ms" } as React.CSSProperties}
                            className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
                        >
                            We exist to deliver real solutions, not presentations and not
                            promises. We work on systems that solve real problems.
                        </p>

                        <p
                            data-reveal
                            data-from="right"
                            style={{ "--d": "300ms", "--dur": "1200ms" } as React.CSSProperties}
                            className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
                        >
                            As a California based company powered by global engineering talent,
                            we combine startup agility with the resources of a large enterprise.
                            Offering the technical depth of a large firm while maintaining the
                            direct access and accountability of a small team.
                        </p>

                        <p
                            data-reveal
                            data-from="left"
                            style={{ "--d": "400ms", "--dur": "1200ms" } as React.CSSProperties}
                            className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
                        >
                            We build mobile apps, web platforms, backend systems, integrations,
                            AI tools and enterprise grade solutions with one goal: to simplify
                            operations, reduce friction, and turn complex processes into reliable
                            systems.
                        </p>
                    </div>

                    <div
                        data-reveal
                        style={{ "--d": "500ms", "--dur": "1200ms" } as React.CSSProperties}
                        className="mt-10 flex flex-wrap gap-2 sm:mt-14 sm:gap-3"
                    >
                        {CAPABILITIES.map((cap) => (
                            <span
                                key={cap}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 sm:px-4 sm:py-2 sm:text-sm"
                            >
                                {cap}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── Vision subsection ── */}
                <div id="vision">
                    <div
                        data-reveal
                        data-from="left"
                        style={{ "--d": "0ms", "--dur": "1000ms" } as React.CSSProperties}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Our Vision
                    </div>

                    <h2
                        data-reveal
                        data-from="left"
                        style={{ "--d": "100ms", "--dur": "1200ms" } as React.CSSProperties}
                        className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl"
                    >
                        To become the trusted technology partner for growing businesses that
                        value execution over noise.
                    </h2>

                    <div className="mt-10 space-y-8 sm:mt-14 md:mt-16">
                        <p
                            data-reveal
                            data-from="right"
                            style={{ "--d": "200ms", "--dur": "1200ms" } as React.CSSProperties}
                            className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
                        >
                            We envision a future where companies choose partners not by size or
                            hype, but by reliability, clarity and consistent delivery.
                        </p>

                        <p
                            data-reveal
                            data-from="left"
                            style={{ "--d": "300ms", "--dur": "1200ms" } as React.CSSProperties}
                            className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
                        >
                            Sylent aims to prove that a focused team with strong engineering
                            discipline and clear communication can deliver better results than
                            larger firms burdened by complexity and unnecessary overhead.
                        </p>

                        <p
                            data-reveal
                            data-from="right"
                            style={{ "--d": "400ms", "--dur": "1200ms" } as React.CSSProperties}
                            className="text-sm leading-relaxed text-white/65 sm:text-base md:text-lg"
                        >
                            We strive to offer the capabilities of a large technology company
                            while preserving the responsiveness, transparency and personal
                            accountability of a startup.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
