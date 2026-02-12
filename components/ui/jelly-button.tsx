"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface JellyButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    trackingLabel?: string;
}

export const JellyButton = ({
    children,
    href,
    className,
    trackingLabel,
}: JellyButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCTAClick = () => {
        if (typeof window !== "undefined" && typeof window.gtag === "function" && trackingLabel) {
            window.gtag("event", "click", {
                event_category: "CTA",
                event_label: trackingLabel,
            });
        }
        // Allow default navigation behavior (href)
    };

    return (
        <motion.a
            href={href}
            onClick={handleCTAClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative z-10 inline-flex items-center justify-center overflow-hidden rounded-full cursor-pointer group ${className}`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            animate={
                isHovered
                    ? {
                        scale: [1, 1.05, 0.95, 1.02, 1],
                        rotate: [0, -1, 1, -1, 0],
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1
                        }
                    }
                    : {}
            }
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                mass: 1,
            }}
        >
            {/* Background Gradient with Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D] via-[#C084FC] to-[#FF6B9D] bg-[length:200%_100%] animate-shimmer" />

            {/* Glow */}
            <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
            />

            {/* Content */}
            <span className="relative z-10 px-8 py-4 text-lg font-bold text-white uppercase tracking-wide font-sans flex items-center gap-2">
                {children}
                <motion.span
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    aria-hidden="true"
                >
                    →
                </motion.span>
            </span>
        </motion.a>
    );
};
