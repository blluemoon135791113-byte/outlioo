"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

interface SmoothScrollingProps {
    children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            lerp: 0.1,
        });
        lenisRef.current = lenis;

        // RAF loop
        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return <>{children}</>;
}
