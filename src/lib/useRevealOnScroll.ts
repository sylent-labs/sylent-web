'use client';

import { useEffect, useRef } from 'react';

export function useRevealOnScroll() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const items = Array.from(
            ref.current.querySelectorAll<HTMLElement>('[data-reveal]'),
        );

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    e.target.classList.toggle('is-in', e.isIntersecting);
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -10% 0px',
            },
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return ref;
}
