import React from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  Smartphone, 
  TrendingUp, 
  DollarSign, 
  Palette, 
  Shield, 
  Cloud, 
  UserCheck, 
  CheckCircle 
} from "lucide-react";
import { featuresData } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap: Zap,
  Smartphone: Smartphone,
  TrendingUp: TrendingUp,
  DollarSign: DollarSign,
  Palette: Palette,
  Shield: Shield,
  Cloud: Cloud,
  UserCheck: UserCheck
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-brand-secondary">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-10% w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-5% w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[125px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="why-section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" id="why-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            The Eazzy Webs Standard
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-2xl font-sans leading-relaxed">
            We operate at the convergence of breathtaking aesthetics and peak technical performance. Here is how we build value into your digital blueprint.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="why-cards-grid">
          {featuresData.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || CheckCircle;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-brand-cyan/30 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all duration-300 relative overflow-hidden group"
                id={`feature-card-${feature.id}`}
              >
                {/* Micro corner hover highlight */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-cyan/15 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Animated Icon Frame */}
                <div className="w-11 h-11 rounded-lg bg-[#0B1120]/95 border border-brand-border flex items-center justify-center mb-5 group-hover:border-brand-cyan group-hover:bg-brand-cyan/10 transition-colors duration-300">
                  <IconComponent className="w-5.5 h-5.5 text-brand-cyan group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Feature Title */}
                <h3 className="text-lg font-bold font-display text-white mb-2.5 group-hover:text-brand-cyan transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
