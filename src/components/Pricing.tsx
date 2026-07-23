import React from "react";
import { motion } from "motion/react";
import { Check, Sparkles, Plus, HelpCircle, ArrowRight } from "lucide-react";
import { pricingData } from "../data";

export default function Pricing() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const addOns = [
    { name: "Domain Registration Assistance", price: "From R350", desc: "Setting up your custom .co.za or .com domain name." },
    { name: "Hosting Setup", price: "From R500", desc: "Deploying your web engine onto fast, highly reliable servers." },
    { name: "Additional Page", price: "R350 per page", desc: "Expanding your website's footprint with custom crafted sections." },
    { name: "Monthly Website Maintenance", price: "R350/month", desc: "Continuous security updates, weekly backups, and speed health checks." },
    { name: "Google Business Profile Setup", price: "R500", desc: "Optimizing your local SEO visibility to attract nearby leads." },
    { name: "Website Content Assistance", price: "From R500", desc: "Professional copywriting aligned with brand identity." },
    { name: "Logo Design", price: "From R700", desc: "Creating a modern vector identity for your business." },
    { name: "Website Redesign", price: "From R1,500", desc: "Converting slow, legacy sites into responsive masterpieces." }
  ];

  const whyChooseUs = [
    "Modern, Professional Designs",
    "Mobile-Friendly Websites",
    "Fast Turnaround Times",
    "Affordable Pricing",
    "Friendly Support",
    "Websites Built to Help Your Business Grow"
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-5% w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-5% w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="pricing-section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20" id="pricing-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-xs uppercase font-bold tracking-widest text-brand-cyan">Affordable Website Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Our Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-2xl font-sans leading-relaxed">
            Professional websites designed to help your business attract more customers and build trust online.
          </p>
        </div>

        {/* Pricing Cards Grid (6 Packages) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-24" id="pricing-cards-grid">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
              className={`rounded-3xl p-8 relative flex flex-col justify-between border transition-all duration-300 ${
                plan.popular 
                  ? "bg-[#0b1329] border-brand-cyan/40 shadow-xl shadow-brand-cyan/5 lg:scale-[1.02] z-10" 
                  : "bg-slate-950/80 border-slate-800/80 hover:border-slate-700/80"
              }`}
              id={`pricing-card-${plan.id}`}
            >
              {/* Most Popular Banner */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-[10px] font-black tracking-widest uppercase text-white shadow-md">
                  Most Popular
                </div>
              )}

              {/* Package Content */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2">
                  {plan.name}
                </span>
                
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-[10px] text-slate-400 font-sans tracking-wider uppercase ml-1">
                    Once-Off
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Features Checklist */}
                <div className="border-t border-slate-800/80 pt-6 mb-8" id={`pricing-features-${plan.id}`}>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-sans text-slate-300">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card CTA */}
              <div>
                <button
                  onClick={handleScrollToContact}
                  className={`w-full py-3.5 px-6 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    plan.popular
                      ? "bg-brand-cyan text-black hover:bg-white shadow-lg shadow-brand-cyan/10"
                      : "bg-slate-900 text-white border border-slate-800 hover:bg-slate-800 hover:border-slate-700"
                  }`}
                  id={`pricing-action-${plan.id}`}
                >
                  {plan.buttonText}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Optional Add-ons Section */}
        <div className="max-w-4xl mx-auto mb-24" id="optional-addons-container">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-2 tracking-tight">
              Optional Add-Ons & Enhancements
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Tailor your website with specialized features designed for South African businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4" id="addons-grid">
            {addOns.map((addon, index) => (
              <div 
                key={index} 
                className="bg-slate-950/60 border border-slate-900 hover:border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-brand-cyan shrink-0 mt-0.5">
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100 font-sans leading-snug">{addon.name}</h4>
                    <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-relaxed">{addon.desc}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs sm:text-sm font-black font-display text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 px-2.5 py-1 rounded-lg">
                    {addon.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Eazzy Webs? Section */}
        <div className="max-w-4xl mx-auto mb-20 bg-slate-950/40 border border-slate-900/60 rounded-3xl p-8 sm:p-12 relative overflow-hidden" id="why-choose-us-container">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan block mb-2">Eazzy Standard</span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight leading-none">
                Why Choose Eazzy Webs?
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-4 leading-relaxed">
                We design and engineer high-performance web systems from the ground up. No bloated templates, just pristine custom setups designed for results.
              </p>
            </div>

            <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
              {whyChooseUs.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-cyan" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 font-sans leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ready to Grow Banner */}
        <div className="max-w-4xl mx-auto text-center" id="ready-grow-banner">
          <h4 className="text-xl sm:text-2xl font-black font-display text-white mb-6">
            Ready to grow your business online?
          </h4>
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-8 py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider hover:scale-[1.03] transition-all shadow-lg shadow-brand-blue/20"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
