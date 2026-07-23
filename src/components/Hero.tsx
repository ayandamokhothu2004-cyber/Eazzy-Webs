import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { statsData } from "../data";

export default function Hero() {
  const typingWords = [
    "Websites",
    "Landing Pages",
    "Business Websites",
    "Restaurant Websites",
    "Guesthouse Websites",
    "Online Stores"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // High fidelity typing animation logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullWord = typingWords[currentWordIndex];

    if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setDisplayedText(currentFullWord.substring(0, displayedText.length - 1));
      }, 50);
    } else {
      // Adding character by character
      timer = setTimeout(() => {
        setDisplayedText(currentFullWord.substring(0, displayedText.length + 1));
      }, 100);
    }

    // Word is fully typed out, pause then start deleting
    if (!isDeleting && displayedText === currentFullWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Wait 2s before starting deletion
    }

    // Word is fully deleted, move to the next word
    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % typingWords.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  const handleScrollToSection = (elementId: string) => {
    const section = document.getElementById(elementId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden grid-pattern"
    >
      {/* 1. Animated glowing backgrounds and light effects */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/15 blur-[120px] animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/15 blur-[140px] animate-pulse-slow -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] rounded-full bg-brand-purple/5 blur-[150px] -z-10"></div>

      {/* Floating abstract canvas particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" id="particle-overlay">
        <div className="absolute top-1/3 left-10% w-2 h-2 rounded-full bg-brand-cyan opacity-40 animate-float"></div>
        <div className="absolute top-1/5 right-15% w-3 h-3 rounded-full bg-brand-blue opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-20% w-2.5 h-2.5 rounded-full bg-brand-purple opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-10% w-1.5 h-1.5 rounded-full bg-white opacity-40 animate-float"></div>
      </div>

      {/* Subtle diagonal moving light strip across background */}
      <div className="absolute -inset-[10px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-[#0B1120] to-[#0B1120] -z-20"></div>

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center mt-8 relative z-10">
        
        {/* Modern Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tag inline-flex items-center gap-2 mb-6 shadow-lg shadow-brand-purple/5"
          id="hero-eyebrow"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span>Awwwards-Standard Digital Studio</span>
        </motion.div>

        {/* Headline with typing animated segment */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.1] text-white max-w-4xl"
          id="hero-main-title"
        >
          Modern Websites That Help <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
            Businesses Grow.
          </span>
        </motion.h1>

        {/* Typing dynamic placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-12 sm:h-14 md:h-16 flex items-center justify-center mt-3 mb-6"
          id="hero-typing-animation"
        >
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-sans text-slate-300">
            We build premium{" "}
            <span className="text-brand-cyan typing-cursor pr-1 typewriter-text">
              {displayedText}
            </span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-brand-text-sec max-w-2xl font-sans font-light leading-relaxed mb-10"
          id="hero-subtitle"
        >
          We create premium websites that are fast, beautiful, mobile-friendly, and meticulously designed to convert visitors into lifelong customers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          id="hero-cta-group"
        >
          {/* Main Action: Free Quote */}
          <button
            onClick={() => handleScrollToSection("portfolio")}
            className="btn-primary w-full sm:w-auto"
            id="hero-cta-portfolio"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Action: Portfolio */}
          <button
            onClick={() => handleScrollToSection("contact")}
            className="btn-outline w-full sm:w-auto"
            id="hero-cta-quote"
          >
            Get Free Quote
          </button>
        </motion.div>

        {/* 2. Interactive Premium Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="glass w-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-20 relative overflow-hidden"
          id="hero-stats-panel"
        >
          {statsData.map((stat, i) => (
            <React.Fragment key={stat.id}>
              <div 
                className="flex-1 p-5 text-center group hover:scale-[1.02] transition-all duration-300 relative z-10"
                id={`stat-card-${i}`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-brand-cyan group-hover:text-cyan-300 transition-colors mb-1.5">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-1 font-sans">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                  {stat.description}
                </div>
              </div>
              {i < statsData.length - 1 && (
                <div className="hidden lg:block w-[1px] bg-white/10 my-4 shrink-0 self-stretch" key={`divider-${i}`}></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
          onClick={() => handleScrollToSection("about")}
          className="mt-16 cursor-pointer text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-1.5"
          id="hero-scroll-chevron"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase font-sans">Discover More</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
}
