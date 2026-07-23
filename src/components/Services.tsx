import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  Utensils, 
  Bed, 
  Palette, 
  Target, 
  RefreshCw, 
  ShieldCheck, 
  TrendingUp, 
  Check, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { servicesData } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase: Briefcase,
  Utensils: Utensils,
  Bed: Bed,
  FolderHeart: Palette, // fallback to Palette for guaranteed compilation
  Target: Target,
  RefreshCw: RefreshCw,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp
};

export default function Services() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      sectionScroll(contactSection);
    }
  };

  const sectionScroll = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-secondary">
      {/* Visual Accents */}
      <div className="absolute top-10% left-10% w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10% right-5% w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="services-section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" id="services-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Premium Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Bespoke Digital Formats
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-2xl font-sans leading-relaxed">
            We don't do mass-produced templates. We craft high-end web engines packed with custom layouts, optimal search rankings, and lightning load speeds.
          </p>
        </div>

        {/* Services Grid with Scroll-triggered Stagger Animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="services-cards-grid">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Briefcase;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="glass rounded-2xl p-6 flex flex-col justify-between group hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all duration-300 relative overflow-hidden"
                id={`service-card-${service.id}`}
              >
                {/* Micro hover decorative bar */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Dynamic Custom Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-brand-border flex items-center justify-center mb-6 group-hover:border-brand-cyan group-hover:bg-brand-blue/10 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-brand-cyan group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Micro Features bullet list inside the card */}
                <div className="border-t border-white/5 pt-4 mt-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Deliverables:
                  </span>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-cyan mt-0.5 shrink-0" />
                        <span className="text-[11px] text-slate-200 font-sans leading-none">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link to Consult */}
                  <button
                    onClick={handleScrollToContact}
                    className="flex items-center gap-1.5 text-xs font-bold text-brand-cyan group-hover:text-white transition-colors duration-300 mt-2 hover:underline cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA Footer Section */}
        <div className="mt-16 text-center" id="services-cta-banner">
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Have a custom requirement or an advanced application blueprint?{" "}
            <button
              onClick={handleScrollToContact}
              className="text-brand-cyan font-bold hover:underline transition-colors cursor-pointer"
            >
              Let's craft it together.
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
