import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Sparkles, FolderOpen, Tag } from "lucide-react";
import { portfolioData } from "../data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Guesthouse Website", "Restaurant Website", "Business Website", "Portfolio Website"];

  // Category filter logic
  const filteredProjects = activeFilter === "All"
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Decorative gradient blur background globes */}
      <div className="absolute top-1/4 right-5% w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-10% w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="portfolio-section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12" id="portfolio-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Bespoke Digital Works
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-2xl font-sans leading-relaxed">
            A small glimpse inside our design forge. Explore our live interactive demos engineered to engage and convert.
          </p>
        </div>

        {/* Categories Filtering Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-16" id="portfolio-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 font-sans cursor-pointer ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-lg shadow-brand-blue/30 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 hover:border-white/10"
              }`}
            >
              {cat === "All" ? "All Works" : cat.replace(" Website", "")}
            </button>
          ))}
        </div>

        {/* Premium Mansory Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8" 
          id="portfolio-projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={project.id}
                className="relative overflow-hidden glass group hover:border-brand-cyan/30 transition-all duration-500"
                id={`project-card-${project.id}`}
              >
                {/* Image Container with scale and hover zoom */}
                {project.demoUrl && project.demoUrl.startsWith("http") ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden aspect-[16/10] cursor-pointer"
                    id={`project-img-wrapper-${project.id}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Subtle Gradient Shadow Sheet */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80"></div>
                  </a>
                ) : (
                  <div 
                    className="relative overflow-hidden aspect-[16/10]" 
                    id={`project-img-wrapper-${project.id}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Subtle Gradient Shadow Sheet */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80"></div>
                  </div>
                )}

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0B1120]/90 backdrop-blur-md border border-white/10 text-[10px] font-bold text-brand-cyan tracking-widest uppercase shadow">
                  {project.category}
                </div>

                {/* Floating Sale Banner Badge */}
                {project.saleBanner && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 animate-pulse">
                    <Tag className="w-3.5 h-3.5 fill-slate-950/30 shrink-0" />
                    <span>{project.saleBanner}</span>
                  </div>
                )}

                {/* Project Meta Information panel */}
                <div className="p-6 relative" id={`project-meta-${project.id}`}>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="block text-xs font-bold text-slate-400 font-sans tracking-wide">
                      {project.subtitle}
                    </span>
                    {project.price && (
                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.originalPrice && (
                          <span className="text-[11px] text-slate-500 line-through font-semibold">{project.originalPrice}</span>
                        )}
                        <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-black text-xs tracking-tight">
                          {project.price}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {project.demoUrl && project.demoUrl.startsWith("http") ? (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-brand-cyan transition-colors"
                      >
                        <h3 className="inline">{project.title}</h3>
                      </a>
                    ) : (
                      <h3 className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                    )}
                    
                    {/* Live Demo Trigger (Interactive Simulator or Real External Link) */}
                    {project.demoUrl && project.demoUrl.startsWith("http") ? (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue text-slate-300 hover:text-white transition-all duration-300 border border-white/5 hover:border-brand-blue/30 inline-flex items-center justify-center shrink-0"
                        title="Launch Live Site"
                        id={`project-link-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button 
                        onClick={() => {
                          alert(`Launching the Live Demo Simulator for ${project.title}. This simulated sandbox represents a fully deployed agency build.`);
                        }}
                        className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue text-slate-300 hover:text-white transition-all duration-300 border border-white/5 hover:border-brand-blue/30 cursor-pointer shrink-0"
                        title="Launch Demo Sandbox"
                        id={`project-link-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Badges/Tags Row */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5" id={`project-tags-${project.id}`}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-brand-border text-[10px] sm:text-xs text-slate-300 font-sans tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Future Client Projects Placeholder Grid Item */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-12 glass p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-dashed border-brand-blue/30"
          id="portfolio-future-projects-callout"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center shrink-0">
              <FolderOpen className="w-6 h-6 text-brand-cyan" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-1.5">
                Your Business Could Be Our Next Success Story
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-sec max-w-xl font-sans">
                We're currently booking design slots for next month. Let's design and code a breathtaking digital machine engineered around your exact performance targets.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-primary shrink-0"
          >
            Claim Your Design Slot
          </button>
        </motion.div>

      </div>
    </section>
  );
}
