"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What happens in our strategy call?",
        answer: "We'll dive deep into your business model, ideal customer profile, and current outreach challenges. You'll walk away with actionable insights—whether you work with us or not. No pitch, just pure value."
    },
    {
        question: "How much does a 7-day sprint cost?",
        answer: "Our pricing is performance-based. You only pay when we deliver real, qualified calls. We'll discuss exact numbers on our strategy call based on your target market and goals."
    },
    {
        question: "What if we don't book calls?",
        answer: "Simple: you pay nothing. Our guarantee is ironclad—if we don't book real calls with qualified prospects in 7 days, you owe us $0. We take on all the risk."
    },
    {
        question: "How much time do I need to invest?",
        answer: "About 60-90 minutes total. We handle everything—research, copy, outreach, follow-ups. You just show up to the calls we book and close deals."
    },
    {
        question: "Do you work with my industry?",
        answer: "We specialize in B2B service businesses: agencies, consultants, SaaS, and professional services. If you sell to other businesses and have a proven offer, we can likely help."
    },
    {
        question: "What makes OUTLIO different?",
        answer: "Three things: (1) We're performance-based, not retainer-based. (2) We do the work FOR you, not teach you. (3) We've run multiple sprints with proven results. Most 'lead gen' agencies just blast templates—we craft surgical campaigns."
    },
    {
        question: "Can I cancel if I'm not happy?",
        answer: "You don't need to cancel because you only pay for results. If the sprint doesn't work, you don't pay. Period. There are no contracts or commitments beyond the 7-day sprint."
    },
    {
        question: "How do you find my ideal customers?",
        answer: "We use behavioral targeting, not just job titles. We identify prospects showing buying signals—recent hires, funding, tech stack changes, engagement patterns—so we reach them at the right moment."
    },
    {
        question: "Do you use my existing lists?",
        answer: "We can, but we typically build fresh lists using our proprietary research methods. This ensures we're targeting prospects who haven't been hit by every other agency using the same data sources."
    },
    {
        question: "What's included in the full report?",
        answer: "Everything: ICP research, winning message angles, response analytics, conversation transcripts, and a complete playbook you own forever. It's your blueprint for scaling outbound after the sprint."
    }
];

function FAQAccordionItem({ item, isOpen, onToggle }: {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            className={`border rounded-2xl overflow-hidden bg-[#141824]/50 backdrop-blur-sm transition-all duration-300 ${isOpen
                    ? "border-[#FF6B9D]/30 border-l-2 border-l-[#FF6B9D] shadow-[0_0_20px_rgba(255,107,157,0.08)]"
                    : "border-white/10 hover:border-white/20"
                }`}
            initial={false}
            whileHover={{ scale: isOpen ? 1 : 1.01 }}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B9D] focus-visible:ring-inset"
                aria-expanded={isOpen}
            >
                <span className="text-base md:text-lg font-semibold text-white pr-4">
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="flex-shrink-0"
                >
                    <ChevronDown
                        size={20}
                        className="text-[#FF6B9D]"
                        aria-hidden="true"
                    />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-[#9CA3AF] leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
                <FAQAccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}
