"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type Project = {
    title: string;
    desc: string;
    tag: string;
    href?: string;
    image: string;
};

const PROJECTS: Project[] = [
    {
        title: "Shopify Growth Store",
        desc: "Conversion-focused product page + upsells",
        tag: "eCommerce",
        image: "https://picsum.photos/seed/1/1200/800",
    },
    {
        title: "Product Landing Page",
        desc: "High-end hero + animated sections",
        tag: "Web",
        image: "https://picsum.photos/seed/2/1200/800",
    },
    {
        title: "Web App Dashboard",
        desc: "Fast UI, clean data views, modern UX",
        tag: "SaaS",
        image: "https://picsum.photos/seed/3/1200/800",
    },
    {
        title: "Brand Website",
        desc: "Minimal, premium, Apple-style layout",
        tag: "Branding",
        image: "https://picsum.photos/seed/4/1200/800",
    },
    {
        title: "Lead Gen Funnel",
        desc: "Speed + clear CTA + split-test ready",
        tag: "Marketing",
        image: "https://picsum.photos/seed/5/1200/800",
    },
    {
        title: "Custom CMS Site",
        desc: "Flexible content, clean components",
        tag: "CMS",
        image: "https://picsum.photos/seed/6/1200/800",
    },
];

export default function Projects() {
    const wrapRef = useRevealOnScroll(); // used for reveal observer (inner container)
    const sectionRef = useRef<HTMLElement | null>(null); // for shine cursor bounds
    const cursorRef = useRef<HTMLDivElement | null>(null);

    const bgRef = useRef<HTMLDivElement | null>(null);

    // 🔧 SPEED CONTROLS (slower & premium)
    const STAGGER_MS = 120;
    const REVEAL_MS = 1200;

    // mouse parallax for background layers
    useEffect(() => {
        const el = bgRef.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty("--px", `${(e.clientX - r.left) / r.width - 0.5}`);
            el.style.setProperty("--py", `${(e.clientY - r.top) / r.height - 0.5}`);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    // ✨ Shine cursor only inside this section
    useEffect(() => {
        const section = sectionRef.current;
        const cursor = cursorRef.current;
        if (!section || !cursor) return;

        const move = (e: MouseEvent) => {
            const r = section.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;

            cursor.style.setProperty("--x", `${x}px`);
            cursor.style.setProperty("--y", `${y}px`);
            cursor.style.opacity = "1";
        };

        const leave = () => {
            cursor.style.opacity = "0";
        };

        section.addEventListener("mousemove", move);
        section.addEventListener("mouseleave", leave);

        return () => {
            section.removeEventListener("mousemove", move);
            section.removeEventListener("mouseleave", leave);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative min-h-screen overflow-hidden px-6 py-24"
        >
            {/* ✨ shine cursor overlay */}
            <div
                ref={cursorRef}
                className="bf-shine-cursor pointer-events-none absolute inset-0 z-20"
            />

            {/* soft transition from hero */}
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-linear-to-b from-black to-transparent -z-10" />

            {/* background */}
            <div
                ref={bgRef}
                className="bf-projects-bg pointer-events-none absolute inset-0 -z-20"
            >
                <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-black" />
                <div className="bf-depth-well" />
                <div className="bf-grid" />
                <div className="bf-blob bf-blob-a" />
                <div className="bf-blob bf-blob-b" />
                <div className="bf-blob bf-blob-c" />
                <div className="bf-noise" />
            </div>

            <div ref={wrapRef} className="mx-auto max-w-6xl">
                <header className="mb-12">
                    <p className="mb-3 text-xs tracking-[0.28em] text-white/60">
                        RECENT WORK
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                        Projects we shipped lately
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                        A curated set of builds across eCommerce, product sites, and custom web
                        apps.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 perspective-distant">
                    {PROJECTS.map((p, idx) => (
                        <a
                            key={p.title}
                            href={p.href ?? "#"}
                            target={p.href ? "_blank" : undefined}
                            rel={p.href ? "noopener noreferrer" : undefined}
                            data-reveal
                            data-from={idx % 2 === 0 ? "left" : "right"} // ✅ LEFT / RIGHT → center
                            style={{
                                ["--d" as any]: `${idx * STAGGER_MS}ms`,
                                ["--dur" as any]: `${REVEAL_MS}ms`,
                            }}
                            className="
                bf-project-card group relative overflow-hidden rounded-2xl
                border border-white/10 bg-white/4
                shadow-[0_30px_120px_rgba(0,0,0,0.75)]
                transition-[transform,background,border-color] duration-300
                hover:border-white/20 hover:bg-white/6
                will-change-transform transform-3d
              "
                            onMouseMove={(e) => {
                                const el = e.currentTarget;
                                const r = el.getBoundingClientRect();

                                // shine position (per-card highlight)
                                const mx = ((e.clientX - r.left) / r.width) * 100;
                                const my = ((e.clientY - r.top) / r.height) * 100;
                                el.style.setProperty("--mx", `${mx}%`);
                                el.style.setProperty("--my", `${my}%`);

                                // tilt values
                                const tiltX =
                                    ((e.clientY - (r.top + r.height / 2)) / r.height) * -6;
                                const tiltY =
                                    ((e.clientX - (r.left + r.width / 2)) / r.width) * 6;

                                el.style.transform = `translateY(-6px) translateZ(20px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "";
                            }}
                        >
                            {/* per-card shine */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(800px 260px at var(--mx, 20%) var(--my, 20%), rgba(255,255,255,0.20), transparent 55%)",
                                }}
                            />

                            {/* subtle top highlight */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-40" />

                            <div className="p-4">
                                {/* mockup frame */}
                                <div className="mb-4 rounded-xl border border-white/10 bg-black/35 p-3">
                                    <div className="mb-3 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-white/25" />
                                        <span className="h-2 w-2 rounded-full bg-white/18" />
                                        <span className="h-2 w-2 rounded-full bg-white/12" />
                                        <div className="ml-2 h-2.5 w-28 rounded-full bg-white/10" />
                                    </div>

                                    <div className="overflow-hidden rounded-lg border border-white/10">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            width={1200}
                                            height={800}
                                            className="h-67.5 w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-end justify-between gap-3 px-1 pb-4">
                                    <div>
                                        <h3 className="text-base font-semibold text-white">
                                            {p.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                                    </div>
                                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70">
                    {p.tag}
                  </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
