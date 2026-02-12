"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Brand colors for neon glow effects
const brandGlowColors: Record<string, string> = {
    "ClickLabs": "rgba(255, 165, 0, 0.6)",
    "Zooz Drinks": "rgba(255, 107, 107, 0.6)",
    "Addx Studio": "rgba(100, 100, 100, 0.6)",
    "Arctix Solutions": "rgba(0, 149, 255, 0.6)",
};

export const Marquee = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        src: string;
        alt: string;
        className?: string;
        style?: React.CSSProperties;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            // Duplicate items multiple times for seamless infinite loop
            for (let i = 0; i < 3; i++) {
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem);
                    }
                });
            }

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            const durations = { fast: "60s", normal: "100s", slow: "150s" };
            containerRef.current.style.setProperty(
                "--animation-duration",
                durations[speed]
            );
        }
    };

    // Filter out items with empty alt
    const validItems = items.filter((item) => item.alt);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-20 md:gap-24 py-8 w-max flex-nowrap items-center",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {validItems.map((item, idx) => (
                    <li
                        className="group flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
                        key={item.alt + idx}
                        style={{
                            ["--glow-color" as string]: brandGlowColors[item.alt] || "rgba(255, 107, 157, 0.5)",
                        }}
                    >
                        <div className="flex flex-col items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_30px_var(--glow-color)] group-hover:drop-shadow-[0_0_20px_var(--glow-color)]">
                            {item.src ? (
                                <div className="relative h-14 md:h-20 w-auto">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={160}
                                        height={80}
                                        className={cn("h-full w-auto object-contain", item.className)}
                                        style={item.style}
                                    />
                                </div>
                            ) : (
                                <div
                                    className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <span className="text-2xl font-bold text-white/60">
                                        {item.alt.charAt(0)}
                                    </span>
                                </div>
                            )}
                            <span className="text-sm md:text-base font-medium text-white/60 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                                {item.alt}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
