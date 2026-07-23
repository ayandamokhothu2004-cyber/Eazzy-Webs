import React, { useEffect, useState } from "react";
import { ArrowUp, Mail, Phone, Heart, Sparkles } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  const servicesLinks = [
    { label: "Business Sites", href: "#services" },
    { label: "Restaurants", href: "#services" },
    { label: "Guesthouses", href: "#services" },
    { label: "Portfolio Showcase", href: "#services" },
    { label: "Landing Pages", href: "#services" },
    { label: "SEO Optimizations", href: "#services" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-brand-border py-16 relative overflow-hidden" id="main-footer">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-brand-cyan/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="footer-container">
        {/* Top grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" id="footer-top-grid">
          {/* Brand block */}
          <div className="space-y-5" id="footer-brand-column">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              We create premium digital agency-standard websites that are fast, beautiful, responsive, and mathematically designed to maximize customer conversion rates.
            </p>
            <div className="flex items-center gap-3.5 pt-2" id="footer-social-links">
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-blue border border-white/10 hover:border-brand-blue text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 text-xs font-bold font-mono">
                IG
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-blue border border-white/10 hover:border-brand-blue text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 text-xs font-bold font-mono">
                LN
              </a>
              {/* Dribbble */}
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-blue border border-white/10 hover:border-brand-blue text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 text-xs font-bold font-mono">
                DR
              </a>
              {/* GitHub */}
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-blue border border-white/10 hover:border-brand-blue text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 text-xs font-bold font-mono">
                GH
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div id="footer-quick-links-column">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-brand-cyan transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div id="footer-services-column">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span>Bespoke Formats</span>
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-brand-blue transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support and Info */}
          <div className="space-y-6" id="footer-support-column">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact Channels</h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400 font-sans">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                  <a href="tel:+27622995259" className="hover:text-white transition-colors">062 299 5259</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <a href="mailto:eazzywebs@gmail.com" className="hover:text-white transition-colors">eazzywebs@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div className="pt-2">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Availability Status:</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-400 font-sans">Accepting New Builds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6" id="footer-copyright-row">
          <p className="text-xs text-slate-500 font-sans text-center md:text-left">
            &copy; {currentYear} Eazzy Webs. All rights reserved. Deployed with sub-second React Edge optimization.
          </p>
          
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
            <span>Handcrafted in South Africa with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>for elite brands</span>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-brand-blue hover:bg-brand-cyan text-white shadow-xl shadow-brand-blue/20 hover:shadow-brand-cyan/20 transition-all duration-300 cursor-pointer animate-float-slow group"
          id="scroll-to-top-button"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  );
}
