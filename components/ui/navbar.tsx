"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const premiumEase: [number, number, number, number] = [0.23, 1, 0.32, 1];

export const Navbar = ({ className }: { className?: string }) => {
    const [scrollY, setScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > scrollY && currentScrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    const handleCTAClick = () => {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "click", {
                event_category: "CTA",
                event_label: "navbar_book_call",
            });
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3, ease: premiumEase }}
                className={cn(
                    "fixed top-0 inset-x-0 z-[100] mx-auto w-full px-4 md:px-6 py-4 transition-all duration-300",
                    scrollY > 20
                        ? "bg-[#0A0E1A]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
                        : "bg-transparent",
                    className
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#FF6B9D]/30">
                            <Image
                                src="/logo.jpg"
                                alt="OUTLIO Logo"
                                fill
                                className="object-contain"
                                sizes="40px"
                            />
                        </div>
                        <span className="text-lg md:text-xl font-bold tracking-tighter text-white font-sans">
                            OUTLIO<span className="text-[#FF6B9D]">.</span>
                        </span>
                    </motion.a>

                    {/* Center Text - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-8">
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="/steal-our-systems"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:inline-flex px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-white/20 text-white text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-white/5 transition-all duration-300"
                        >
                            Our Process
                        </motion.a>

                        <motion.a
                            href="https://calendly.com/husnainnsaad7/45min"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleCTAClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white text-[#0A0E1A] text-xs md:text-sm font-bold uppercase tracking-wide hover:shadow-[0_0_30px_rgba(255,107,157,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B9D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]"
                        >
                            Book a Call
                        </motion.a>
                    </div>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};

// Add gtag type declaration
declare global {
    interface Window {
        gtag?: (
            command: string,
            action: string,
            params: { event_category: string; event_label: string }
        ) => void;
    }
}
