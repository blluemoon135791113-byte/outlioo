"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import AnoAI from "@/components/ui/animated-shader-background";
import { LampContainer } from "@/components/ui/lamp";
import {
    CheckCircle,
    X,
    ArrowRight,
    Clock,
    Target,
    MessageSquare,
    Zap,
    TrendingUp,
    Users,
    Send,
    Calendar,
    FileText,
    Book,
    Shield,
    ExternalLink,
} from "lucide-react";

// ============================================================================
// CONSTANTS
// ============================================================================

const premiumEase: [number, number, number, number] = [0.23, 1, 0.32, 1];

const CASE_STUDIES = {
    addxStudio: "https://www.notion.so/outlio/Case-Study-Addx-Studio-2f3ae787791280a2880af4f16e0a0e85",
    clickLabs: "https://www.notion.so/outlio/Case-Study-ClickLabs-2f3ae787791280e19e09d91ed5329ecd",
};

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: premiumEase } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: premiumEase } },
};

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#FF6B9D]/30 backdrop-blur-sm ${className}`}>
            <span className="text-sm font-medium text-[#F9FAFB] tracking-wide uppercase">
                {children}
            </span>
        </div>
    );
}

function PremiumCTA({
    href,
    children,
    variant = "primary",
    className = "",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}) {
    const baseClasses = "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-all duration-300 rounded-full";

    if (variant === "primary") {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} px-8 py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] text-white text-sm hover:shadow-[0_0_40px_rgba(255,107,157,0.4)] ${className}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} px-8 py-4 border border-white/20 text-white text-sm hover:bg-white/5 ${className}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.a>
    );
}

function SectionDivider() {
    return (
        <div className="max-w-4xl mx-auto py-16">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
}

function Callout({ children, color = "#FF6B9D" }: { children: React.ReactNode; color?: string }) {
    return (
        <div
            className="mt-8 p-6 rounded-2xl border-l-4"
            style={{
                backgroundColor: `${color}08`,
                borderColor: color,
            }}
        >
            <p className="text-sm text-white/90 leading-relaxed">{children}</p>
        </div>
    );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function StealOurSystemsPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return null;

    return (
        <main className="min-h-screen bg-[#0A0E1A] text-white font-sans antialiased overflow-x-hidden selection:bg-[#FF6B9D]/30">
            <Navbar />
            <AnoAI />

            {/* ================================================================== */}
            {/* HERO SECTION — MECHANISM-FOCUSED */}
            {/* ================================================================== */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: premiumEase }}
                        className="text-center"
                    >
                        <Badge>🔓 The Full Playbook • 15 Min Read</Badge>

                        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            How We Send{" "}
                            <span className="bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] bg-clip-text text-transparent">
                                1,400 Personalized DMs
                            </span>
                            <br />
                            in 7 Days Without Burning Out Your Account
                        </h1>

                        <p className="mt-8 text-lg text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
                            This is the exact system we use for Addx Studio, ClickLabs, and 6+ other
                            founders who need qualified calls—not more LinkedIn posts.
                        </p>

                        {/* What You'll Learn */}
                        <div className="mt-10 text-left max-w-xl mx-auto">
                            <p className="text-sm text-white/60 uppercase tracking-wider mb-4">
                                You&apos;re about to see:
                            </p>
                            <ul className="space-y-3 text-[#9CA3AF]">
                                {[
                                    "The 3-filter ICP framework that cuts 5,000 leads down to 200 buyers",
                                    "The angle rotation system that maintains 10-14% reply rates",
                                    "The follow-up sequence that converts 70% of \"soft replies\" into bookings",
                                    "The safety protocol that's sent 500K+ DMs with zero bans",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-[#FF6B9D] mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                            <PremiumCTA href="https://calendly.com/husnainnsaad7/45min">
                                Run This For Me (7-Day Sprint)
                            </PremiumCTA>
                            <PremiumCTA href="#the-offer" variant="secondary">
                                Just Give Me The Playbook (Free)
                            </PremiumCTA>
                        </div>

                        {/* Transparency Note */}
                        <p className="mt-8 text-xs text-[#6B7280] max-w-md mx-auto">
                            This page is long. It&apos;s detailed. It&apos;s the actual process.
                            If you want the &quot;3 secrets to scale your agency&quot; BS, this isn&apos;t it.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================================================================== */}
            {/* SECTION 1: THE PROBLEM (EDUCATIONAL) */}
            {/* ================================================================== */}
            <section className="relative py-24 bg-[#141824]">
                <div className="max-w-4xl mx-auto px-6">
                    <Badge>THE REALITY CHECK</Badge>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: premiumEase }}
                        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight"
                    >
                        Why Your Cold DMs Get Ghosted
                        <br />
                        <span className="text-[#9CA3AF]">(It&apos;s Not What You Think)</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-8 text-[#9CA3AF] space-y-4"
                    >
                        <p>Most people think cold outbound fails because:</p>
                        <ul className="space-y-2 text-white/70">
                            <li className="flex items-center gap-3">
                                <X size={16} className="text-red-400" />
                                &quot;People don&apos;t respond to DMs anymore&quot;
                            </li>
                            <li className="flex items-center gap-3">
                                <X size={16} className="text-red-400" />
                                &quot;Instagram cracks down on spammy accounts&quot;
                            </li>
                            <li className="flex items-center gap-3">
                                <X size={16} className="text-red-400" />
                                &quot;My offer isn&apos;t compelling enough&quot;
                            </li>
                        </ul>
                        <p className="text-white font-medium pt-4">
                            Wrong. Here&apos;s what actually kills cold outbound:
                        </p>
                    </motion.div>

                    <SectionDivider />

                    {/* MISTAKE #1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            <span className="text-[#FF6B9D]">MISTAKE #1:</span> You&apos;re targeting &quot;people who might need this&quot;
                        </h3>

                        <div className="text-[#9CA3AF] space-y-4">
                            <p><strong className="text-white">The Problem:</strong></p>
                            <p>
                                You scrape 5,000 &quot;marketing agencies&quot; from Apollo.
                                4,750 of them are:
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li>• Broke side-hustlers with 200 followers</li>
                                <li>• Agencies that just closed their last client</li>
                                <li>• People who haven&apos;t posted in 6 months (dead account)</li>
                            </ul>
                        </div>

                        <div className="mt-8 p-6 rounded-2xl bg-[#0A0E1A] border border-white/10">
                            <p className="text-sm text-[#FF6B9D] uppercase tracking-wider mb-4 font-bold">
                                What We Do Instead:
                            </p>
                            <p className="text-[#9CA3AF] mb-6">
                                We use a 3-filter system that cuts 5,000 leads to 200 high-intent buyers:
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        filter: "FILTER 1 → Follower Range",
                                        details: "Min: 2,000 (proves they have an audience) • Max: 50,000 (bigger = in-house systems)",
                                    },
                                    {
                                        filter: "FILTER 2 → Engagement Pattern",
                                        details: "Posted in last 7 days • Gets 50+ likes/comments • Replies to DMs",
                                    },
                                    {
                                        filter: "FILTER 3 → Buying Intent Signals",
                                        details: "Recent posts about \"scaling\" or \"hiring\" • Pain point language • Mentions pricing/budgets",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Target size={18} className="text-[#FF6B9D] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">{item.filter}</p>
                                            <p className="text-xs text-[#6B7280] mt-1">{item.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </motion.div>

                    <SectionDivider />

                    {/* MISTAKE #2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            <span className="text-[#C084FC]">MISTAKE #2:</span> You&apos;re sending the same message to everyone
                        </h3>

                        <div className="text-[#9CA3AF] space-y-4">
                            <p><strong className="text-white">The Problem:</strong></p>
                            <p>Your &quot;personalized&quot; DM looks like this:</p>
                            <div className="p-4 rounded-lg bg-[#0A0E1A] border border-white/10 font-mono text-sm">
                                &quot;Hey &#123;&#123;first_name&#125;&#125;, I help &#123;&#123;industry&#125;&#125; businesses like
                                &#123;&#123;company_name&#125;&#125; get more clients. Interested in a quick chat?&quot;
                            </div>
                            <p className="text-xs text-[#6B7280]">
                                This is a template with variables. Everyone can tell.
                            </p>
                        </div>

                        <div className="mt-8 p-6 rounded-2xl bg-[#0A0E1A] border border-white/10">
                            <p className="text-sm text-[#C084FC] uppercase tracking-wider mb-4 font-bold">
                                What We Do Instead:
                            </p>
                            <p className="text-[#9CA3AF] mb-6">
                                We write 2-3 completely different ANGLES and rotate them:
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        angle: "ANGLE 1 — Problem-Aware",
                                        msg: "Saw your post about hiring for outbound—have you thought about just automating the entire prospecting layer instead? We did this for [similar company] and they haven't touched lead gen in 4 months.",
                                        color: "#FF6B9D",
                                    },
                                    {
                                        angle: "ANGLE 2 — Curiosity-Driven",
                                        msg: "Quick question—do you have a system for turning cold traffic into booked calls, or are you still relying on referrals + content?",
                                        color: "#C084FC",
                                    },
                                    {
                                        angle: "ANGLE 3 — Authority-Led",
                                        msg: "We just helped Addx Studio book 23 calls in their first sprint using only X DMs and 40+ calls with Instagram, LinkedIn and Email Outreach. Mind if I send you the breakdown?",
                                        color: "#FCD34D",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-lg bg-[#141824] border border-white/5">
                                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: item.color }}>
                                            {item.angle}
                                        </p>
                                        <p className="text-sm text-white/80 italic">&quot;{item.msg}&quot;</p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-xs text-[#6B7280]">
                                Then we track which angle gets the highest reply rate and double down on day 3.
                            </p>
                        </div>

                        <Callout color="#C084FC">
                            For one client, Angle 2 (curiosity) got 9% replies.
                            Angle 3 (authority) got <span className="text-[#C084FC] font-bold">18%</span>.
                            We killed Angle 2 on day 4.
                        </Callout>
                    </motion.div>

                    <SectionDivider />

                    {/* MISTAKE #3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            <span className="text-[#FCD34D]">MISTAKE #3:</span> You give up after 1 message
                        </h3>

                        <div className="text-[#9CA3AF] space-y-4">
                            <p><strong className="text-white">The Problem:</strong></p>
                            <p>You send 1 DM. They don&apos;t reply. You move on.</p>
                            <p className="text-white font-medium pt-2">Here&apos;s the reality:</p>
                            <ul className="space-y-2">
                                <li>• <span className="text-[#FCD34D]">30%</span> reply to the first message</li>
                                <li>• <span className="text-[#FCD34D]">40%</span> reply after follow-up #1 (24 hours)</li>
                                <li>• <span className="text-[#FCD34D]">20%</span> reply after follow-up #2 (72 hours)</li>
                                <li>• <span className="text-[#FCD34D]">10%</span> reply after follow-up #3 (7 days)</li>
                            </ul>
                            <p className="text-white font-medium">
                                If you&apos;re not following up, you&apos;re losing 70% of potential replies.
                            </p>
                        </div>

                        <div className="mt-8 p-6 rounded-2xl bg-[#0A0E1A] border border-white/10">
                            <p className="text-sm text-[#FCD34D] uppercase tracking-wider mb-4 font-bold">
                                What We Do Instead:
                            </p>
                            <p className="text-[#9CA3AF] mb-6">
                                We use a 4-message sequence over 7 days:
                            </p>

                            <div className="space-y-3">
                                {[
                                    { day: "Day 0", msg: "Initial angle" },
                                    { day: "Day 1", msg: "\"Just checking back on you\"" },
                                    { day: "Day 3", msg: "\"cmon man it's free value\"" },
                                    { day: "Day 7", msg: "\"I'll paypal you $50 if this doesn't work haha\"" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-xs text-[#FCD34D] font-mono w-16">{item.day}</span>
                                        <span className="text-sm text-white/80">{item.msg}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-4 text-xs text-[#6B7280]">
                                Each follow-up is value-driven, not pushy. And yes, follow-ups never end lol.
                            </p>
                        </div>

                        <Callout color="#FCD34D">
                            One client got <span className="text-[#FCD34D] font-bold">0 replies</span> from first messages.
                            After adding follow-ups, 11 people responded—6 of them booked calls.
                        </Callout>
                    </motion.div>
                </div>
            </section>

            {/* ================================================================== */}
            {/* SECTION 2: THE SYSTEM (DAY-BY-DAY BREAKDOWN) */}
            {/* ================================================================== */}
            <section className="relative bg-[#0A0E1A] pt-20">
                <LampContainer>
                    <motion.h2
                        initial={{ opacity: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: premiumEase }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gradient-to-br from-white via-[#FF6B9D] to-[#C084FC] py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent"
                    >
                        The 7-Day Sprint:
                        <br />
                        What Actually Happens
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 text-base text-[#9CA3AF] max-w-2xl mx-auto text-center px-4"
                    >
                        This isn&apos;t a service. It&apos;s a diagnostic sprint.
                        We build your outbound engine in public, then hand you the keys.
                    </motion.p>
                </LampContainer>

                {/* Day-by-Day Breakdown */}
                <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
                    {/* DAY 0 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 flex items-center justify-center">
                                <Clock size={24} className="text-[#FF6B9D]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#FF6B9D] uppercase tracking-wider font-bold">DAY 0</p>
                                <h3 className="text-2xl font-bold text-white">The Strategy Call (60 Minutes)</h3>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-[#141824] border border-white/10">
                                <p className="text-sm text-[#9CA3AF] uppercase tracking-wider mb-4">What We Cover:</p>
                                <ul className="space-y-3 text-sm text-white/80">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-[#FF6B9D] mt-0.5" />
                                        <span><strong>ICP Deep Dive</strong> — Who are you selling to? What&apos;s their revenue range?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-[#FF6B9D] mt-0.5" />
                                        <span><strong>Offer Positioning</strong> — What&apos;s the outcome? What&apos;s your differentiation?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-[#FF6B9D] mt-0.5" />
                                        <span><strong>Account Audit</strong> — Follower count, DM activity, reply patterns</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-[#141824] border border-white/10">
                                <p className="text-sm text-[#9CA3AF] uppercase tracking-wider mb-4">What You Get:</p>
                                <ul className="space-y-3 text-sm text-white/80">
                                    <li className="flex items-start gap-2">
                                        <FileText size={16} className="text-[#FF6B9D] mt-0.5" />
                                        <span>ICP Filter Doc (3-filter framework customized for you)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <MessageSquare size={16} className="text-[#FF6B9D] mt-0.5" />
                                        <span>Angle Brief (2-3 approaches we&apos;ll test)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Target size={16} className="text-[#FF6B9D] mt-0.5" />
                                        <span>Lead Source Map (where we&apos;ll pull leads from)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* DAY 1-2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-[#C084FC]/10 border border-[#C084FC]/30 flex items-center justify-center">
                                <Users size={24} className="text-[#C084FC]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#C084FC] uppercase tracking-wider font-bold">DAY 1-2</p>
                                <h3 className="text-2xl font-bold text-white">Lead Sourcing & Angle Writing</h3>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#141824] border border-white/10 space-y-4">
                            <p className="text-sm text-[#9CA3AF] uppercase tracking-wider">What We Do:</p>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C084FC]">1.</span>
                                    <span>Pull 400-600 leads using your ICP filters (Instagram, LinkedIn, X)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C084FC]">2.</span>
                                    <span>Run the 3-filter system (follower check, engagement analysis, red flag removal)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C084FC]">3.</span>
                                    <span>Write 2-3 angle variations in YOUR voice (we study your content first)</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* DAY 2-6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-[#FCD34D]/10 border border-[#FCD34D]/30 flex items-center justify-center">
                                <Zap size={24} className="text-[#FCD34D]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#FCD34D] uppercase tracking-wider font-bold">DAY 2-6</p>
                                <h3 className="text-2xl font-bold text-white">High-Volume Execution</h3>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-[#141824] border border-white/10">
                                <p className="text-sm text-[#9CA3AF] uppercase tracking-wider mb-4">What We Do EVERY DAY:</p>
                                <ul className="space-y-2 text-sm text-white/80">
                                    <li>• Send 200 DMs (split across angles)</li>
                                    <li>• Monitor replies in real-time</li>
                                    <li>• Tag leads: ✅ Hot / ⏸️ Warm / ❌ Cold</li>
                                    <li>• Run follow-up sequences (24h, 72h)</li>
                                    <li>• Adjust angles on the fly</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-[#0A0E1A] border border-[#FCD34D]/20">
                                <p className="text-sm text-[#FCD34D] uppercase tracking-wider mb-4">
                                    <Shield size={14} className="inline mr-2" />
                                    Platform Safety
                                </p>
                                <ul className="space-y-2 text-sm text-white/80">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-[#FCD34D] mt-0.5" />
                                        <span>Stay under Instagram&apos;s 200 DM/day limit</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-[#FCD34D] mt-0.5" />
                                        <span>Gradual warmup (50 → 100 → 200)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-[#FCD34D] mt-0.5" />
                                        <span>No links in first message, no copy-paste</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* DAY 7 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 flex items-center justify-center">
                                <TrendingUp size={24} className="text-[#FF6B9D]" />
                            </div>
                            <div>
                                <p className="text-xs text-[#FF6B9D] uppercase tracking-wider font-bold">DAY 7</p>
                                <h3 className="text-2xl font-bold text-white">Results Review Call (60 Minutes)</h3>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#141824] border border-white/10">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wider mb-4">What We Cover:</p>
                                    <ul className="space-y-2 text-sm text-white/80">
                                        <li>• The numbers (DMs, reply rate, booked calls)</li>
                                        <li>• What worked (and why)</li>
                                        <li>• The playbook handoff</li>
                                        <li>• What&apos;s next (DIY / DFY / Hybrid)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm text-[#9CA3AF] uppercase tracking-wider mb-4">What You Get:</p>
                                    <ul className="space-y-2 text-sm text-white/80">
                                        <li>• Full performance report (PDF)</li>
                                        <li>• Lead database (CSV)</li>
                                        <li>• Angle playbook (Doc)</li>
                                        <li>• SOP library (Notion)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================================================================== */}
            {/* SECTION 3: CASE STUDIES */}
            {/* ================================================================== */}
            <section className="relative py-24 bg-[#141824]">
                <div className="max-w-4xl mx-auto px-6">
                    <Badge>PROOF</Badge>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight"
                    >
                        2 Founders Who Ran This Sprint
                        <br />
                        <span className="text-[#9CA3AF]">(And What Happened)</span>
                    </motion.h2>

                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        {/* Addx Studio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-8 rounded-2xl bg-[#0A0E1A] border border-white/10 hover:border-[#FF6B9D]/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center p-2">
                                    {/* Placeholder for Addx Studio logo */}
                                    <span className="text-2xl font-bold text-white">A</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Addx Studio</h3>
                                    <p className="text-sm text-[#9CA3AF]">Creative Agency</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-[#9CA3AF]">Calls Booked</span>
                                    <span className="text-2xl font-bold text-[#FF6B9D]">60+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#9CA3AF]">Reply Rate</span>
                                    <span className="text-2xl font-bold text-[#FF6B9D]">12%</span>
                                </div>
                            </div>

                            <a
                                href={CASE_STUDIES.addxStudio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-[#FF6B9D] hover:underline"
                            >
                                Read Full Case Study
                                <ExternalLink size={14} />
                            </a>
                        </motion.div>

                        {/* ClickLabs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl bg-[#0A0E1A] border border-white/10 hover:border-[#C084FC]/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center p-2">
                                    {/* Placeholder for ClickLabs logo */}
                                    <span className="text-2xl font-bold text-white">C</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">ClickLabs</h3>
                                    <p className="text-sm text-[#9CA3AF]">Design & Content Agency</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-[#9CA3AF]">Calls Booked</span>
                                    <span className="text-2xl font-bold text-[#C084FC]">23+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#9CA3AF]">Reply Rate</span>
                                    <span className="text-2xl font-bold text-[#C084FC]">14%</span>
                                </div>
                            </div>

                            <a
                                href={CASE_STUDIES.clickLabs}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-[#C084FC] hover:underline"
                            >
                                Read Full Case Study
                                <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================================================================== */}
            {/* SECTION 4: THE OFFER */}
            {/* ================================================================== */}
            <section id="the-offer" className="relative py-24 bg-[#0A0E1A]">
                <div className="max-w-5xl mx-auto px-6">
                    <Badge>HOW THIS WORKS</Badge>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-center"
                    >
                        Two Ways To Use This System
                    </motion.h2>

                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        {/* OPTION 1: DIY */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-8 rounded-3xl bg-[#141824] border border-white/10"
                        >
                            <div className="text-center mb-8">
                                <p className="text-5xl font-black text-white mb-2">FREE</p>
                                <p className="text-[#9CA3AF]">The DIY Playbook</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "The 3-Filter ICP Framework (PDF)",
                                    "Angle Rotation Template (Doc)",
                                    "4-Message Follow-Up Sequence (Doc)",
                                    "Platform Safety Guidelines (PDF)",
                                    "Tool Stack Recommendations (List)",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle size={18} className="text-[#FF6B9D] mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-white/10">
                                <p className="text-xs text-[#6B7280] mb-4">Who This Is For:</p>
                                <ul className="space-y-1 text-xs text-[#9CA3AF]">
                                    <li>• You have time to execute yourself</li>
                                    <li>• You&apos;re comfortable with manual outreach</li>
                                    <li>• You want to test before hiring us</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <PremiumCTA href="https://form.jotform.com/260415574837463" variant="secondary" className="w-full justify-center">
                                    Download The Playbook
                                </PremiumCTA>
                            </div>
                        </motion.div>

                        {/* OPTION 2: Sprint */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-3xl bg-gradient-to-b from-[#141824] to-[#0A0E1A] border-2 border-[#FF6B9D]/30 relative"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="px-4 py-1 rounded-full bg-[#FF6B9D] text-xs font-bold uppercase text-white">
                                    Most Popular
                                </span>
                            </div>

                            <div className="text-center mb-8">
                                <p className="text-5xl font-black text-[#FF6B9D] mb-2">$247</p>
                                <p className="text-[#9CA3AF]">The 7-Day Sprint</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "ICP strategy call (60 min)",
                                    "Lead sourcing & filtering (200-250 leads)",
                                    "Angle development (2-3 variations)",
                                    "High-volume execution (1,400 DMs)",
                                    "Daily optimization",
                                    "Follow-up sequences",
                                    "Results review call (60 min)",
                                    "Full playbook handoff",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <CheckCircle size={18} className="text-[#FF6B9D] mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="p-4 rounded-xl bg-[#FF6B9D]/10 border border-[#FF6B9D]/20 mb-6">
                                <p className="text-xs text-[#FF6B9D] font-bold uppercase mb-2">Zero-Risk Guarantee</p>
                                <p className="text-xs text-white/80">
                                    Fewer than 18 quality responses in 7 days? Full refund + another week free.
                                </p>
                            </div>

                            <div className="mt-8">
                                <PremiumCTA href="https://calendly.com/husnainnsaad7/45min" className="w-full justify-center">
                                    Book Strategy Call
                                </PremiumCTA>
                            </div>
                        </motion.div>
                    </div>

                    {/* Option 3: Retainer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-12 p-8 rounded-2xl bg-[#141824] border border-white/10"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <p className="text-xs text-[#C084FC] uppercase tracking-wider font-bold mb-2">
                                    OPTION 3: Ongoing Execution (After Sprint)
                                </p>
                                <p className="text-2xl font-bold text-white">
                                    $997<span className="text-[#9CA3AF] text-lg font-normal">/month</span>
                                </p>
                                <p className="text-sm text-[#9CA3AF] mt-2">
                                    3500+ DMs/month • Continuous angle testing • Weekly performance calls
                                </p>
                            </div>
                            <p className="text-xs text-[#6B7280]">
                                Only available to sprint clients.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================================================================== */}
            {/* SECTION 5: FAQ */}
            {/* ================================================================== */}
            <section className="relative py-24 bg-[#141824]">
                <div className="max-w-4xl mx-auto px-6">
                    <Badge>REAL QUESTIONS</Badge>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight mb-12"
                    >
                        What People Actually Ask Us
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Why don't you just log into my account and do this?",
                                a: "Because that's a terrible idea. You lose control, if we get banned you're screwed, you don't learn the system, and you become dependent. Instead, we send you the leads and messages—you send them. You stay in control. (Yes, this means 20-30 min/day. If that's too much, hire a VA—we'll train them.)",
                            },
                            {
                                q: "Can't I just hire a VA on Upwork to do this?",
                                a: "Sure. You'll need to teach them: ICP filtering, angle development, sequencing logic, and platform safety. Most VAs don't know this. You'll spend 2-3 weeks training them. Or... run the sprint with us, get the playbook, then hand that to your VA. They follow the SOP. Done.",
                            },
                            {
                                q: "What if my offer isn't \"proven\" yet?",
                                a: "Then don't do this. Cold outbound works when you've closed clients before, you have testimonials, and your pricing is above $2K. If you're still testing, close 3-5 clients manually first, document what works, then come back. Outbound is an amplifier, not a validator.",
                            },
                            {
                                q: "What if I don't get any calls?",
                                a: "Success = 18+ quality responses in 7 days. Not calls. Responses. We control lead quality, message quality, and response rate. You control how fast you respond and how you handle objections. Fewer than 18 quality responses? Full refund + another week free.",
                            },
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: i * 0.05 }}
                                className="p-6 rounded-2xl bg-[#0A0E1A] border border-white/10"
                            >
                                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                                <p className="text-sm text-[#9CA3AF] leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================== */}
            {/* FINAL CTA */}
            {/* ================================================================== */}
            <section className="relative py-32 bg-[#0A0E1A]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] bg-clip-text text-transparent">
                                Fill Your Calendar
                            </span>
                            <br />
                            in 7 Days?
                        </h2>

                        <p className="text-lg text-[#9CA3AF] mb-10 max-w-xl mx-auto">
                            Book a 15-minute strategy call. We&apos;ll map your ICP, confirm fit,
                            and launch your sprint within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <PremiumCTA href="https://calendly.com/husnainnsaad7/45min">
                                Book Your Strategy Call Now
                            </PremiumCTA>
                            <PremiumCTA href="https://www.instagram.com/outlio.io/?hl=en" variant="secondary">
                                Send Us A DM Instead
                            </PremiumCTA>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 text-xs text-[#6B7280] uppercase tracking-wider">
                            <span>✓ 15-Min Fit Check</span>
                            <span>✓ Founder-Led Calls</span>
                            <span>✓ No Hard Pitch</span>
                            <span>✓ Same-Day Response</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
