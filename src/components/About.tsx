import React from "react";
import { motion } from "motion/react";
import { Compass, Cpu, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { timelineData } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass: Compass,
  Cpu: Cpu,
  Award: Award,
  Sparkles: Sparkles
};

export default function About() {
  const agencyStrengths = [
    "No templates - every website is drawn entirely from scratch in our design studio.",
    "Engineered for sub-second speeds to minimize bounce rates and maximize revenue.",
    "Integrated Google Schema (JSON-LD) and on-page metadata optimized for search domination.",
    "End-to-end launch protocols including permanent free SSL configuration and DNS mapping."
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-10% w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/3 left-5% w-[250px] h-[250px] rounded-full bg-brand-cyan/5 blur-[90px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="about-section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" id="about-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Establishing Elite Digital Authority
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-2xl font-sans leading-relaxed">
            At Eazzy Webs, we believe that your website is your most valuable business asset. We construct bespoke, lightning-fast digital solutions that turn generic businesses into trusted industry leaders.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20" id="about-core-grid">
          {/* Narrative Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
            id="about-narrative-text"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Handcrafted Web Experiences Built to Convert
            </h3>
            
            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
              The modern web is flooded with lazy templates and sluggish, bloated websites. We stand in direct opposition to this trend. Our team blends Awwwards-level interface design with high-performance React code.
            </p>
            
            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
              Whether you are showcasing a luxury restaurant menu, securing room bookings for an exclusive guesthouse, or launching a high-converting B2B landing page, we customize every single detail to fit your exact conversion goals.
            </p>

            {/* List of agency strengths */}
            <div className="flex flex-col gap-3.5 mt-2" id="about-strengths-checklist">
              {agencyStrengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200 font-sans leading-snug">{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side: Giant decorative card or mock agency visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="about-visual-showcase"
          >
            {/* The Glass Container representing our workspace */}
            <div className="glass p-8 relative overflow-hidden glow-blue hover:border-brand-cyan/25 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-400 font-mono ml-2">eazzy-philosophy.ts</span>
              </div>

              <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                <p><span className="text-brand-cyan">const</span> <span className="text-indigo-300">agencyGoal</span> = &#123;</p>
                <p className="pl-4">mission: <span className="text-emerald-300">"Exquisite Code & Elite UI/UX"</span>,</p>
                <p className="pl-4">speedTarget: <span className="text-amber-300">"Sub 400ms"</span>,</p>
                <p className="pl-4">responsive: <span className="text-brand-cyan">true</span>,</p>
                <p className="pl-4">seoStructured: <span className="text-brand-cyan">true</span>,</p>
                <p className="pl-4">results: <span className="text-emerald-300">"Maximized client conversion rates"</span></p>
                <p>&#125;;</p>
                <p className="text-slate-500 mt-4">// Every project is a bespoke masterpiece.</p>
                <p className="text-brand-blue">export default agencyGoal;</p>
              </div>
            </div>

            {/* Glowing absolute badge */}
            <div className="absolute -bottom-6 -right-4 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] p-5 rounded-2xl shadow-xl shadow-brand-blue/20 flex flex-col items-center">
              <span className="text-3xl font-black font-display text-white">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">Custom Built</span>
            </div>
          </motion.div>
        </div>

        {/* Vertical Timeline Subsection */}
        <div className="mt-28" id="about-timeline-section">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">Our Evolution Timeline</h3>
            <p className="text-sm sm:text-base text-brand-text-sec max-w-xl mx-auto font-sans">
              Trace our journey from a small web blueprint to an elite performance-design studio.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="relative max-w-4xl mx-auto px-4" id="timeline-cards-track">
            {/* Center Vertical Connecting Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-purple hidden md:block"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const IconComponent = iconMap[item.iconName] || Sparkles;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 relative ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                    id={`timeline-row-${index}`}
                  >
                    {/* Circle Node on Timeline Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-bg border-[3px] border-brand-cyan flex items-center justify-center shadow-lg shadow-brand-cyan/20 z-10 hidden md:flex">
                      <IconComponent className="w-4 h-4 text-brand-cyan" />
                    </div>

                    {/* Timeline Event Card (Left or Right side) */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="glass p-6 relative w-full hover:border-brand-cyan/35 transition-colors group">
                        {/* Dynamic Neon Tag */}
                        <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-xs font-black tracking-wider text-white uppercase shadow-md">
                          {item.year}
                        </div>

                        <div className="flex items-center gap-3 mt-1.5 mb-3 md:hidden">
                          <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-cyan/20 flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-brand-cyan" />
                          </div>
                          <span className="text-sm font-black text-brand-cyan tracking-widest">{item.year}</span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-brand-cyan transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Transparent spacer on other side for grid alignment */}
                    <div className="w-1/2 hidden md:block"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
