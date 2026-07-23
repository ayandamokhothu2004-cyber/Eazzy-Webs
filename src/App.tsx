import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen relative font-sans selection:bg-brand-cyan/30 selection:text-white" id="eazzy-app-root">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Page Sections */}
      <main id="main-content-flow">
        {/* Full-screen Hero Banner */}
        <Hero />

        {/* Narrative & Timeline Subsection */}
        <About />

        {/* Grid of Glassmorphism Services */}
        <Services />

        {/* Masonry Filterable Portfolio */}
        <Portfolio />

        {/* Highlighted Feature Grid */}
        <WhyChooseUs />

        {/* Timeline Process Steps */}
        <Process />

        {/* Three Animated Cards Price Calculator */}
        <Pricing />

        {/* Collapsible FAQ Accordion */}
        <FAQ />

        {/* Validation-based Contact Form & Vector Map */}
        <Contact />
      </main>

      {/* 3. Footer Section */}
      <Footer />
    </div>
  );
}
