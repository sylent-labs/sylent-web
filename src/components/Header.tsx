'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
] as const;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-sm bg-red-500 shadow-[0_0_18px_rgba(255,27,45,0.8)]" />
                    <span className="text-sm font-semibold tracking-[0.22em] sm:text-base">
                        SYLENT
                    </span>
                </div>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <button className="hidden rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm transition-colors hover:bg-red-500/20 md:block">
                    Get Started
                </button>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    <div className="flex w-5 flex-col gap-[5px]">
                        <span
                            className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                                isOpen ? 'translate-y-[7px] rotate-45' : ''
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                                isOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                                isOpen ? '-translate-y-[7px] -rotate-45' : ''
                            }`}
                        />
                    </div>
                </button>
            </header>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
                    isOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Backdrop — tap anywhere to close */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                />

                {/* Close button — top right */}
                <button
                    onClick={() => setIsOpen(false)}
                    className={`absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${
                        isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                    style={{ transitionDelay: isOpen ? '80ms' : '0ms' }}
                    aria-label="Close menu"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="text-white/80"
                    >
                        <line x1="4" y1="4" x2="14" y2="14" />
                        <line x1="14" y1="4" x2="4" y2="14" />
                    </svg>
                </button>

                {/* Menu content */}
                <nav className="relative flex h-full flex-col items-center justify-center gap-2 px-8">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-center text-lg font-medium text-white/90 transition-all duration-300 hover:border-white/10 hover:bg-white/10 ${
                                isOpen
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-4 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isOpen
                                    ? `${i * 60 + 100}ms`
                                    : '0ms',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Mobile CTA */}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className={`mt-4 block w-full rounded-2xl bg-red-500 px-6 py-4 text-center text-lg font-semibold text-white shadow-[0_0_30px_rgba(255,27,45,0.3)] transition-all duration-300 hover:brightness-110 ${
                            isOpen
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                        }`}
                        style={{
                            transitionDelay: isOpen
                                ? `${NAV_LINKS.length * 60 + 100}ms`
                                : '0ms',
                        }}
                    >
                        Get Started
                    </a>

                    {/* Tap anywhere hint */}
                    <p
                        className={`mt-6 text-center text-xs text-white/30 transition-all duration-300 ${
                            isOpen
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-2 opacity-0'
                        }`}
                        style={{
                            transitionDelay: isOpen
                                ? `${(NAV_LINKS.length + 1) * 60 + 100}ms`
                                : '0ms',
                        }}
                    >
                        Tap anywhere to close
                    </p>
                </nav>
            </div>
        </>
    );
}
