import { Stat, TimelineCard, ServiceItem, PortfolioItem, PricingCard, FeatureCard, ProcessStep, FAQItem } from "./types";

export const statsData: Stat[] = [
  {
    id: "stat-1",
    value: "120+",
    label: "Projects Built",
    description: "Premium websites launched globally.",
    iconName: "Globe"
  },
  {
    id: "stat-2",
    value: "100%",
    label: "Fast Loading",
    description: "Optimized for sub-second page speeds.",
    iconName: "Zap"
  },
  {
    id: "stat-3",
    value: "Fluid",
    label: "Responsive Design",
    description: "Pixel-perfect on all screen sizes.",
    iconName: "Smartphone"
  },
  {
    id: "stat-4",
    value: "99.8%",
    label: "Customer Satisfaction",
    description: "Rating based on post-launch surveys.",
    iconName: "Heart"
  }
];

export const timelineData: TimelineCard[] = [
  {
    id: "time-1",
    year: "2022",
    title: "Agency Genesis",
    description: "Eazzy Webs was founded with a single mission: to banish generic, template-cloned websites and bring hand-crafted, high-converting digital art to ambitious local and global brands.",
    iconName: "Compass"
  },
  {
    id: "time-2",
    year: "2023",
    title: "Performance Breakout",
    description: "Recognizing that loading speeds make or break digital businesses, we pioneered our lightning-fast, custom headless React framework, resulting in up to 300% conversion boosts for our clients.",
    iconName: "Cpu"
  },
  {
    id: "time-3",
    year: "2024",
    title: "Going Premium & Nationwide",
    description: "Expanded our team of visual storytellers and interactive designers, taking on luxury restaurant projects, high-end guesthouses, and complex fintech platforms across South Africa and overseas.",
    iconName: "Award"
  },
  {
    id: "time-4",
    year: "Present",
    title: "Award-Winning Standard",
    description: "Today, we operate as a highly agile, premium studio. We blend cutting-edge WebGL, framer-motion micro-interactions, and flawless local search optimization (SEO) into every single product we release.",
    iconName: "Sparkles"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Business Websites",
    description: "High-impact custom corporate platforms that establish elite digital authority, convey clear trust, and capture high-intent business leads.",
    iconName: "Briefcase",
    features: ["Bespoke Visual Narrative", "Lead Capture funnels", "CRM Integration", "Industry-specific Features"]
  },
  {
    id: "srv-2",
    title: "Restaurant Websites",
    description: "Immersive dining showrooms with editorial menus, integrated reservation platforms, high-definition culinary galleries, and online ordering.",
    iconName: "Utensils",
    features: ["Digital Interactive Menus", "Dine-In Reservation Systems", "Visual Gallery Showcases", "Local SEO Optimization"]
  },
  {
    id: "srv-3",
    title: "Guesthouse Websites",
    description: "Breathtaking travel and hospitality showcases featuring room selectors, dynamic booking management, interactive local area guides, and guest reviews.",
    iconName: "Bed",
    features: ["Immersive Room Sliders", "Direct Booking Integrations", "Rates & Availability Calendars", "Local Activity Hotspot Maps"]
  },
  {
    id: "srv-4",
    title: "Portfolio Websites",
    description: "Dynamic visual resumes and creative playgrounds built for designers, artists, and architects who need to stand out with Awwwards-standard animations.",
    iconName: "FolderHeart",
    features: ["Bold Display Typography", "Parallax Project Showcases", "Custom Page Transitions", "Fluid Asset Galleries"]
  },
  {
    id: "srv-5",
    title: "Landing Pages",
    description: "Single-view conversion engines optimized with mathematical visual paths, psychological copy hooks, and lightning speed to maximize advertising ROI.",
    iconName: "Target",
    features: ["A/B Tested Wireframes", "Sub-second Page Speeds", "Strong Call-to-Actions", "Analytics & Event Tracking"]
  },
  {
    id: "srv-6",
    title: "Website Redesign",
    description: "Converting outdated, lagging, or slow legacy sites into state-of-the-art interactive masterpieces that perform flawlessly and look stunning.",
    iconName: "RefreshCw",
    features: ["Preserved SEO Link Equity", "Upgraded UX Architecture", "Tailwind Speed Optimization", "Modern Branding Infusion"]
  },
  {
    id: "srv-7",
    title: "Website Maintenance",
    description: "Stress-free website protection featuring continuous security monitoring, automated off-site backups, immediate bug fixes, and swift content changes.",
    iconName: "ShieldCheck",
    features: ["24/7 Security Auditing", "Weekly Backups & Restores", "Dedicated Developer Hours", "Page Speed Monitoring"]
  },
  {
    id: "srv-8",
    title: "SEO Optimization",
    description: "Dominating organic search. We configure rich schema microdata, content architecture, keyword funnels, and performance scores for ultimate visibility.",
    iconName: "TrendingUp",
    features: ["Rich Schema & JSON-LD", "Core Web Vitals Pass", "Competitor Search Analysis", "XML Sitemap Configuration"]
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Karoo Haven Luxury Retreat",
    subtitle: "Direct Booking Guesthouse Experience",
    category: "Guesthouse Website",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://karoo-haven-demo.netlify.app/",
    tags: ["Direct Booking System", "Tailwind CSS", "Motion", "SEO Pack"]
  },
  {
    id: "port-2",
    title: "L'ÉTOILE Karoo Restaurant",
    subtitle: "Fine Dining & Local Culinary Experience",
    category: "Restaurant Website",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://elitekarooresturant.netlify.app/",
    tags: ["Digital Menu", "Table Booking", "WhatsApp Ordering"]
  },
  {
    id: "port-3",
    title: "Apex Horizon Partners",
    subtitle: "B2B Financial Advisory Showcase",
    category: "Business Website",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "#",
    tags: ["Corporate Brand", "Lead Funnel", "Interactive Stats"]
  },
  {
    id: "port-4",
    title: "Sora Architects & Designers",
    subtitle: "Ultra-Minimalist Creative Showcase",
    category: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "#",
    tags: ["Awwwards Design", "Fluid Layouts", "Zero Cumulative Shift"]
  }
];

export const pricingData: PricingCard[] = [
  {
    id: "price-1",
    name: "Starter Website",
    price: "R1,499",
    period: "one-time",
    description: "Perfect for startups and small businesses.",
    features: [
      { text: "1 Professional Landing Page", included: true },
      { text: "Mobile Friendly Design", included: true },
      { text: "Contact Form", included: true },
      { text: "WhatsApp Button", included: true },
      { text: "Google Maps Integration", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "1 Revision", included: true },
      { text: "Delivery in 3–5 Days", included: true }
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    id: "price-2",
    name: "Business Website",
    price: "R2,999",
    period: "one-time",
    description: "Ideal for established businesses.",
    features: [
      { text: "Up to 5 Custom Pages", included: true },
      { text: "Responsive Design", included: true },
      { text: "Contact Form", included: true },
      { text: "WhatsApp Integration", included: true },
      { text: "Image Gallery", included: true },
      { text: "Google Maps", included: true },
      { text: "Basic SEO", included: true },
      { text: "Social Media Links", included: true },
      { text: "2 Revisions", included: true },
      { text: "Delivery in 5–7 Days", included: true }
    ],
    popular: true,
    buttonText: "Choose Business"
  },
  {
    id: "price-3",
    name: "Premium Website",
    price: "R4,999",
    period: "one-time",
    description: "For businesses that want a premium online presence.",
    features: [
      { text: "Up to 10 Custom Pages", included: true },
      { text: "Premium Modern Design", included: true },
      { text: "Animations", included: true },
      { text: "Gallery", included: true },
      { text: "Booking or Enquiry Forms", included: true },
      { text: "WhatsApp Integration", included: true },
      { text: "Google Maps", included: true },
      { text: "Advanced SEO Basics", included: true },
      { text: "Speed Optimisation", included: true },
      { text: "3 Revisions", included: true },
      { text: "Delivery in 7–10 Days", included: true }
    ],
    popular: false,
    buttonText: "Choose Premium"
  },
  {
    id: "price-4",
    name: "Restaurant Website",
    price: "From R5,999",
    period: "one-time",
    description: "Everything a restaurant needs online.",
    features: [
      { text: "Digital Menu", included: true },
      { text: "Food Gallery", included: true },
      { text: "Contact Details", included: true },
      { text: "Google Maps", included: true },
      { text: "WhatsApp Ordering", included: true },
      { text: "Reservation Form", included: true },
      { text: "Social Media Links", included: true },
      { text: "Mobile Friendly", included: true },
      { text: "Premium Design", included: true }
    ],
    popular: false,
    buttonText: "Request Quote"
  },
  {
    id: "price-5",
    name: "Guesthouse Website",
    price: "From R5,999",
    period: "one-time",
    description: "Designed to increase bookings.",
    features: [
      { text: "Room Gallery", included: true },
      { text: "Booking Enquiry Form", included: true },
      { text: "Amenities Section", included: true },
      { text: "Rates Page", included: true },
      { text: "Location Map", included: true },
      { text: "Contact Form", included: true },
      { text: "WhatsApp Button", included: true },
      { text: "Mobile Friendly", included: true },
      { text: "Premium Design", included: true }
    ],
    popular: false,
    buttonText: "Request Quote"
  },
  {
    id: "price-6",
    name: "Online Store",
    price: "From R7,999",
    period: "one-time",
    description: "Start selling online.",
    features: [
      { text: "Product Catalogue", included: true },
      { text: "Shopping Cart", included: true },
      { text: "Secure Checkout", included: true },
      { text: "Payment Gateway Integration", included: true },
      { text: "Order Management", included: true },
      { text: "Mobile Friendly", included: true },
      { text: "SEO Ready", included: true },
      { text: "Training After Delivery", included: true }
    ],
    popular: false,
    buttonText: "Request Quote"
  }
];

export const featuresData: FeatureCard[] = [
  {
    id: "feat-1",
    title: "Fast Loading",
    description: "Every microsecond costs revenue. We construct optimized codebases to render under 400ms, boasting 100/100 Lighthouse scores.",
    iconName: "Zap"
  },
  {
    id: "feat-2",
    title: "Responsive Design",
    description: "From massive 4K monitors to compact mobile screens, your brand will remain flawless, fluid, and easily navigable for every user.",
    iconName: "Smartphone"
  },
  {
    id: "feat-3",
    title: "SEO Ready",
    description: "We configure deep rich snippet schemas, structured JSON-LD data, meta targets, and semantic markup to make Google fall in love with you.",
    iconName: "TrendingUp"
  },
  {
    id: "feat-4",
    title: "Affordable",
    description: "Get world-class, premium agency quality without paying for bloated corporate overhead. Transparent pricing, maximum return on investment.",
    iconName: "DollarSign"
  },
  {
    id: "feat-5",
    title: "Modern Design",
    description: "No templates. No cloning. Every layout is built completely from scratch, featuring gorgeous typography and elite contemporary UX.",
    iconName: "Palette"
  },
  {
    id: "feat-6",
    title: "Secure & Resilient",
    description: "Built with industry-hardened guidelines, static file safety, secure APIs, and integrated DDoS mitigations to keep hackers at bay.",
    iconName: "Shield"
  },
  {
    id: "feat-7",
    title: "Reliable Architecture",
    description: "Deployed on redundant, global edge-delivery servers. High availability means your website never blinks, maintaining 99.9% uptime.",
    iconName: "Cloud"
  },
  {
    id: "feat-8",
    title: "Professional Partners",
    description: "We work directly beside you. From collaborative blueprint planning to the final launch and monthly maintenance, we handle the technology.",
    iconName: "UserCheck"
  }
];

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    description: "We analyze your audience, blueprint your competition, and design an exhaustive, strategic structure for your website.",
    duration: "1-2 Days",
    iconName: "Compass"
  },
  {
    step: "02",
    title: "UI/UX High Fidelity",
    description: "We design a breathtaking visual story, establishing custom typography scales, high-end layouts, and consistent style systems.",
    duration: "4-6 Days",
    iconName: "Figma"
  },
  {
    step: "03",
    title: "Interactive Development",
    description: "Our developers transform mockups into pixel-perfect, clean Tailwind code, integrating premium interactive states and speed optimizations.",
    duration: "7-10 Days",
    iconName: "Code"
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Exhaustive audits are conducted across various viewports, devices, and browsers. We refine accessibility, forms, and speeds.",
    duration: "2-3 Days",
    iconName: "Eye"
  },
  {
    step: "05",
    title: "SEO Schema Injection",
    description: "We inject Google-friendly JSON-LD schemas, sitemaps, robots configurations, meta headings, and speed-load tags into the backend.",
    duration: "1-2 Days",
    iconName: "Search"
  },
  {
    step: "06",
    title: "Elite Launch",
    description: "We configure safe DNS routing, provision permanent SSL certificates, and submit your new sitemap directly to search engines.",
    duration: "1 Day",
    iconName: "Rocket"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does a premium build typically take?",
    answer: "A Starter showcase usually launches in 5 to 7 days. A comprehensive multi-page Business build takes 12 to 18 days, while highly custom Premium booking, directory, or E-commerce platforms range from 3 to 4 weeks. We pride ourselves on rapid execution without ever cutting corners.",
    category: "Process"
  },
  {
    id: "faq-2",
    question: "Do I have complete ownership of the final website?",
    answer: "Absolutely. Once the project balance is settled, 100% of the copyrights, design properties, and code files belong to you. We can host the site on our ultra-fast servers for a small fee, or package and deploy it directly onto your hosting provider of choice.",
    category: "Ownership"
  },
  {
    id: "faq-3",
    question: "Will my website display beautifully on mobile and tablets?",
    answer: "Yes. Every line of code is written with an advanced fluid layout framework. Your text, image arrays, and reservation cards will gracefully re-align and scale, providing an elite experience on both 4K monitors and mobile screens.",
    category: "Design"
  },
  {
    id: "faq-4",
    question: "What is website maintenance and why is it crucial?",
    answer: "Websites are active digital machines. Maintenance ensures that security certificates stay active, core packages and APIs don't break, database records remain protected, and your server remains optimized. We offer dedicated packages to let you focus purely on running your business.",
    category: "Support"
  },
  {
    id: "faq-5",
    question: "How will Eazzy Webs help my site rank on Google (SEO)?",
    answer: "Every single project is built with Google search optimization embedded into its foundation. We configure clean semantic HTML structures, optimize image payload sizes, declare structured rich-schema JSON data, and configure sitemaps so that spiders can index your content instantly.",
    category: "Marketing"
  },
  {
    id: "faq-6",
    question: "What is your project payment structure?",
    answer: "We typically operate on a standard 50% upfront retainer to block our development schedule. The remaining 50% is payable strictly after final quality reviews are completed and right before your premium website goes live.",
    category: "Pricing"
  }
];
