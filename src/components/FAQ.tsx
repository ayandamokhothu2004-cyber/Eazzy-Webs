import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { faqData } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-brand-secondary">
      {/* Visual blur highlights */}
      <div className="absolute top-1/4 right-5% w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-10% w-[320px] h-[320px] rounded-full bg-brand-blue/5 blur-[105px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10" id="faq-section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" id="faq-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Faq Shelf</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-xl font-sans leading-relaxed">
            Have a question regarding how we operate, build ownership, or manage search indexing? We stand for absolute transparency.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4" id="faq-accordion-rows">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="glass rounded-2xl overflow-hidden hover:border-brand-cyan/30 transition-colors"
                id={`faq-row-${faq.id}`}
              >
                {/* Expand Toggle Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer select-none"
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-white pr-2 group-hover:text-brand-cyan transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon Container */}
                  <div 
                    className={`w-8 h-8 rounded-full border border-brand-border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-brand-blue text-white border-brand-blue" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Animated expand/collapse sheet */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA bottom line */}
        <div className="mt-16 text-center" id="faq-cta-footer">
          <p className="text-sm text-slate-400 font-sans">
            Still have an unanswered question about our deployment protocol?{" "}
            <a
              href="#contact"
              className="text-brand-cyan font-bold hover:underline transition-colors"
            >
              Consult directly with our engineers.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
