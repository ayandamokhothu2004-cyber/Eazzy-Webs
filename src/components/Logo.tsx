import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export default function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  // Determine pixel sizes based on the size prop
  const dimensions = {
    sm: { svg: 36, text: "text-base" },
    md: { svg: 48, text: "text-lg" },
    lg: { svg: 80, text: "text-2xl" },
    xl: { svg: 160, text: "text-3xl" },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`} id="eazzy-logo-container">
      {/* Circle Emblem representing the user-provided logo */}
      <div 
        className="relative flex items-center justify-center rounded-full transition-all duration-500"
        style={{
          width: dimensions.svg,
          height: dimensions.svg,
        }}
        id="logo-circle-wrapper"
      >
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Blue/Cyan Glow Ring Gradient */}
            <linearGradient id="glowRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B66EF" />
              <stop offset="50%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#0B66EF" />
            </linearGradient>

            {/* Monogram Gradient for "w" and Swoosh */}
            <linearGradient id="blueElementGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B66EF" />
              <stop offset="100%" stopColor="#0052D4" />
            </linearGradient>

            {/* Glow filter for the outer ring */}
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Black circular background */}
          <circle cx="100" cy="100" r="98" fill="#000000" />

          {/* Glowing outer blue ring */}
          <circle cx="100" cy="100" r="94" stroke="url(#glowRingGrad)" strokeWidth="4" fill="none" opacity="0.65" filter="url(#glowEffect)" />
          <circle cx="100" cy="100" r="94" stroke="url(#glowRingGrad)" strokeWidth="2.5" fill="none" />

          {/* Monogram Group: "E", "w", Swoosh, and Code Tag </ > */}
          <g transform="translate(10, -5) scale(0.82)">
            {/* Skewed group for E, w, Swoosh, and </ > to give that perfect dynamic slant */}
            <g transform="skewX(-13)">
              {/* "E" in pure white */}
              <path 
                d="M 35 50 H 105 V 72 H 61 V 88 H 88 V 108 H 61 V 124 H 82 V 146 H 35 Z" 
                fill="#FFFFFF" 
              />

              {/* "w" in vibrant blue gradient */}
              <path 
                d="M 70 80 L 90 146 H 110 L 120 115 L 130 146 H 150 L 170 62 H 148 L 135 115 L 125 80 H 115 L 105 115 L 90 80 H 70 Z" 
                fill="url(#blueElementGrad)" 
              />

              {/* Underlining Swoosh in vibrant blue gradient */}
              <path 
                d="M 25 115 C 18 128, 38 156, 100 156 C 142 156, 168 138, 168 134 C 168 138, 142 163, 100 163 C 35 163, 20 138, 25 115 Z" 
                fill="url(#blueElementGrad)" 
              />

              {/* Code symbol </ > floating above the right arm of "w" */}
              <g stroke="#00D2FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* < */}
                <path d="M 156 42 L 148 48 L 156 54" />
                {/* > */}
                <path d="M 172 42 L 180 48 L 172 54" />
                {/* / */}
                <path d="M 166 38 L 162 58" />
              </g>
            </g>
          </g>

          {/* "EAZZY WEBS" wordmark inside the circle */}
          <text 
            x="100" 
            y="136" 
            textAnchor="middle" 
            fontFamily="Inter, Poppins, system-ui, sans-serif" 
            fontWeight="900" 
            fontSize="16.5" 
            letterSpacing="1"
          >
            <tspan fill="#FFFFFF">EAZZY </tspan>
            <tspan fill="#0B66EF">WEBS</tspan>
          </text>

          {/* Thin horizontal divider with blue center segment */}
          <line x1="50" y1="148" x2="150" y2="148" stroke="#1E293B" strokeWidth="1" />
          <line x1="88" y1="148" x2="112" y2="148" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Slogan subtext at the bottom */}
          <text 
            x="100" 
            y="163" 
            textAnchor="middle" 
            fill="#FFFFFF" 
            fontFamily="Inter, Poppins, system-ui, sans-serif" 
            fontWeight="700" 
            fontSize="8.2" 
            letterSpacing="1.8"
          >
            MODERN WEBSITES.
          </text>
          <text 
            x="100" 
            y="175" 
            textAnchor="middle" 
            fill="#00D2FF" 
            fontFamily="Inter, Poppins, system-ui, sans-serif" 
            fontWeight="700" 
            fontSize="8.2" 
            letterSpacing="1.8"
          >
            REAL RESULTS.
          </text>
        </svg>
      </div>

      {/* Brand Text labels */}
      {showText && (
        <div className="flex flex-col tracking-wide" id="logo-text-wrapper">
          <div className={`${dimensions.text} font-black font-display flex items-center leading-none uppercase`}>
            <span className="text-white font-extrabold tracking-wide">EAZZY</span>
            <span className="text-brand-blue ml-1.5 font-extrabold tracking-wide group-hover:text-brand-cyan transition-colors duration-300">WEBS</span>
          </div>
          <span className="text-[9px] font-semibold text-slate-400 font-sans tracking-[0.16em] uppercase leading-none mt-1.5">
            Modern Websites. Real Results.
          </span>
        </div>
      )}
    </div>
  );
}
