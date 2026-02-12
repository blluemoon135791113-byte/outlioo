"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Z-INDEX HIERARCHY (STRICT ENFORCEMENT)
const Z_INDEX = {
    background: 0,
    glow: 5,
    decorative: 10,
    content: 50,
} as const;

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const premiumEase: [number, number, number, number] = [0.23, 1, 0.32, 1];

    return (
        <div
            className={cn(
                "relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#0A0E1A] w-full rounded-md",
                className
            )}
        >
            {/* ============================================ */}
            {/* DECORATIVE LAYER - All glow effects (pointer-events: none) */}
            {/* ============================================ */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: Z_INDEX.glow }}
                aria-hidden="true"
            >
                {/* Conic Gradient Beam - Left */}
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#FF6B9D]/60 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] top-0"
                >
                    <div className="absolute w-[100%] left-0 bg-[#0A0E1A] h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-[100%] left-0 bg-[#0A0E1A] bottom-0 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>

                {/* Conic Gradient Beam - Right */}
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#FF6B9D]/60 text-white [--conic-position:from_290deg_at_center_top] top-0"
                >
                    <div className="absolute w-40 h-[100%] right-0 bg-[#0A0E1A] bottom-0 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-[100%] right-0 bg-[#0A0E1A] h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>

                {/* Background mask */}
                <div className="absolute top-1/2 h-48 w-full translate-y-[-50%] scale-x-150 bg-[#0A0E1A] blur-2xl" />
                <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md translate-y-[-50%]" />

                {/* Center glow orb - reduced opacity for less interference */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-36 w-[28rem] rounded-full bg-[#FF6B9D] opacity-30 blur-3xl" />

                {/* Accent line */}
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="absolute inset-auto left-1/2 -translate-x-1/2 h-0.5 w-[30rem] top-28 bg-[#FF6B9D]"
                />
            </div>

            {/* ============================================ */}
            {/* CONTENT LAYER - Always on top, fully interactive */}
            {/* ============================================ */}
            <div
                className="relative flex flex-col items-center px-5 pt-40"
                style={{ zIndex: Z_INDEX.content }}
            >
                {children}
            </div>
        </div>
    );
};
