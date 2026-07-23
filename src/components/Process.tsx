import React from "react";
import { motion } from "motion/react";
import { 
  Compass, 
  Figma, 
  Code, 
  Eye, 
  Search, 
  Rocket, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { processStepsData } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass: Compass,
  Figma: Figma,
  Code: Code,
  Eye: Eye,
  Search: Search,
  Rocket: Rocket
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/4 right-5% w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-10% w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="process-section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" id="process-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Our Structured Process
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-2xl font-sans leading-relaxed">
            From the initial strategy draft to search optimization and DNS mapping, we proceed with absolute clarity and precision.
          </p>
        </div>

        {/* Process Map Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative" id="process-cards-grid">
          {processStepsData.map((step, index) => {
            const IconComponent = iconMap[step.iconName] || Compass;
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass rounded-2xl p-7 hover:border-brand-cyan/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                id={`process-card-${step.step}`}
              >
                {/* Connector lines visual (Desktop only) */}
                {index < 5 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-brand-cyan to-transparent pointer-events-none hidden lg:block z-10 opacity-40 group-hover:opacity-80 transition-opacity"></div>
                )}

                {/* Card Top: Number badge, Icon, Duration */}
                <div>
                  <div className="flex items-center justify-between mb-6" id={`process-top-${step.step}`}>
                    {/* Big glowing step identifier */}
                    <span className="text-4xl sm:text-5xl font-black font-display text-slate-700/50 group-hover:text-brand-cyan/20 transition-colors duration-300">
                      {step.step}
                    </span>

                    {/* Frame Icon */}
                    <div className="w-11 h-11 rounded-lg bg-slate-900 border border-brand-border flex items-center justify-center group-hover:border-brand-cyan group-hover:bg-brand-blue/10 transition-colors">
                      <IconComponent className="w-5.5 h-5.5 text-brand-cyan" />
                    </div>
                  </div>

                  {/* Title & Duration Badge */}
                  <div className="flex items-center gap-2.5 mb-3" id={`process-title-row-${step.step}`}>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-brand-cyan transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Duration Badge / Pill */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between" id={`process-footer-${step.step}`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Duration:</span>
                  <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-brand-border text-[11px] font-semibold text-brand-cyan font-sans tracking-wide">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
