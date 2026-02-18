"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const premiumEase: [number, number, number, number] = [0.23, 1, 0.32, 1];

// ============================================================================
// MOBILE MENU OVERLAY
// ============================================================================

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[600] bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Slide-in panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.35, ease: premiumEase }}
                        className="fixed top-0 right-0 bottom-0 z-[700] w-[280px] bg-[#0A0E1A]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl shadow-black/50 flex flex-col"
                    >
                        {/* Close button */}
                        <div className="flex items-center justify-between px-6 py-5">
                            <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Menu</span>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                aria-label="Close menu"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Nav links */}
                        <nav className="flex flex-col gap-2 px-6 py-8">
                            <motion.a
                                href="/steal-our-systems"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.3, ease: premiumEase }}
                                className="flex items-center gap-3 px-4 py-4 rounded-2xl text-white font-semibold text-base hover:bg-white/5 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-lg bg-[#FF6B9D]/10 border border-[#FF6B9D]/20 flex items-center justify-center text-sm">
                                    📋
                                </span>
                                Our Process
                            </motion.a>

                            <motion.a
                                href="#how-it-works"
                                onClick={onClose}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15, duration: 0.3, ease: premiumEase }}
                                className="flex items-center gap-3 px-4 py-4 rounded-2xl text-white font-semibold text-base hover:bg-white/5 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-lg bg-[#C084FC]/10 border border-[#C084FC]/20 flex items-center justify-center text-sm">
                                    ⚡
                                </span>
                                How It Works
                            </motion.a>

                            <motion.a
                                href="#book-call"
                                onClick={onClose}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.3, ease: premiumEase }}
                                className="flex items-center gap-3 px-4 py-4 rounded-2xl text-white font-semibold text-base hover:bg-white/5 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-lg bg-[#FCD34D]/10 border border-[#FCD34D]/20 flex items-center justify-center text-sm">
                                    📞
                                </span>
                                Book a Call
                            </motion.a>
                        </nav>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Bottom CTA */}
                        <div className="p-6">
                            <motion.a
                                href="https://calendly.com/husnainnsaad7/45min"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4, ease: premiumEase }}
                                className="block w-full py-4 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] text-white text-center font-bold text-sm uppercase tracking-wide shadow-lg shadow-[#FF6B9D]/20"
                            >
                                Start Your Sprint →
                            </motion.a>
                            <p className="text-center text-xs text-white/30 mt-3">
                                No retainers • Performance only
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ============================================================================
// HAMBURGER ICON
// ============================================================================

function HamburgerIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25, ease: premiumEase }}
                    className="block w-full h-[2px] bg-white rounded-full origin-center"
                />
                <motion.span
                    animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block w-full h-[2px] bg-white rounded-full"
                />
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25, ease: premiumEase }}
                    className="block w-full h-[2px] bg-white rounded-full origin-center"
                />
            </div>
        </button>
    );
}

// ============================================================================
// NAVBAR
// ============================================================================

export const Navbar = ({ className }: { className?: string }) => {
    const prevScrollY = useRef(0);
    const [scrollY, setScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            // Don't hide navbar when mobile menu is open
            if (mobileMenuOpen) {
                prevScrollY.current = currentScrollY;
                return;
            }
            if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileMenuOpen]);

    const handleCTAClick = useCallback(() => {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "click", {
                event_category: "CTA",
                event_label: "navbar_book_call",
            });
        }
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: premiumEase }}
                    className={cn(
                        "fixed top-0 inset-x-0 z-[500] mx-auto w-full px-4 md:px-6 py-4 transition-all duration-300",
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

                        {/* CTA Buttons + Hamburger */}
                        <div className="flex items-center gap-3">
                            {/* Desktop-only buttons */}
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
                                className="hidden md:inline-flex px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white text-[#0A0E1A] text-xs md:text-sm font-bold uppercase tracking-wide hover:shadow-[0_0_30px_rgba(255,107,157,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B9D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]"
                            >
                                Book a Call
                            </motion.a>

                            {/* Mobile: compact Book a Call + hamburger */}
                            <motion.a
                                href="https://calendly.com/husnainnsaad7/45min"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleCTAClick}
                                whileTap={{ scale: 0.95 }}
                                className="md:hidden px-4 py-2 rounded-full bg-white text-[#0A0E1A] text-xs font-bold uppercase tracking-wide"
                            >
                                Book a Call
                            </motion.a>

                            {/* Hamburger - mobile only */}
                            <HamburgerIcon
                                isOpen={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            />
                        </div>
                    </div>
                </motion.nav>
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </>
    );
};

// gtag types are in types/global.d.ts
