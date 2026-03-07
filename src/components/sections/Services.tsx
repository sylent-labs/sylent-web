'use client';

import Link from 'next/link';

import { useRevealOnScroll } from '@/lib/useRevealOnScroll';
import { SERVICE_CATEGORIES, getServicesByCategory } from '@/lib/services';

export default function Services() {
    const wrapRef = useRevealOnScroll();

    return (
        <section
            id="services"
            className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
        >
            <div ref={wrapRef} className="mx-auto max-w-6xl">
                {/* Badge */}
                <div
                    data-reveal
                    data-from="left"
                    style={
                        {
                            '--d': '0ms',
                            '--dur': '1000ms',
                        } as React.CSSProperties
                    }
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    What We Build
                </div>

                {/* Heading */}
                <h2
                    data-reveal
                    data-from="left"
                    style={
                        {
                            '--d': '100ms',
                            '--dur': '1200ms',
                        } as React.CSSProperties
                    }
                    className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl"
                >
                    We architect, build and deploy scalable digital systems.
                </h2>

                <p
                    data-reveal
                    data-from="left"
                    style={
                        {
                            '--d': '200ms',
                            '--dur': '1200ms',
                        } as React.CSSProperties
                    }
                    className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base"
                >
                    Startup speed. Enterprise discipline. Every service below is
                    backed by engineers who have shipped production systems
                    across fintech, insurance, e-commerce and enterprise.
                </p>

                {/* Category groups */}
                <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-16">
                    {SERVICE_CATEGORIES.map((category, catIdx) => {
                        const services = getServicesByCategory(category.slug);
                        return (
                            <div
                                key={category.slug}
                                data-reveal
                                data-from={catIdx % 2 === 0 ? 'left' : 'right'}
                                style={
                                    {
                                        '--d': `${catIdx * 100 + 300}ms`,
                                        '--dur': '1200ms',
                                    } as React.CSSProperties
                                }
                            >
                                <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                                    {category.label}
                                </p>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/15 hover:bg-white/10"
                                        >
                                            <p className="text-sm font-medium text-white">
                                                {service.title}
                                            </p>
                                            <p className="mt-1 text-xs text-white/50">
                                                {service.shortDescription}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
