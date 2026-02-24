"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AnoAI from "@/components/ui/animated-shader-background";
import { LampContainer } from "@/components/ui/lamp";
import { Marquee } from "@/components/ui/marquee";

import { Navbar } from "@/components/ui/navbar";
import { JellyButton } from "@/components/ui/jelly-button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  Search,
  PenLine,
  BarChart3,
  Send,
  RotateCcw,
  FileText,
  Star,
  Quote,
} from "lucide-react";

// ============================================================================
// CONSTANTS & TYPES
// ============================================================================

const premiumEase: [number, number, number, number] = [0.23, 1, 0.32, 1];

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: premiumEase, delay },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: premiumEase },
  },
};

// ============================================================================
// OPTIMIZED HOOKS
// ============================================================================

/**
 * Optimized counter hook - only updates state when displayed integer changes
 */


// ============================================================================
// ANALYTICS
// ============================================================================

function trackCTA(label: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click", {
      event_category: "CTA",
      event_label: label,
    });
  }
}

// ============================================================================
// COMPONENTS
// ============================================================================

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#FF6B9D]/30 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: premiumEase }}
    >
      <span className="relative flex h-2 w-2" aria-label="Live status">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B9D] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B9D]"></span>
      </span>
      <span className="text-sm font-medium text-[#F9FAFB] tracking-wide uppercase">
        {children}
      </span>
    </motion.div>
  );
}

function PremiumCTA({
  href,
  children,
  variant = "primary",
  size = "lg",
  trackingLabel,
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  trackingLabel?: string;
  target?: string;
}) {
  const baseStyles =
    size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-4 text-base";

  const handleClick = useCallback(() => {
    if (trackingLabel) {
      trackCTA(trackingLabel);
    }
  }, [trackingLabel]);

  if (variant === "primary") {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        className={`group relative ${baseStyles} font-bold rounded-full overflow-hidden inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B9D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {/* Shimmer gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D] via-[#C084FC] to-[#FF6B9D] bg-[length:200%_100%] animate-shimmer" />

        {/* Glow effect */}
        <div
          className="absolute -inset-1 bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-300"
          aria-hidden="true"
        />

        <span className="relative z-10 text-white uppercase tracking-wide font-sans flex items-center gap-2">
          {children}
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease: premiumEase }}
            aria-hidden="true"
          >
            →
          </motion.span>
        </span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={`group relative ${baseStyles} font-semibold rounded-full border-2 border-white/20 text-white overflow-hidden z-10 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B9D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]`}
      whileHover={{
        borderColor: "rgba(255, 255, 255, 0.4)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
    >
      <span className="uppercase tracking-wide font-sans flex items-center gap-2">
        {children}
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          →
        </motion.span>
      </span>
    </motion.a>
  );
}

function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-4xl ${center ? "mx-auto text-center" : ""} mb-20`}>
      {badge && (
        <motion.div
          className="mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FF6B9D]/10 text-[#FF6B9D] border border-[#FF6B9D]/20">
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-8 tracking-tight font-sans"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.1}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed font-light max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}






function BloomingLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const petalSpring = { type: "spring", stiffness: 120, damping: 14, mass: 0.8 } as const;
  const textSpring = { type: "spring", stiffness: 100, damping: 16, mass: 0.6 } as const;

  return (
    <div className="flex flex-col items-center pb-8 relative z-[200]">
      <motion.div
        className="relative cursor-pointer mt-8 md:mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: premiumEase }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Transparent Hit Area — keeps hover active */}
        <div className="absolute inset-[-50px] z-30" />

        {/* Glow that expands on bloom */}
        <div
          className="absolute inset-0 bg-[#FF6B9D] blur-3xl rounded-full pointer-events-none"
          style={{
            opacity: isHovered ? 0.45 : 0.15,
            transform: `scale(${isHovered ? 2.5 : 1.2})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          aria-hidden="true"
        />

        {/* Hidden Reveal Text — floats UP out of the opening logo */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={
            isHovered
              ? { opacity: 1, scale: 1, y: -80 }
              : { opacity: 0, scale: 0.6, y: 10 }
          }
          transition={textSpring}
        >
          <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,107,157,0.6)]">
            $50
          </div>
          <div className="text-[10px] font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-[0.2em] mt-1">
            If Our Systems Suck
          </div>
        </motion.div>

        {/* Logo Container — sized but no border/ring here, petals carry it */}
        <div className="relative h-20 w-20 md:h-24 md:w-24 z-20">

          {/* LEFT PETAL — gradient ring + image, clipped to left half */}
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: "inset(0 50% 0 0)",
              transformOrigin: "bottom center",
            }}
            animate={{ rotate: isHovered ? -18 : 0 }}
            transition={petalSpring}
          >
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#FF6B9D] via-[#C084FC] to-[#FF6B9D] shadow-[0_0_20px_rgba(255,107,157,0.3)] animate-shimmer bg-[length:200%_100%]">
              <div className="h-full w-full rounded-full border-4 border-[#0A0E1A] bg-[#0A0E1A] overflow-hidden relative">
                <Image
                  src="/logo.jpg"
                  alt="OUTLIO Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT PETAL — gradient ring + image, clipped to right half */}
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: "inset(0 0 0 50%)",
              transformOrigin: "bottom center",
            }}
            animate={{ rotate: isHovered ? 18 : 0 }}
            transition={petalSpring}
          >
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#FF6B9D] via-[#C084FC] to-[#FF6B9D] shadow-[0_0_20px_rgba(255,107,157,0.3)] animate-shimmer bg-[length:200%_100%]">
              <div className="h-full w-full rounded-full border-4 border-[#0A0E1A] bg-[#0A0E1A] overflow-hidden relative">
                <Image
                  src="/logo.jpg"
                  alt="OUTLIO Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function Home() {
  const features = [
    {
      Icon: Search,
      title: "ICP Deep Research",
      description: "We identify your ideal customers so you never waste time on unqualified leads.",
      color: "#FF6B9D",
    },
    {
      Icon: PenLine,
      title: "Custom Copy Creation",
      description: "Your voice, their language—messages that actually convert.",
      color: "#C084FC",
    },
    {
      Icon: BarChart3,
      title: "Multi-Angle Testing",
      description: "5+ approaches tested to find the message that resonates.",
      color: "#FCD34D",
    },
    {
      Icon: Send,
      title: "200+ DMs/Day",
      description: "Maximum reach without the spam feel—targeted, personal outreach.",
      color: "#FF6B9D",
    },
    {
      Icon: RotateCcw,
      title: "Smart Follow-Ups",
      description: "Automated sequences that feel genuinely personal.",
      color: "#C084FC",
    },
    {
      Icon: FileText,
      title: "Full Report",
      description: "Complete playbook you own forever—every metric, insight, and strategy.",
      color: "#FCD34D",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white font-sans antialiased overflow-x-hidden selection:bg-[#FF6B9D]/30 relative noise-overlay">
      <Navbar />
      <div className="fixed inset-0 -z-20 bg-[#0A0E1A]" aria-hidden="true" />
      <AnoAI />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <div className="flex flex-col relative">

        <ContainerScroll
          titleComponent={
            <div className="mb-4 relative z-[200]">
              <BloomingLogo />
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.75rem] font-bold leading-[1.05] text-white drop-shadow-2xl tracking-tight font-sans">
                Book 10+ Qualified Calls in 7 Days. <br />
                <span className="bg-gradient-to-r from-[#FF6B9D] via-[#C084FC] to-[#FCD34D] bg-clip-text text-transparent mt-2 block leading-none">
                  Guaranteed. Or Pay $0.
                </span>
              </h1>
              <p className="mt-2 text-base md:text-lg text-[#9CA3AF] max-w-2xl mx-auto font-light leading-relaxed">
                A 7-day outbound ecosystem built for founders scaling past
                $30K/mo.
                <span className="block mt-4 text-white/40 text-sm tracking-widest uppercase">
                  No Retainers • Performance Only
                </span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 mb-4">
                <JellyButton href="https://calendly.com/husnainnsaad7/45min" trackingLabel="hero_primary" size="md">
                  Start Your 7-Day Sprint
                </JellyButton>
                <PremiumCTA
                  href="/steal-our-systems"
                  variant="secondary"
                  size="md"
                  trackingLabel="hero_secondary"
                  target="_blank"
                >
                  Steal Our Process
                </PremiumCTA>
              </div>

              {/* Risk Reversal - Below CTAs */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-2 mb-8 text-base font-bold text-white text-center relative z-20"
              >
                If we don&apos;t book real calls in 7 days — you pay nothing.
              </motion.p>


            </div>
          }
        >
          {/* Fixed aspect-ratio container for hero image to eliminate CLS */}
          <div className="relative w-full aspect-video bg-[#0A0E1A] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
              alt="Dashboard Preview"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="rounded-2xl object-cover object-left-top opacity-80"
              draggable={false}
              quality={85}
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent opacity-70 rounded-2xl"
              aria-hidden="true"
            />
          </div>
        </ContainerScroll>
      </div>

      {/* ================================================================== */}
      {/* TRUST MARQUEE */}
      {/* ================================================================== */}
      <section className="relative py-8 md:py-10 bg-[#141824]/50 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-6">
            Trusted by High-Performers at
          </p>
          <Marquee
            items={[
              { src: "/logos/clicklabs.png", alt: "ClickLabs" },
              { src: "/logos/zooz.png", alt: "Zooz Drinks" },
              {
                src: "/logos/addx.jpg",
                alt: "Addx Studio",
                style: {
                  maskImage: "url(/logos/addx.jpg)",
                  maskMode: "luminance",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskImage: "url(/logos/addx.jpg)",
                  WebkitMaskMode: "luminance",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "contain",
                } as React.CSSProperties
              },
              { src: "/logos/arctix.png", alt: "Arctix Solutions" },
            ]}
            speed="slow"
          />
        </div>
      </section>

      {/* Section Divider: Trust → Problem */}
      <div className="section-divider" aria-hidden="true" />

      {/* ================================================================== */}
      {/* PROBLEM SECTION */}
      {/* ================================================================== */}
      <section className="relative py-28 md:py-36 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="THE PROBLEM"
            title={
              <>
                You&apos;re{" "}
                <span className="text-[#FF6B9D]">Bleeding Revenue</span>
                <br />
                Every Single Day.
              </>
            }
            subtitle="While you're waiting for referrals, your competitors are aggressively acquiring your market share."
          />

          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: "📉",
                title: "Unpredictable Pipeline",
                desc: "One month you're feasting, the next you're starving. You can't hire or plan.",
              },
              {
                icon: "🥱",
                title: "Content Fatigue",
                desc: "Posting 5x a week on LinkedIn for 200 views. Hope is not a strategy.",
              },
              {
                icon: "💸",
                title: "Ad Burnout",
                desc: "Spending $3,000/mo on ads that attract low-quality leads who can't afford you.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  aria-hidden="true"
                />
                <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#141824] to-[#0A0E1A] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-[#FF6B9D]/30 group-hover:shadow-[0_0_40px_rgba(255,107,157,0.12)] min-h-0 md:min-h-[250px]">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B9D]/20 to-[#C084FC]/20 backdrop-blur-sm group-hover:from-[#FF6B9D]/30 group-hover:to-[#C084FC]/30 transition-all duration-300">
                    <span
                      className="text-4xl transition-transform duration-300 group-hover:scale-110"
                      role="img"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Divider: Problem → How It Works */}
      <div className="section-divider" aria-hidden="true" />

      {/* ================================================================== */}
      {/* LAMP REVEAL - HOW IT WORKS */}
      {/* ================================================================== */}
      <section id="how-it-works" className="relative bg-[#0A0E1A] pt-10">
        <LampContainer className="mt-0">
          <motion.h2
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: premiumEase,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 bg-gradient-to-br from-white via-[#FF6B9D] to-[#C084FC] py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent font-sans"
          >
            7 Days. <br /> Real Calls. <br /> Zero Guesswork.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 text-base md:text-lg text-[#9CA3AF] max-w-xl mx-auto text-center px-4"
          >
            We don&apos;t teach you outbound. We DO it for you. In one week,
            you&apos;ll have conversations with qualified buyers — or it costs
            you nothing.
          </motion.p>
        </LampContainer>

        <div className="relative z-10 max-w-6xl mx-auto px-6 mt-8 pb-16 md:pb-24">
          <div className="relative">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  step: "01",
                  title: "Deep Strategy",
                  desc: "ICP research & positioning",
                },
                {
                  step: "02",
                  title: "Launch Day",
                  desc: "200+ targeted outreach",
                },
                {
                  step: "03",
                  title: "Optimization",
                  desc: "Real-time testing & refinement",
                },
                {
                  step: "04",
                  title: "Handoff",
                  desc: "Full playbook & insights",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  variants={staggerItem}
                  className="relative group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B9D]/60 to-[#C084FC]/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    aria-hidden="true"
                  />
                  <div className="relative h-full rounded-2xl border border-white/10 bg-[#141824]/80 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 group-hover:bg-[#141824] group-hover:border-[#FF6B9D]/30 group-hover:shadow-[0_0_30px_rgba(255,107,157,0.1)] min-h-[200px]">
                    <div
                      className="text-5xl md:text-6xl font-black text-[#FF6B9D]/10 absolute top-4 right-4 z-0 group-hover:text-[#FF6B9D]/25 transition-all duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {item.step}
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full border border-[#FF6B9D]/30 bg-[#0A0E1A] flex items-center justify-center mb-6 text-[#FF6B9D] font-bold group-hover:border-[#FF6B9D]/60 group-hover:shadow-[0_0_15px_rgba(255,107,157,0.2)] transition-all duration-300">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-sans">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#9CA3AF]">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider: How It Works → Engine */}
      <div className="section-divider section-divider-dark-to-card" aria-hidden="true" />

      {/* ================================================================== */}
      {/* WHAT'S INCLUDED - COMPACT ICON CARDS */}
      {/* ================================================================== */}
      <section className="relative py-28 md:py-36 bg-[#141824]">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <SectionHeader
            badge="THE ENGINE"
            title={
              <>
                Everything You Need to
                <br />
                <span className="text-[#FF6B9D]">Dominate Outbound</span>
              </>
            }
            subtitle="We handle every single step. You just show up to calls."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: premiumEase }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl border border-white/8 bg-[#141824] hover:bg-[#1a2030] transition-all duration-300 p-5 flex flex-col gap-3 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: premiumEase,
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ ["--card-color" as string]: feature.color }}
              >
                {/* subtle glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `${feature.color}20` }}
                />
                {/* hover border glow */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${feature.color}30, transparent 60%)` }}
                  aria-hidden="true"
                />

                {/* icon pill */}
                <div
                  className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_var(--card-color)]"
                  style={{
                    background: `${feature.color}12`,
                    border: `1px solid ${feature.color}25`,
                  }}
                >
                  <feature.Icon
                    size={20}
                    color={feature.color}
                    strokeWidth={1.8}
                    aria-label={feature.title}
                  />
                </div>

                {/* text */}
                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mt-0.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Divider: Engine → Case Studies */}
      <div className="section-divider" style={{ background: '#141824' }} aria-hidden="true" />

      {/* ================================================================== */}
      {/* CASE STUDIES SECTION */}
      {/* ================================================================== */}
      <section className="relative py-28 md:py-36 bg-[#141824]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="REAL RESULTS"
            title={
              <>
                <span className="text-[#FF6B9D]">Founders</span> Have Run
                <br />
                This Sprint. Here Are Two.
              </>
            }
            subtitle="See exactly what happened when we ran our 7-day sprint for these agencies."
          />

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Addx Studio */}
            <motion.div
              variants={staggerItem}
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                aria-hidden="true"
              />
              <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#0A0E1A] to-[#141824] p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-[#FF6B9D]/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white tracking-tight">ADDX</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Addx Studio</h3>
                    <p className="text-sm text-[#9CA3AF]">Creative Agency</p>
                  </div>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-[#FF6B9D]/5">
                    <span className="text-[#9CA3AF] text-sm uppercase tracking-wider">Calls Booked</span>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] bg-clip-text text-transparent">53+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-[#FF6B9D]/5">
                    <span className="text-[#9CA3AF] text-sm uppercase tracking-wider">Pipeline Added</span>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] bg-clip-text text-transparent">$100k MRR</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-[#FF6B9D]/5">
                    <span className="text-[#9CA3AF] text-sm uppercase tracking-wider">Reply Rate</span>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] bg-clip-text text-transparent">30%</span>
                  </div>
                </div>


                <a
                  href="https://www.notion.so/outlio/Case-Study-Addx-Studio-2f3ae787791280a2880af4f16e0a0e85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B9D]/10 border border-[#FF6B9D]/30 text-sm font-bold text-[#FF6B9D] hover:bg-[#FF6B9D]/20 transition-colors"
                >
                  Read Full Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* ClickLabs */}
            <motion.div
              variants={staggerItem}
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-[#C084FC] to-[#FF6B9D] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                aria-hidden="true"
              />
              <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#0A0E1A] to-[#141824] p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-[#C084FC]/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
                    <div className="relative w-12 h-12">
                      <Image src="/logos/clicklabs.png" alt="ClickLabs Logo" fill className="object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">ClickLabs</h3>
                    <p className="text-sm text-[#9CA3AF]">Design & Content Agency</p>
                  </div>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-[#C084FC]/5">
                    <span className="text-[#9CA3AF] text-sm uppercase tracking-wider">Calls Booked</span>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#C084FC] to-[#FF6B9D] bg-clip-text text-transparent">27</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-[#C084FC]/5">
                    <span className="text-[#9CA3AF] text-sm uppercase tracking-wider">Pipeline Added</span>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#C084FC] to-[#FF6B9D] bg-clip-text text-transparent">$28K MRR</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-[#C084FC]/5">
                    <span className="text-[#9CA3AF] text-sm uppercase tracking-wider">Reply Rate</span>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#C084FC] to-[#FF6B9D] bg-clip-text text-transparent">26%</span>
                  </div>
                </div>


                <a
                  href="https://www.notion.so/outlio/Case-Study-ClickLabs-2f3ae787791280e19e09d91ed5329ecd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C084FC]/10 border border-[#C084FC]/30 text-sm font-bold text-[#C084FC] hover:bg-[#C084FC]/20 transition-colors"
                >
                  Read Full Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider: Case Studies → Testimonials */}
      <div className="section-divider section-divider-card-to-dark" aria-hidden="true" />

      {/* ================================================================== */}
      {/* TESTIMONIALS SECTION */}
      {/* ================================================================== */}
      <section className="relative py-28 md:py-36 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="WHAT CLIENTS SAY"
            title={
              <>
                Founders Who&apos;ve{" "}
                <span className="text-[#FF6B9D]">Worked With Us</span>
              </>
            }
            subtitle="Real reviews from real founders who ran the 7-day sprint."
          />

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ClickLabs Founder Review — 3D Flip */}
            <motion.div
              variants={staggerItem}
              className="flip-card h-[340px] md:h-[320px]"
            >
              <div className="flip-card-inner">
                {/* FRONT — Review Quote */}
                <div className="flip-card-front">
                  <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#141824] to-[#0A0E1A] p-8 backdrop-blur-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={18} className="text-[#FCD34D] fill-[#FCD34D]" />
                        ))}
                        <span className="ml-2 text-sm text-[#9CA3AF]">5.0</span>
                      </div>
                      <div className="relative mb-6">
                        <Quote size={32} className="text-[#FF6B9D]/20 absolute -top-2 -left-1" aria-hidden="true" />
                        <p className="text-lg text-white/90 leading-relaxed pl-8 italic">
                          &quot;Husnain is literally one of the best and experienced business development manager on this platform.&quot;
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <div className="relative w-8 h-8">
                          <Image src="/logos/clicklabs.png" alt="ClickLabs" fill className="object-contain" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-bold">ClickLabs Founder</p>
                        <p className="text-sm text-[#9CA3AF]">Design & Content Agency</p>
                      </div>
                      <p className="ml-auto text-xs text-white/30 uppercase tracking-wider">Hover to see source →</p>
                    </div>
                  </div>
                </div>

                {/* BACK — Upwork Review Screenshot Replica */}
                <div className="flip-card-back">
                  <div className="h-full rounded-3xl border border-[#FF6B9D]/30 bg-[#1A1A1A] p-8 flex flex-col justify-center">
                    {/* Upwork-style header */}
                    <p className="text-[#14A800] font-semibold text-base md:text-lg mb-3 leading-snug">
                      Out reacher / Lead Generation Specialist (Commission + Per Call Payment)
                    </p>
                    <div className="flex items-center gap-2 mb-4 text-sm text-[#9CA3AF]">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={14} className="text-[#FF8C00] fill-[#FF8C00]" />
                        ))}
                      </div>
                      <span className="font-medium text-white/80">5.0 of 1 reviews</span>
                      <span className="text-white/20">|</span>
                      <span>Sep 4, 2025 - Present</span>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={`inner-${s}`} size={14} className="text-[#FF8C00] fill-[#FF8C00]" />
                          ))}
                        </div>
                        <span className="text-white/80 font-medium text-sm">5.0</span>
                        <span className="text-[#9CA3AF] text-sm">Oct 28, 2025</span>
                      </div>
                      <p className="text-white/90 italic text-base leading-relaxed">
                        &quot;Husnain is literally one of the best and experienced business development manager on this platform&quot;
                      </p>
                    </div>
                    <p className="mt-4 text-xs text-white/20 uppercase tracking-wider text-center">Upwork Verified Review</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Abdullah — Addx Studio — 3D Flip */}
            <motion.div
              variants={staggerItem}
              className="flip-card h-[340px] md:h-[320px]"
            >
              <div className="flip-card-inner">
                {/* FRONT — Review Quote */}
                <div className="flip-card-front">
                  <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#141824] to-[#0A0E1A] p-8 backdrop-blur-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={18} className="text-[#FCD34D] fill-[#FCD34D]" />
                        ))}
                        <span className="ml-2 text-sm text-[#9CA3AF]">5.0</span>
                      </div>
                      <div className="relative mb-6">
                        <Quote size={32} className="text-[#C084FC]/20 absolute -top-2 -left-1" aria-hidden="true" />
                        <p className="text-lg text-white/90 leading-relaxed pl-8 italic">
                          &quot;Liam closed alhamdullilah 🤝 — the outreach system actually works. Real calls, real closures.&quot;
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <span className="text-lg font-bold text-white">A</span>
                      </div>
                      <div>
                        <p className="text-white font-bold">Abdullah A.</p>
                        <p className="text-sm text-[#9CA3AF]">Founder, Addx Studio</p>
                      </div>
                      <p className="ml-auto text-xs text-white/30 uppercase tracking-wider">Hover to see source →</p>
                    </div>
                  </div>
                </div>

                {/* BACK — Discord Message Replica */}
                <div className="flip-card-back">
                  <div className="h-full rounded-3xl border border-[#C084FC]/30 bg-[#2B2D31] p-6 md:p-8 flex flex-col justify-center">
                    {/* Message header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold text-sm">A</div>
                      <div>
                        <span className="font-semibold text-white">Abdullah.A</span>
                        <span className="ml-2 text-xs text-[#949BA4]">27/09/2025, 06:59</span>
                      </div>
                    </div>
                    {/* Message content */}
                    <p className="text-white text-base mb-4 pl-[52px]">
                      liam closed alhamdullilah 🤝
                    </p>
                    {/* Emoji reactions */}
                    <div className="flex items-center gap-2 pl-[52px] mb-4">
                      <span className="px-2 py-0.5 rounded-full bg-[#383A40] text-sm">❤️</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#383A40] text-sm">😭</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#383A40] text-sm">🥹</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#383A40] text-sm">😊</span>
                    </div>
                    {/* Second message */}
                    <div className="pl-[52px]">
                      <p className="text-xs text-[#949BA4] mb-1">07:00</p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        btw this notes section is given for a reason - if u can just share a bit of insights what the client replied on regarding the dm you sent so it would help me get a bit of a picture on what this client is all about
                      </p>
                    </div>
                    <p className="mt-4 text-xs text-white/20 uppercase tracking-wider text-center">Internal Client Channel</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider: Testimonials → Team */}
      <div className="section-divider" aria-hidden="true" />

      {/* ================================================================== */}
      {/* MEET OUR TEAM SECTION */}
      {/* ================================================================== */}
      <section className="relative py-28 md:py-36 bg-[#0A0E1A]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            badge="WHO WE ARE"
            title={
              <>
                Meet Our{" "}
                <span className="text-[#FF6B9D]">Team</span>
              </>
            }
            subtitle="The people behind your next growth sprint."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* --- Husnain --- */}
            <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D] to-[#C084FC] rounded-full blur opacity-50" />
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/20 hover:scale-105 transition-transform duration-300">
                  <a
                    href="https://www.linkedin.com/in/husnain-rafiq-343179290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <Image
                      src="/husnain.jpg"
                      alt="Husnain - Founder of OUTLIO"
                      fill
                      className="object-cover"
                      style={{ objectPosition: '70% 25%' }}
                    />
                  </a>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Husnain</h3>
              <p className="text-[#FF6B9D] font-medium tracking-wide uppercase text-xs mb-4">
                Founder
              </p>
              <p className="text-sm text-[#9CA3AF] leading-relaxed italic mb-4 max-w-xs">
                &quot;Get you results or pay you nothing. I take all the risk so you don&apos;t have to.&quot;
              </p>
              <a
                href="https://www.linkedin.com/in/husnain-rafiq-343179290/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-xs flex items-center gap-1.5 uppercase tracking-widest"
              >
                LinkedIn →
              </a>
            </motion.div>

            {/* --- Saad --- */}
            <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D] to-[#C084FC] rounded-full blur opacity-50" />
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/20 hover:scale-105 transition-transform duration-300">
                  <a
                    href="https://www.linkedin.com/in/muhammad-saad-8883383b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <Image
                      src="/saboor_profile.jpg"
                      alt="Saad - Sales Strategist"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </a>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Saad</h3>
              <p className="text-[#C084FC] font-medium tracking-wide uppercase text-xs mb-4">
                Sales Strategist
              </p>
              <p className="text-sm text-[#9CA3AF] leading-relaxed italic mb-4 max-w-xs">
                &quot;Outbound done right turns strangers into booked calls.&quot;
              </p>
              <a
                href="https://www.linkedin.com/in/muhammad-saad-8883383b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-xs flex items-center gap-1.5 uppercase tracking-widest"
              >
                LinkedIn →
              </a>
            </motion.div>

            {/* --- Abdul Saboor --- */}
            <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D] to-[#C084FC] rounded-full blur opacity-50" />
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/20 hover:scale-105 transition-transform duration-300">
                  <a
                    href="https://www.linkedin.com/in/abdulsaboor2004/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <Image
                      src="/saad_profile.jpg"
                      alt="Abdul Saboor - Co-Founder"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </a>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Abdul Saboor</h3>
              <p className="text-[#FCD34D] font-medium tracking-wide uppercase text-xs mb-4">
                Co-Founder
              </p>
              <p className="text-sm text-[#9CA3AF] leading-relaxed italic mb-4 max-w-xs">
                &quot;Precision targeting is the difference between noise and revenue.&quot;
              </p>
              <a
                href="https://www.linkedin.com/in/abdulsaboor2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-xs flex items-center gap-1.5 uppercase tracking-widest"
              >
                LinkedIn →
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Section Divider: Team → FAQ */}
      <div className="section-divider section-divider-dark-to-card" aria-hidden="true" />

      {/* ================================================================== */}
      {/* FAQ SECTION */}
      {/* ================================================================== */}
      <section className="relative py-28 md:py-36 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="QUESTIONS?"
            title={
              <>
                Everything You Need to <br />
                <span className="text-[#FF6B9D]">Know</span>
              </>
            }
            subtitle="Common questions about the 7-day sprint."
          />
          <FAQAccordion />
        </div>
      </section>

      {/* Section Divider: FAQ → CTA */}
      <div className="section-divider section-divider-dark-to-card" aria-hidden="true" />

      {/* ================================================================== */}
      {/* FINAL CTA */}
      {/* ================================================================== */}
      <section
        id="book-call"
        className="relative py-32 md:py-40 overflow-hidden bg-[#0A0E1A]"
      >
        <div
          className="absolute inset-0 bg-gradient-radial from-[#C084FC]/10 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <Badge>
              <span aria-hidden="true">⚡</span> Strict Capacity: 5 Spots /
              Month
            </Badge>

            <h2 className="mt-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-10 font-sans tracking-tight">
              Ready to <span className="text-[#FF6B9D]">Scale?</span>
            </h2>

            <p className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-12 font-light">
              Stop guessing. Start closing.
              <br />
              Your calendar could be full in 7 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
              <PremiumCTA
                href="https://calendly.com/husnainnsaad7/45min"
                size="lg"
                trackingLabel="final_cta"
              >
                Book Your Strategy Call
              </PremiumCTA>
            </div>

            {/* Risk Reversal */}
            <p className="text-sm text-[#9CA3AF]/70 mb-16">
              If we don&apos;t book real calls in 7 days — you pay nothing.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-xs md:text-sm text-white/40 uppercase tracking-widest">
              <span>15-Min Fit Check</span>
              <span aria-hidden="true">•</span>
              <span>Founder Led</span>
              <span aria-hidden="true">•</span>
              <span>No Hard Pitch</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider: CTA → Footer */}
      <div className="section-divider section-divider-card-to-dark" aria-hidden="true" />

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="relative py-20 bg-[#141824] border-t border-white/5 overflow-hidden">
        {/* Mesh gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF6B9D]/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C084FC]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FF6B9D] to-[#C084FC] bg-clip-text text-transparent mb-3 font-sans tracking-tighter">
                OUTLIO.
              </h2>
              <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
                Performance-based outbound for founders scaling past $30K/mo. No retainers. Real results.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">Quick Links</h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Our Process", href: "#how-it-works" },
                  { name: "Book a Call", href: "#book-call" },
                  { name: "Steal Our Systems", href: "/steal-our-systems" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">Connect</h3>
              <div className="flex justify-center md:justify-end items-center gap-4">
                {[
                  { name: "Instagram", url: "https://www.instagram.com/outlio.io/?hl=en", icon: "IG" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/outlio/?viewAsMember=true", icon: "Li" },
                  { name: "X", url: "https://x.com/OutlioLeadGen", icon: "X" }
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#FF6B9D]/40 hover:bg-[#FF6B9D]/10 transition-all duration-300 text-xs font-bold"
                    whileHover={{ y: -3, scale: 1.1 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-white/20 text-xs uppercase tracking-widest">
              © 2026 OUTLIO Inc. All Rights Reserved.
            </span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/30 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              whileHover={{ y: -2 }}
            >
              Back to Top ↑
            </motion.button>
          </div>
        </div>
      </footer>
    </main>
  );
}

// gtag types are in types/global.d.ts
