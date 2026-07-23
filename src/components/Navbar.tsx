import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scrolling to trigger glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  // Direct actions
  const handleQuoteClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    // Open standard WhatsApp link with a custom message
    const message = encodeURIComponent("Hi Eazzy Webs! I visited your website and would love to get a quote for a premium website build.");
    window.open(`https://wa.me/27622995259?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#0B1120]/80 backdrop-blur-md border-b border-brand-border py-4" 
            : "bg-transparent py-6"
        }`}
        id="main-navbar-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" id="navbar-container">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center" aria-label="Eazzy Webs Home">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Link Array */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-navigation-menu">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text-sec hover:text-white transition-colors duration-300 font-sans tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4" id="desktop-action-buttons">
            {/* WhatsApp Contact */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 text-sm font-semibold tracking-wide transition-all duration-300"
              id="whatsapp-nav-button"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            {/* Get a Quote Action */}
            <button
              onClick={handleQuoteClick}
              className="btn-primary text-sm py-2 px-5 shadow-sm"
              id="quote-nav-button"
            >
              Get a Quote
            </button>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <div className="lg:hidden flex items-center gap-3" id="mobile-navigation-toggle">
            {/* Quick mobile WhatsApp link */}
            <button
              onClick={handleWhatsAppClick}
              className="p-2 rounded-lg bg-emerald-600/10 text-emerald-400 border border-emerald-500/20"
              aria-label="WhatsApp Quick Contact"
            >
              <Phone className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-brand-border text-brand-text-sec hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[73px] z-40 bg-[#0B1120]/95 backdrop-blur-lg border-b border-brand-border lg:hidden"
            id="mobile-navigation-drawer"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-semibold text-brand-text-sec hover:text-white transition-colors py-1.5 border-b border-white/5 font-sans"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Quick Actions inside Drawer */}
              <div className="flex flex-col gap-4 mt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Connect via WhatsApp</span>
                </button>

                <button
                  onClick={handleQuoteClick}
                  className="btn-primary w-full py-3"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
