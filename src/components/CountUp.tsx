'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    suffix?: string;
    decimals?: number;
    duration?: number;
}

export default function CountUp({ end, suffix = '', decimals = 0, duration = 1.6 }: CountUpProps) {
    const [count, setCount] = useState(end);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        let animationFrame: number | undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0].isIntersecting) return;

                observer.disconnect();
                const startTime = performance.now();
                const durationMs = duration * 1000;

                const animate = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / durationMs, 1);

                    // Ease-out cubic for a natural deceleration
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(eased * end);

                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(animate);
                    }
                };

                animationFrame = requestAnimationFrame(animate);
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            if (animationFrame !== undefined) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration]);

    const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    );
}
