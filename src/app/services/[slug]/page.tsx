import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

import {
    getServiceBySlug,
    getRelatedServices,
    getAllServiceSlugs,
    SERVICE_CATEGORIES,
} from '@/lib/services';

// ── Static generation ──

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { title: 'Not Found | Sylent' };
    }

    return {
        title: `${service.title} | Sylent`,
        description: service.shortDescription,
        openGraph: {
            title: `${service.title} | Sylent`,
            description: service.shortDescription,
            type: 'website',
        },
    };
}

// ── Page ──

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const category = SERVICE_CATEGORIES.find(
        (c) => c.slug === service.category,
    );
    const related = getRelatedServices(service);

    return (
        <main className="px-4 pb-16 sm:px-6 sm:pb-20 md:px-8 md:pb-24">
            <div className="mx-auto max-w-4xl">
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-8 flex items-center gap-2 text-xs text-white/40 sm:mb-12"
                >
                    <Link
                        href="/"
                        className="transition-colors hover:text-white"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <Link
                        href="/#services"
                        className="transition-colors hover:text-white"
                    >
                        Services
                    </Link>
                    <span>/</span>
                    <span className="text-white/60">{service.title}</span>
                </nav>

                {/* Page header */}
                <div className="mb-12 sm:mb-16">
                    {category && (
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl sm:px-4 sm:py-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                            {category.label}
                        </div>
                    )}

                    <h1 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl">
                        {service.title}
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
                        {service.shortDescription}
                    </p>

                    <div className="mt-6 sm:mt-8">
                        <Link
                            href="/#contact"
                            className="inline-block rounded-xl bg-red-500 px-4 py-3 text-sm font-medium shadow-[0_0_24px_rgba(255,27,45,0.35)] transition-all hover:brightness-110 sm:px-5 sm:text-base"
                        >
                            Book a Free Call
                        </Link>
                    </div>
                </div>

                {/* Overview */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                        Overview
                    </h2>
                    <div className="space-y-4">
                        {service.overview.split('\n\n').map((paragraph, i) => (
                            <p
                                key={i}
                                className="text-sm leading-relaxed text-white/65 sm:text-base"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Technical deep-dive */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                        Technical Details
                    </h2>
                    <div className="space-y-10">
                        {service.techSections.map((section) => (
                            <div
                                key={section.heading}
                                className="border-t border-white/10 pt-8"
                            >
                                <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
                                    {section.heading}
                                </h3>
                                <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech stack */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {service.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 sm:px-4 sm:py-2 sm:text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Related services */}
                {related.length > 0 && (
                    <section className="mb-12 sm:mb-16">
                        <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                            Related Services
                        </h2>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    href={`/services/${rel.slug}`}
                                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/15 hover:bg-white/10"
                                >
                                    <p className="text-sm font-medium text-white">
                                        {rel.title}
                                    </p>
                                    <p className="mt-1 text-xs text-white/50">
                                        {rel.shortDescription}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Bottom CTA */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:p-10">
                    <h2 className="text-lg font-semibold text-white sm:text-xl">
                        Ready to talk about {service.title.toLowerCase()}?
                    </h2>
                    <p className="mt-2 text-sm text-white/60">
                        Let us know what you are building. We will tell you
                        exactly how we can help.
                    </p>
                    <Link
                        href="/#contact"
                        className="mt-6 inline-block rounded-xl bg-red-500 px-5 py-3 text-sm font-medium shadow-[0_0_24px_rgba(255,27,45,0.35)] transition-all hover:brightness-110 sm:text-base"
                    >
                        Book a Free Call
                    </Link>
                </div>
            </div>
        </main>
    );
}
