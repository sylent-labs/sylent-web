"use client";

import { useEffect, useRef } from "react";

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

export default function Vision() {
    const wrapRef = useRevealOnScroll();

    return (
        <section className="relative min-h-svh overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <div ref={wrapRef} className="mx-auto max-w-4xl">
                {/* badge */}
                <div
                    data-reveal
                    data-from="left"
                    style={{ "--d": "0ms", "--dur": "1000ms" } as React.CSSProperties}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Our Vision
                </div>

                {/* heading */}
                <h2
                    data-reveal
                    data-from="left"
                    style={{ "--d": "100ms", "--dur": "1200ms" } as React.CSSProperties}
                    className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl"
                >
                    To become the trusted technology partner for growing businesses that
                    value execution over noise.
                </h2>

                {/* content blocks */}
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
        </section>
    );
}
