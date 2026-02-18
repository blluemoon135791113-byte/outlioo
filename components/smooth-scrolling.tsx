"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

interface SmoothScrollingProps {
    children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
    const scrollRef = useRef<LocomotiveScroll | null>(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll();
        scrollRef.current = scroll;

        return () => {
            scroll.destroy();
            scrollRef.current = null;
        };
    }, []);

    return <>{children}</>;
}
