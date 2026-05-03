"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Brand colors for subtle glow effects
const brandGlowColors: Record<string, string> = {
    "ClickLabs": "rgba(196, 149, 106, 0.4)",
    "Zooz Drinks": "rgba(107, 142, 123, 0.4)",
    "Addx Studio": "rgba(138, 141, 146, 0.4)",
    "Arctix Solutions": "rgba(212, 175, 122, 0.4)",
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
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            const durations = { fast: "60s", normal: "100s", slow: "150s" };
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
            containerRef.current.style.setProperty(
                "--animation-duration",
                durations[speed]
            );
            setStart(true);
        }
    }, [direction, speed]);

    // Filter out items with empty alt
    const validItems = items.filter((item) => item.alt);

    // Duplicate items 4x for seamless loop (done in React, not DOM)
    const duplicatedItems = Array.from({ length: 4 }, () => validItems).flat();

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                className={cn(
                    "flex min-w-full shrink-0 gap-20 md:gap-24 py-8 w-max flex-nowrap items-center",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {duplicatedItems.map((item, idx) => (
                    <li
                        className="group flex-shrink-0 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                        key={item.alt + "-" + idx}
                        style={{
                            ["--glow-color" as string]: brandGlowColors[item.alt] || "rgba(196, 149, 106, 0.3)",
                        }}
                    >
                        <div className="flex flex-col items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow-color)]">
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
