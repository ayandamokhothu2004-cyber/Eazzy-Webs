import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  MessageSquare, 
  AlertCircle,
  Clock,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^[0-9+()-\s]{9,18}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (!formData.businessName.trim()) errors.businessName = "Business name is required.";
    if (!formData.message.trim()) errors.message = "Message cannot be empty.";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Trigger submission simulation
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        message: ""
      });
    }, 1800);
  };

  // Channel integrations
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hi Eazzy Webs! I want to consult on building a premium website for my business.");
    window.open(`https://wa.me/27622995259?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:eazzywebs@gmail.com?subject=Premium Website Quote Query";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+27622995259";
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Absolute glow sources */}
      <div className="absolute top-1/4 left-5% w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-10% w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[125px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" id="contact-section-container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" id="contact-header-wrapper">
          <div className="tag flex items-center gap-2 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consultation Forge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6">
            Blueprint Your Next Build
          </h2>
          <p className="text-base sm:text-lg text-brand-text-sec max-w-2xl font-sans leading-relaxed">
            Ready to secure elite digital positioning? Complete the brief details below or reach out directly to coordinate an interactive kickoff slot.
          </p>
        </div>

        {/* Contact Grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch" id="contact-core-grid">
          
          {/* Left Panel: Direct Links, Office details, Vector Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8" id="contact-info-panel">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">Direct Channels</h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Connect directly with our engineering team for instant support or custom quote consultations.
              </p>

              {/* Direct channels grid */}
              <div className="space-y-4" id="direct-contact-triggers">
                {/* 1. Phone Call */}
                <button
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#111827] border border-brand-border hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-bold text-slate-400 font-sans uppercase tracking-wider">Voice Consult</span>
                      <span className="block text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">062 299 5259</span>
                    </div>
                  </div>
                  <Clock className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                </button>

                {/* 2. Email Direct */}
                <button
                  onClick={handleEmailClick}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#111827] border border-brand-border hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-bold text-slate-400 font-sans uppercase tracking-wider">Secure Email</span>
                      <span className="block text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">eazzywebs@gmail.com</span>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan" />
                </button>

                {/* 3. WhatsApp Direct */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-950/10 border border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-950/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-bold text-emerald-500 font-sans uppercase tracking-wider">Fast WhatsApp</span>
                      <span className="block text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">Launch Live Chat</span>
                    </div>
                  </div>
                  <Clock className="w-4 h-4 text-emerald-500" />
                </button>
              </div>
            </div>

            {/* Google Maps Premium Placeholder Visualizer */}
            <div className="glass rounded-2xl p-6 relative overflow-hidden" id="office-location-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 animate-bounce" />
                <span className="text-xs font-bold text-slate-200 tracking-wider uppercase font-sans">Eazzy HQ — Colesberg</span>
              </div>

              {/* Handcrafted vector grid to represent premium dark map styling */}
              <div 
                className="relative h-44 rounded-xl border border-white/5 bg-slate-950 overflow-hidden select-none flex items-center justify-center group"
                id="vector-map-sandbox"
              >
                {/* Dynamic radial grid map background */}
                <div className="absolute inset-0 grid-pattern opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
                
                {/* Coordinates/Streets simulated with subtle line paths */}
                <svg className="absolute inset-0 w-full h-full stroke-slate-800/60 stroke-1 fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="10" y1="0" x2="10" y2="100" />
                  <line x1="30" y1="0" x2="30" y2="100" />
                  <line x1="55" y1="0" x2="55" y2="100" />
                  <line x1="85" y1="0" x2="85" y2="100" />
                  <line x1="0" y1="15" x2="100" y2="15" strokeWidth="1.5" />
                  <line x1="0" y1="45" x2="100" y2="45" />
                  <line x1="0" y1="75" x2="100" y2="75" strokeWidth="1.5" />
                </svg>

                {/* Pulsing neon point marker indicating Eazzy HQ */}
                <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full bg-brand-cyan/20 animate-ping"></div>
                  <div className="absolute w-5 h-5 rounded-full bg-brand-blue/40 animate-pulse"></div>
                  <div className="relative w-3.5 h-3.5 rounded-full bg-brand-cyan border border-white flex items-center justify-center shadow-lg"></div>
                  
                  {/* Floating tooltip */}
                  <div className="absolute bottom-6 px-2.5 py-1 rounded bg-[#0B1120] border border-brand-cyan/30 shadow-md text-[9px] font-black tracking-widest text-white uppercase whitespace-nowrap">
                    Eazzy Webs Studio
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 text-[8px] font-mono tracking-wider text-slate-400">
                  -30.7200° S, 25.0972° E
                </div>
              </div>

              <p className="text-[11px] text-slate-400 font-sans leading-relaxed mt-4">
                Our design forge resides inside Colesberg, Northern Cape, South Africa, serving ambitious brands across South Africa, Europe, and the US.
              </p>
            </div>

          </div>

          {/* Right Panel: Interactive Validation Contact Form / Success state */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="glass rounded-3xl p-8 hover:border-brand-cyan/20 transition-all duration-500 relative h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                    id="client-booking-form"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">Kickoff Inquiry</h3>
                      <p className="text-xs sm:text-sm text-brand-text-sec font-sans leading-relaxed">
                        Submit your blueprint details. We typically return initial layouts and cost breakdowns in less than 12 hours.
                      </p>
                    </div>

                    {/* Fields Block */}
                    <div className="grid sm:grid-cols-2 gap-5" id="form-fields-grid">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans">Full Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3.5 rounded-lg bg-slate-950/45 border text-white text-sm font-sans transition-all focus:outline-none focus:ring-1 ${
                              formErrors.name 
                                ? "border-red-500/45 focus:border-red-500 focus:ring-red-500" 
                                : "border-white/10 hover:border-brand-cyan/35 focus:border-brand-cyan focus:ring-brand-cyan"
                            }`}
                            placeholder="John Doe"
                          />
                        </div>
                        {formErrors.name && (
                          <div className="flex items-center gap-1 text-red-400 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span className="text-[11px] font-sans font-semibold">{formErrors.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans">Email Address *</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3.5 rounded-lg bg-slate-950/45 border text-white text-sm font-sans transition-all focus:outline-none focus:ring-1 ${
                              formErrors.email 
                                ? "border-red-500/45 focus:border-red-500 focus:ring-red-500" 
                                : "border-white/10 hover:border-brand-cyan/35 focus:border-brand-cyan focus:ring-brand-cyan"
                            }`}
                            placeholder="john@example.com"
                          />
                        </div>
                        {formErrors.email && (
                          <div className="flex items-center gap-1 text-red-400 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span className="text-[11px] font-sans font-semibold">{formErrors.email}</span>
                          </div>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans">Phone Number *</label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3.5 rounded-lg bg-slate-950/45 border text-white text-sm font-sans transition-all focus:outline-none focus:ring-1 ${
                              formErrors.phone 
                                ? "border-red-500/45 focus:border-red-500 focus:ring-red-500" 
                                : "border-white/10 hover:border-brand-cyan/35 focus:border-brand-cyan focus:ring-brand-cyan"
                            }`}
                            placeholder="+27 82 123 4567"
                          />
                        </div>
                        {formErrors.phone && (
                          <div className="flex items-center gap-1 text-red-400 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span className="text-[11px] font-sans font-semibold">{formErrors.phone}</span>
                          </div>
                        )}
                      </div>

                      {/* Business Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="businessName" className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans">Business Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3.5 rounded-lg bg-slate-950/45 border text-white text-sm font-sans transition-all focus:outline-none focus:ring-1 ${
                              formErrors.businessName 
                                ? "border-red-500/45 focus:border-red-500 focus:ring-red-500" 
                                : "border-white/10 hover:border-brand-cyan/35 focus:border-brand-cyan focus:ring-brand-cyan"
                            }`}
                            placeholder="Acme Retreats Pty Ltd"
                          />
                        </div>
                        {formErrors.businessName && (
                          <div className="flex items-center gap-1 text-red-400 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span className="text-[11px] font-sans font-semibold">{formErrors.businessName}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans">Project Blueprint / Message *</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3.5 rounded-lg bg-slate-950/45 border text-white text-sm font-sans transition-all focus:outline-none focus:ring-1 resize-none ${
                            formErrors.message 
                              ? "border-red-500/45 focus:border-red-500 focus:ring-red-500" 
                              : "border-white/10 hover:border-brand-cyan/35 focus:border-brand-cyan focus:ring-brand-cyan"
                          }`}
                          placeholder="Briefly describe your objectives (e.g. guesthouse with rate calendar, luxury fine-dining table booking system, corporate presence...)"
                        />
                      </div>
                      {formErrors.message && (
                        <div className="flex items-center gap-1 text-red-400 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[11px] font-sans font-semibold">{formErrors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Form submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Dispatching Blueprint...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          <span>Submit Project Scope</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center py-10 flex flex-col items-center gap-5"
                    id="success-alert-container"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-bounce">
                      <CheckCircle className="w-9 h-9" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                        Scope Dispatched Successfully
                      </h3>
                      <p className="text-sm sm:text-base text-emerald-400 font-semibold font-sans">
                        Reference Number: #EW-{Math.floor(1000 + Math.random() * 9000)}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
                        Thank you! Your blueprint parameters have successfully bypassed local staging and reached our core lead developer. We will analyze your specification and reach out in less than 12 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-wider uppercase border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
